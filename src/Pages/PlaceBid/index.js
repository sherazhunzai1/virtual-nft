import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { useParams } from "react-router";
import { connect, useDispatch } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";
import InputField from "../../Units/InputField";
import bgImage from "../../Assets/PNGs/nftDispBackground.jpg";
import Section from "../../Units/Section";
import EthIcon from "../../Assets/PNGs/ethereum.png";
import { getNftDetails } from "../../Redux/Actions/nftArt.actions";
import { placeBid, settleAuction } from "../../Redux/Actions/auction.actions";
import useScrollToTop from "../../Utilites";
import PopupModal from "../../Units/PopupModal";
import Creator from "../../Units/ArtDetails/Creator";
import PrimaryButton from "../../Units/Buttons/PrimaryButton";
import { buttonStyles, useStyles } from "./styles";
import ErrorContainer from "../../Units/ErrorContainer";
import { PROFILE_BASE_URL } from "../../HTTP/config";
import Loading from "../../Units/Loading";
import { CURRENCY } from "../../utils/helper";

const PlaceBid = ({
  isArtDataLoading,
  artDetails: {
    art_name,
    art_img,
    art_price,
    art_description,
    end_date,
    creator_username,
    creator_fullName,
    creator_description,
    creator_img,
    isAuction,
    higgestBid,

    higgestBidderAddress,

    owner_walletAddress,
    auctionId,
  },

  connectedWallet,
  isWalletConnected,
  walletBalance,
  isPlacingBid,
  isPlacingBidFailed,

  isSettlingAuction,
  getNftDetails,
  placeBid,
  settle,
}) => {
  const classes = useStyles();
  useScrollToTop();

  const { artParams } = useParams();
  const paramsArr = artParams.split("-");
  const artId = paramsArr[paramsArr.length - 1] || -1;
  const [isSettled, setIsSettled] = useState(end_date > Math.floor(Date.now()));

  useEffect(() => {
    setIsSettled(end_date > Math.floor(Date.now()));
  }, [end_date]);

  useEffect(() => {
    getNftDetails(artId);
  }, [artId, getNftDetails]);

  const nftURL = Boolean(art_img)
    ? /ipfs:\/\//.test(art_img)
      ? `https://ipfs.io/ipfs/${art_img.split("//")[1]}`
      : art_img
    : bgImage;

  const currentBid = higgestBid ? higgestBid : art_price;
  const validationSchema = yup.object({
    bidAmount: yup
      .number("Please Enter a vailable bid")
      .moreThan(currentBid, `Must be greater than ${currentBid}`)
      .required("Bid is required"),
  });

  const formik = useFormik({
    initialValues: {
      bidAmount: currentBid,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      placeBid({
        auctionId,
        price: values.bidAmount,
        art_name: art_name,
        creator_username: creator_username,
        artId: artId,
      });
    },
  });

  const [isOpen, setIsOpen] = useState(false);

  const [isErrModal, setIsErrModal] = useState(false);
  const openModal = () => {
    if (isWalletConnected) setIsOpen(true);
    else setIsErrModal(true);
  };
  const closeModal = () => {
    if (isWalletConnected) setIsOpen(false);
    else setIsErrModal(false);
  };

  const handleSubmit = () => {
    setIsOpen(false);
    formik.submitForm();
  };

  // remove this later
  const dispatch = useDispatch();
  const handleSettleAuction = () => {
    dispatch(settleAuction(auctionId));
  };

  if (isArtDataLoading) return <Loading />;

  return (
    <>
      <Section>
        <div className={classes.root}>
          <div>
            <div className={classes.innerContainer}>
              <div className={classes.formOuter}>
                <Typography variant="h3" className={classes.heading}>
                  {isSettled ? "Place a bid" : "Settle Auction"}
                </Typography>
                <Typography className={classes.title}>Art Name</Typography>
                <Typography className={classes.description}>
                  {art_name}
                </Typography>

                <Typography className={classes.title}>Description</Typography>
                <Typography className={classes.description}>
                  {art_description}
                </Typography>

                <Typography className={classes.subHeading}>
                  <em>Note</em>: Your bid must be greater than {currentBid}
                  &nbsp;{CURRENCY}
                </Typography>
              </div>

              <Typography className={classes.title}>
                {isSettled ? "Your Bid" : "Final Price"}
              </Typography>

              <form
                onSubmit={formik.handleSubmit}
                className={classes.bidInputContainer}
              >
                {isSettled ? (
                  <InputField
                    type="number"
                    name="bidAmount"
                    fullWidth={true}
                    variant="outlined"
                    step="any"
                    value={formik.values.bidAmount}
                    helperText={
                      formik.touched.bidAmount && formik.errors.bidAmount
                    }
                    error={
                      formik.touched.bidAmount &&
                      Boolean(formik.errors.bidAmount)
                    }
                    onChange={formik.handleChange}
                  />
                ) : (
                  <div className={classes.priceContainer}>
                    <Typography variant="p" className={classes.price}>
                      {currentBid}
                    </Typography>
                  </div>
                )}
                <div className={classes.ethContainer}>
                  <Typography variant="h5">{CURRENCY}</Typography>
                  <img
                    src={EthIcon}
                    alt="ETH Icon"
                    className={classes.ethImage}
                  />
                </div>
              </form>

              <div className={classes.balanceWrapper}>
                <div className={classes.balanceContainer}>
                  <Typography variant="p" className={classes.balanceTitle}>
                    Your Balance
                  </Typography>
                  <Typography variant="p" className={classes.balance}>
                    {walletBalance}&nbsp;{CURRENCY}
                  </Typography>
                </div>
              </div>

              <div className={classes.warningContainer}>
                {isWalletConnected ? (
                  walletBalance < currentBid && (
                    <>
                      {walletBalance < currentBid && (
                        <ErrorContainer className={classes.errorOuter}>
                          You do not have enough funds to place bid.
                        </ErrorContainer>
                      )}

                      {formik.values.bidAmount > walletBalance && (
                        <ErrorContainer className={classes.errorOuter}>
                          You do not have
                          {formik.values.bidAmount}
                          &nbsp;{{ CURRENCY }}.
                        </ErrorContainer>
                      )}
                    </>
                  )
                ) : (
                  <div className={classes.errorOuter}>
                    <ErrorContainer>
                      Your wallet is not connected
                    </ErrorContainer>
                  </div>
                )}
              </div>
              <div className={classes.buttonContainer}>
                {isSettled ? (
                  <PrimaryButton
                    onClick={openModal}
                    primary
                    Stylings={buttonStyles}
                    disabled={isPlacingBid || !isWalletConnected}
                    title="Place a bid"
                  />
                ) : String(owner_walletAddress).toLocaleLowerCase() ===
                    String(connectedWallet).toLocaleLowerCase() ||
                  String(higgestBidderAddress).toLocaleLowerCase() ===
                    String(connectedWallet).toLocaleLowerCase() ? (
                  <PrimaryButton
                    onClick={handleSettleAuction}
                    primary
                    title="Settle Auction"
                    disabled={isSettlingAuction || !isWalletConnected}
                  />
                ) : (
                  <Typography>Auction has Ended.</Typography>
                )}
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
            <div className={classes.creatorContainer}>
              <Creator
                profilePic={`${PROFILE_BASE_URL}/${creator_img}`}
                hasProfilePicture={Boolean(creator_img)}
                fullname={creator_fullName}
                username={creator_username}
                creatorDescription={creator_description}
              />
            </div>
          </div>
        </div>
      </Section>

      <PopupModal
        open={isOpen}
        onClose={closeModal}
        head="Are you sure?"
        buttonTitle="Proceed"
        onClick={handleSubmit}
      />
      <PopupModal
        open={isErrModal}
        onClose={closeModal}
        head="Wallet Not connected"
        buttonTitle="Okay"
        onClick={closeModal}
      >
        <Typography variant="h6">
          Please connect your wallet to place a bid.
        </Typography>
      </PopupModal>
    </>
  );
};

const mapStateToProps = (state) => {
  const { NftArt, Wallet, Auction, Auth } = state;

  return {
    ...NftArt,
    ...Wallet,
    ...Auction,
    connectedWallet: Auth.user.walletAddress,
  };
};
const mapDispatchToProps = {
  getNftDetails,
  placeBid,
  settleAuction,
};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceBid);
