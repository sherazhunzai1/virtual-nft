import React, { useEffect, useState } from "react";
import { Button, Checkbox, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router";
import * as yup from "yup";
import { useFormik } from "formik";
import { connect } from "react-redux";
import Section from "../../Units/Section";
import PopupModal from "../../Units/PopupModal";
import Switches from "../../Units/Switches";
import InputField from "../../Units/InputField";
import bgImage from "../../Assets/PNGs/nftDispBackground.jpg";
import useScrollToTop from "../../Utilites";
import useStyles from "./styles";

import {
  getIsApproveForAll,
  setApprovedForAll,
} from "../../Redux/Actions/mint.actions";
import { createAnAuction } from "../../Redux/Actions/auction.actions";
import { createFixPriceSale } from "../../Redux/Actions/nftSale.actions";
import { getNftDetails } from "../../Redux/Actions/nftArt.actions";

const NftSaleForm = ({
  isArtDataLoading,
  isArtFound,
  artDetails: {
    tokenId,
    art_name,
    creator_username,
    art_img,
    art_description,
    owner_id,
  },
  loggedInUserId,
  isApprovedForAll,
  isApprovedForAllLoading,
  isApprovedForAllLoadingFailed,

  isWalletConnected,
  walletAddress,
  getIsApproveForAll,
  setApprovedForAll,
  web3,

  createAnAuction,
  createFixPriceSale,
  getNftDetails,
}) => {
  const classes = useStyles();
  useScrollToTop();

  const history = useHistory();

  const { artParams } = useParams();
  const paramsArr = artParams.split("-");
  const artId = paramsArr[paramsArr.length - 1] || -1;

  useEffect(() => {
    getNftDetails(artId);
  }, [artId, getNftDetails]);

  useEffect(() => {
    if (!isArtFound) {
      if (!loggedInUserId) return history.push("/");
      if (owner_id && loggedInUserId)
        if (loggedInUserId !== owner_id) history.push("/");
    }
  }, [isArtFound, owner_id, loggedInUserId, history]);

  const nftURL = Boolean(art_img)
    ? /ipfs:\/\//.test(art_img)
      ? `https://ipfs.io/ipfs/${art_img.split("//")[1]}`
      : art_img
    : bgImage;

  const [isConfirmModalOpen, setConfirmModal] = useState(false);
  const openConfirmModal = () => setConfirmModal(true);
  const closeConfirmModal = () => setConfirmModal(false);

  const handleConfrim = () => {
    closeConfirmModal();
    formik.submitForm();
  };

  const [isWalletErrorModalOpen, setIsWalletErrorModalOpen] = useState(false);
  const closeWalletErrorModal = () => setIsWalletErrorModalOpen(false);
  const openWalletErrorModal = () => setIsWalletErrorModalOpen(true);

  const handleSubmit = () => {
    if (isWalletConnected && walletAddress) openConfirmModal();
    else openWalletErrorModal();
  };

  useEffect(() => {
    getIsApproveForAll();
  }, [getIsApproveForAll, walletAddress]);

  const handleSetApprovedForAll = () => {
    setApprovedForAll({ isApprove: true });
  };
  const [{ isAuction, isFixPrice }, setSwitches] = React.useState({
    isAuction: true,
    isFixPrice: false,
  });

  const toggleSwitches = () => {
    setSwitches((p) => ({
      ...p,
      isFixPrice: p.isAuction ? true : false,
      isAuction: p.isAuction ? false : true,
    }));
  };
  const switchData = [
    {
      title: "Put on auction",
      phrase: "",
      checked: isAuction,
      setChecked: toggleSwitches,
    },

    {
      title: "Fixed price",
      phrase: "",
      checked: isFixPrice,
      setChecked: toggleSwitches,
    },
  ];

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

  const validationSchema = yup.object(
    isAuction ? { ...auctionSchema } : { ...fixPriceSchema }
  );

  const formik = useFormik({
    initialValues: {
      days: 0,
      hours: 1,
      startingBid: "",
      fixPrice: "",
      accpetTerms: true,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const _tokenId = Number(tokenId);
      if (isAuction) {
        const priceInWei = web3.utils.toWei(
          values.startingBid.toString(),
          "ether"
        );
        const _endTimeInSeconds =
          (Number(values.days) * 24 + Number(values.hours)) * 3600;
        createAnAuction({
          tokenId: _tokenId,
          priceInWei,
          _endTimeInSeconds,
          artId: artId,
          creator_username: creator_username,
          art_name: art_name,
        });
      } else {
        const priceInWei = web3.utils.toWei(
          values.fixPrice.toString(),
          "ether"
        );
        createFixPriceSale({
          tokenId: _tokenId,
          priceInWei,
          artId: artId,
          creator_username: creator_username,
          art_name: art_name,
        });
      }
    },
  });

  const resetForm = () => {
    formik.resetForm();
  };

  if (isArtDataLoading) return <p>Loading...</p>;

  return (
    <>
      <Section>
        <div className={classes.root}>
          <div>
            <div className={classes.container}>
              <div container className={classes.formOuter}>
                <Typography variant="h3" className={classes.heading}>
                  Sell NFT
                </Typography>
                <Typography className={classes.title}>Art Name</Typography>
                <Typography className={classes.description}>
                  {art_name}
                </Typography>

                <Typography className={classes.title}>Description</Typography>
                <Typography className={classes.description}>
                  {art_description}
                </Typography>

                <div className={classes.formRoot}>
                  <div>
                    {switchData.map((item, index) => (
                      <Switches
                        key={index}
                        title={item.title}
                        phrase={item.phrase}
                        checked={item.checked}
                        setChecked={item.setChecked}
                      />
                    ))}
                  </div>
                  <form onSubmit={formik.handleSubmit}>
                    {isAuction && (
                      <>
                        <div>
                          <p className={classes.inputLabel}>
                            Place on Auction For:
                          </p>
                        </div>

                        <div className={classes.auctionTimeInputs}>
                          <div>
                            <InputField
                              name="days"
                              placeholder="Days"
                              label="Days"
                              type="number"
                              variant="outlined"
                              className={classes.auctionTimeInput}
                              value={formik.values.days}
                              helperText={
                                formik.touched.days && formik.errors.days
                              }
                              error={
                                formik.touched.days &&
                                Boolean(formik.errors.days)
                              }
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                          </div>

                          <div>
                            <InputField
                              name="hours"
                              placeholder="Hours"
                              label="Hours"
                              type="number"
                              variant="outlined"
                              className={classes.auctionTimeInput}
                              value={formik.values.hours}
                              helperText={
                                formik.touched.hours && formik.errors.hours
                              }
                              error={
                                formik.touched.hours &&
                                Boolean(formik.errors.hours)
                              }
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                          </div>
                        </div>

                        <div>
                          <p className={classes.inputLabel}>
                            Starting Bid in ETH
                          </p>
                          <InputField
                            className={classes.inputField}
                            placeholder="Starting Bid"
                            type="number"
                            margin="normal"
                            variant="outlined"
                            name="startingBid"
                            value={formik.values.startingBid}
                            helperText={
                              formik.touched.startingBid &&
                              formik.errors.startingBid
                            }
                            error={
                              formik.touched.startingBid &&
                              Boolean(formik.errors.startingBid)
                            }
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        </div>
                      </>
                    )}

                    {isFixPrice && (
                      <div>
                        <p className={classes.inputLabel}>Fix Price in ETH</p>
                        <InputField
                          className={classes.inputField}
                          placeholder="Price"
                          type="number"
                          margin="normal"
                          variant="outlined"
                          name="fixPrice"
                          value={formik.values.fixPrice}
                          helperText={
                            formik.touched.fixPrice && formik.errors.fixPrice
                          }
                          error={
                            formik.touched.fixPrice &&
                            Boolean(formik.errors.fixPrice)
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                    )}

                    <div>
                      <div className={classes.agreement}>
                        <Checkbox
                          color="primary"
                          name="accpetTerms"
                          checked={formik.values.accpetTerms}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />

                        <p>
                          I agree to the&nbsp;
                          <Link to="/terms" className={classes.termLink}>
                            Terms and Conditions
                          </Link>
                          {formik.touched.accpetTerms &&
                            Boolean(formik.errors.accpetTerms) && (
                              <p className={classes.errorMessage}>
                                {formik.touched.accpetTerms &&
                                  formik.errors.accpetTerms}
                              </p>
                            )}
                        </p>
                      </div>
                    </div>

                    <div>
                      {isApprovedForAllLoadingFailed ? (
                        <Typography
                          variant="h6"
                          color="error"
                          className={classes.note}
                        >
                          Failed to check your approval status. Please try
                          later.
                        </Typography>
                      ) : (
                        !isApprovedForAll &&
                        !isApprovedForAllLoading && (
                          <Typography variant="h6" className={classes.note}>
                            <em>NOTE</em>: You are seeing this message as you
                            need to approve the Virtual Nft Marketplace contract
                            to manage minted NFTs on your behalf. You will only
                            need to do this the first time you mint a NFT and it
                            will stay valid for all future minting, you can
                            revoke this authorization at anytime. Note that you
                            may have to wait a minute for the authorization to
                            take effect after it has been submitted to the
                            blockchain.
                          </Typography>
                        )
                      )}
                    </div>
                    <div className={classes.buttonsContainer}>
                      <Button
                        onClick={handleSubmit}
                        className="primary button"
                        disabled={!isApprovedForAll}
                        fullWidth
                      >
                        Sell Nft
                      </Button>

                      {!isApprovedForAll && !isApprovedForAllLoading && (
                        <Button
                          variant="outlined"
                          className="main button"
                          onClick={handleSetApprovedForAll}
                          fullWidth
                        >
                          Approve Virtual Nft Marketplace
                        </Button>
                      )}

                      <Button
                        variant="outlined"
                        className="secondary button"
                        onClick={resetForm}
                        fullWidth
                      >
                        Reset Form
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className={classes.imageRoot}>
              <div className={classes.cardMedia}>
                <div className="outer" />
                <div className="media__container">
                  <img src={nftURL} className="media" alt="nft" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

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
        onClose={closeConfirmModal}
        onClick={handleConfrim}
        head="Are you sure to proceed?"
        open={isConfirmModalOpen}
        buttonTitle="Okay"
      >
        <Typography variant="h6">
          All information added (Title, Description and Image) will be stored on
          the blockchain forever and cannot be changed. Please double check for
          mistakes before confirming.
        </Typography>
      </PopupModal>
    </>
  );
};

const mapStateToProps = (state) => {
  const { Auth, Mint, NftArt, Wallet, Web3Instance } = state;
  return {
    ...NftArt,
    ...Mint,
    ...Wallet,
    loggedInUserId: Auth.user.userId,
    web3: Web3Instance.web3,
  };
};
const mapDispatchToProps = {
  getIsApproveForAll,
  setApprovedForAll,
  getNftDetails,
  createAnAuction,
  createFixPriceSale,
};

export default connect(mapStateToProps, mapDispatchToProps)(NftSaleForm);
