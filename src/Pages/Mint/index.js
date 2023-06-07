import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, Typography } from "@material-ui/core";
import * as yup from "yup";
import { useFormik } from "formik";
import { connect } from "react-redux";
import {
  mintNFT,
  getIsApproveForAll,
  setApprovedForAll,
  hasRole,
} from "../../Redux/Actions/mint.actions";
import UploadImage from "../../Units/UploadNFT";
import CreateNftForm from "../../Components/CreateNftForm";
import PreviewNft from "../../Units/Preview";
import { useStyles } from "./styles";
import PopupModal from "../../Units/PopupModal";
import Loading from "../../Units/Loading";

const Mint = (props) => {
  const {
    isApprovedForAll,
    isApprovedForAllLoading,
    isApprovedForAllLoadingFailed,

    isNFTMinting,

    isWalletConnected,
    walletAddress,
    mintNFT,
    getIsApproveForAll,
    setApprovedForAll,

    connectedWallet,

    isContractInitialized,

    hasRole,
    isCheckingArtistStatus,
    isArtistStatusCheckingFailed,
    isAllowToMint,
  } = props;
  const classes = useStyles();

  useEffect(() => {
    const ARTIST_ROLE =
      "0x877a78dc988c0ec5f58453b44888a55eb39755c3d5ed8d8ea990912aa3ef29c6";
    if (isContractInitialized)
      hasRole({ role: ARTIST_ROLE, address: connectedWallet });
  }, [connectedWallet, isContractInitialized, hasRole]);

  const [isConfirmModalOpen, setConfirmModal] = useState(false);
  const openConfirmModal = () => setConfirmModal(true);
  const closeConfirmModal = useCallback(() => {
    setConfirmModal(false);
    formik.submitForm();
  }, []);

  const [isWalletErrorModalOpen, setIsWalletErrorModalOpen] = useState(false);
  const closeWalletErrorModal = () => setIsWalletErrorModalOpen(false);
  const openWalletErrorModal = () => setIsWalletErrorModalOpen(true);

  const handleSubmit = () => {
    if (isWalletConnected && walletAddress) openConfirmModal();
    else openWalletErrorModal();
  };

  useEffect(() => {
    if (isContractInitialized && walletAddress) getIsApproveForAll();
  }, [getIsApproveForAll, walletAddress, isContractInitialized]);

  const handleSetApprovedForAll = () => {
    setApprovedForAll({ isApprove: true });
  };
  const [switchesState, setSwitches] = React.useState({
    sale: false,
    isAuction: true,
    isFixPrice: false,
  });

  const auctionSchema = {
    days: yup.number("").moreThan(-1, "Must be greater than 0"),
    hours: yup
      .number("")
      .moreThan(0, "Must be greater than 0")
      .max(24, "Must be less than 24")
      .required("required"),
    startingBid: yup
      .number("Please Enter a vailable bid")
      .moreThan(0, "Must be greater than 0")
      .required("Starting Bid is required"),
  };
  const fixPriceSchema = {
    fixPrice: yup
      .number("Fixed Price should be a number")
      .moreThan(0, "Must be greater than 0")
      .required("Price is required"),
  };
  const nftSchema = {
    title: yup.string("").required("NFT name is required"),
    description: yup.string("").required("Description is required"),
    image: yup
      .mixed("")
      .test(
        "image",
        "Please select a valid image or gif.",
        (file) =>
          file && /\.(jpg|jpeg|png|gif)$/.test(file.name.toLocaleLowerCase())
      )
      .required("Image is required"),
    accpetTerms: yup
      .boolean("")
      .oneOf([true], "Please agree with Terms and Conditions"),
  };

  const validationSchema = yup.object(
    switchesState.sale
      ? switchesState.isAuction
        ? { ...auctionSchema, ...nftSchema }
        : switchesState.isFixPrice
        ? { ...fixPriceSchema, ...nftSchema }
        : { ...nftSchema }
      : { ...nftSchema }
  );

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      days: 0,
      hours: 1,
      image: "",
      startingBid: "",
      fixPrice: "",
      accpetTerms: true,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await mintNFT({
        nftTitle: values.title,
        description: values.description,
        imageFile: values.image,
        isAuction: switchesState.isAuction,
        days: switchesState.isAuction ? values.days : "",
        hours: switchesState.isAuction ? values.hours : "",
        nftPrice: switchesState.isAuction
          ? values.startingBid
          : values.fixPrice,
        isOnSale: switchesState.sale,
      });
    },
  });

  const handleImageUploadComplete = (file) => {
    formik.setFieldValue("image", file);
  };

  const imgRef = useRef(null);

  const resetForm = () => {
    formik.resetForm();
    if (imgRef.current) imgRef.current.style.backgroundImage = "";
  };

  if (isCheckingArtistStatus)
    return (
      <div className={classes.loader}>
        <Typography variant="h5">
          Checking if You can Mint NFTs. Please wait.
        </Typography>
        <div className="progress-bar">
          <Loading />
        </div>
      </div>
    );

  if (isArtistStatusCheckingFailed)
    return (
      <div className={classes.loader}>
        <Typography variant="h5">
          Failed to check if the address is approved for minting.
        </Typography>
      </div>
    );

  if (!isAllowToMint)
    return (
      <div className={classes.loader}>
        <Typography variant="h5">
          Create NFT function is only open to approved artists at the moment.
          Please contact us for more information at&nbsp;
          <em>
            <a href="mailto:marketing@Virtual Nft.io">
              marketing@Virtual Nft.io
            </a>
          </em>
          &nbsp;if you wish to join Virtual Nft as an approved artist.
        </Typography>
      </div>
    );

  return (
    <>
      <div className={classes.container}>
        <div container className={classes.formOuter}>
          <div className={classes.formRoot}>
            <div className={classes.headingWrap}>
              <p>Create Collectible</p>
            </div>

            <div>
              <form onSubmit={formik.handleSubmit}>
                <UploadImage
                  ref={imgRef}
                  handleImageUploadComplete={handleImageUploadComplete}
                  value={formik.values.image}
                  helperText={formik.touched.image && formik.errors.image}
                  error={formik.touched.image && Boolean(formik.errors.image)}
                />
                <CreateNftForm
                  formik={formik}
                  switchesState={switchesState}
                  setSwitches={setSwitches}
                />

                {!isWalletConnected && (
                  <Typography
                    variant="h6"
                    color="error"
                    className={classes.note}
                  >
                    Please connect your wallet to enable Buttons
                  </Typography>
                )}
                {isWalletConnected && (
                  <div>
                    {isApprovedForAllLoadingFailed ? (
                      <Typography
                        variant="h6"
                        color="error"
                        className={classes.note}
                      >
                        Failed to check your approval status. Please try later.
                      </Typography>
                    ) : (
                      !isApprovedForAll &&
                      !isApprovedForAllLoading && (
                        <Typography variant="h6" className={classes.note}>
                          <em>NOTE</em>: You are seeing this message as you need
                          to approve the Virtual Nft Marketplace contract to
                          manage minted NFTs on your behalf. You will only need
                          to do this the first time you mint a NFT and it will
                          stay valid for all future minting, you can revoke this
                          authorization at anytime. Note that you may have to
                          wait a minute for the authorization to take effect
                          after it has been submitted to the blockchain.
                        </Typography>
                      )
                    )}
                  </div>
                )}

                <div className={classes.buttonsContainer}>
                  <Button
                    onClick={handleSubmit}
                    className="primary button"
                    disabled={
                      !isWalletConnected || isNFTMinting || !isApprovedForAll
                    }
                    fullWidth
                  >
                    Create Nft
                  </Button>

                  {!isApprovedForAll && !isApprovedForAllLoading && (
                    <Button
                      variant="outlined"
                      className="main button"
                      onClick={handleSetApprovedForAll}
                      fullWidth
                      disabled={!isWalletConnected}
                    >
                      Approve Virtual Nft Marketplace
                    </Button>
                  )}

                  <Button
                    variant="outlined"
                    className="secondary button"
                    onClick={resetForm}
                    fullWidth
                    disabled={!isWalletConnected}
                  >
                    Reset Form
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className={classes.previewWrap}>
            <PreviewNft ref={imgRef} />
          </div>
        </div>
      </div>

      <PopupModal
        onClose={closeWalletErrorModal}
        onClick={closeWalletErrorModal}
        head="Wallet Error"
        open={isWalletErrorModalOpen}
        buttonTitle="Okay"
      >
        <Typography variant="h6">
          Please connect your wallet before miniting.
        </Typography>
      </PopupModal>

      <PopupModal
        onExited={() => setConfirmModal(false)}
        onClose={() => setConfirmModal(false)}
        onClick={closeConfirmModal}
        head="Are you sure to proceed?"
        open={isConfirmModalOpen}
        buttonTitle="Okay"
      >
        <Typography variant="h6">
          All information provided (Title, NFT Details, etc.) will be stored on
          the blockchain forever, and it is impssioble to edit, modify, or
          delete. Please review your submission before pressing OKAY.
        </Typography>
      </PopupModal>
    </>
  );
};

const mapStateToProps = (state) => {
  const { Mint, Wallet, Auth, Contract } = state;
  return {
    ...Mint,
    ...Wallet,
    connectedWallet: Auth.user.walletAddress,
    isContractInitialized: Contract.isContractInitialized,
  };
};
const mapDispatchToProps = {
  mintNFT,
  getIsApproveForAll,
  setApprovedForAll,
  hasRole,
};

export default connect(mapStateToProps, mapDispatchToProps)(Mint);
