import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { useParams } from "react-router";
import bgImage from "../../Assets/PNGs/nftDispBackground.jpg";
import Section from "../../Units/Section";
import EthIcon from "../../Assets/PNGs/ethereum.png";
import PopupModal from "../../Units/PopupModal";
import Creator from "../../Units/ArtDetails/Creator";
import useStyles from "./styles";
import { getNftDetails } from "../../Redux/Actions/nftArt.actions";
import useScrollToTop, { threeToTwoDecimal } from "../../Utilites";
import { purchaseNFT } from "../../Redux/Actions/nftSale.actions";
import PrimaryButton from "../../Units/Buttons/PrimaryButton";
import ErrorContainer from "../../Units/ErrorContainer";
import { PROFILE_BASE_URL } from "../../HTTP/config";
import Loading from "../../Units/Loading";
import { CURRENCY } from "../../utils/helper";

const PurschaseNftPage = ({
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
    saleId,
  },

  isPurchasing,
  isPurchasingFailed,

  isWalletConnected,
  walletBalance,

  getNftDetails,
  purchaseNFT,
}) => {
  const classes = useStyles();
  useScrollToTop();

  const { artParams } = useParams();
  const paramsArr = artParams.split("-");
  const artId = paramsArr[paramsArr.length - 1] || -1;

  useEffect(() => {
    getNftDetails(artId);
  }, [artId, getNftDetails]);

  const nftURL = Boolean(art_img)
    ? /ipfs:\/\//.test(art_img)
      ? `https://ipfs.io/ipfs/${art_img.split("//")[1]}`
      : art_img
    : bgImage;

  const currentBid = higgestBid ? higgestBid : art_price;

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

  const confirmBuy = () => {
    setIsOpen(false);
    purchaseNFT({
      saleId: Number(saleId),
      price: currentBid,
      artId: artId,
      creator_username: creator_username,
      art_name: art_name,
    });
  };

  if (isArtDataLoading) return <Loading />;

  return (
    <>
      <Section>
        <div className={classes.root}>
          <div>
            <div className={classes.innerContainer}>
              <div container className={classes.formOuter}>
                <Typography variant="h3" className={classes.heading}>
                  Purchase NFT
                </Typography>
                <Typography className={classes.title}>Art Name</Typography>
                <Typography className={classes.description}>
                  {art_name}
                </Typography>

                <Typography className={classes.title}>Description</Typography>
                <Typography className={classes.description}>
                  {art_description}
                </Typography>
              </div>
              <div>
                <Typography className={classes.priceTitle}>Price</Typography>
                <div className={classes.bidInputContainer}>
                  <div className={classes.priceContainer}>
                    <Typography variant="p" className={classes.price}>
                      {currentBid}
                    </Typography>
                  </div>
                  <div className={classes.ethContainer}>
                    <Typography variant="h5">{CURRENCY}</Typography>
                    <img
                      src={EthIcon}
                      alt="ETH Icon"
                      className={classes.ethImage}
                    />
                  </div>
                </div>
              </div>
              <div className={classes.balanceWrapper}>
                <div className={classes.balanceContainer}>
                  <Typography variant="p" className={classes.balanceTitle}>
                    Your Balance
                  </Typography>
                  <Typography variant="p" className={classes.balance}>
                    {threeToTwoDecimal(walletBalance) || "0.00"}&nbsp;{CURRENCY}
                  </Typography>
                </div>
              </div>
              <div className={classes.warningContainer}>
                {isWalletConnected ? (
                  walletBalance < currentBid && (
                    <Typography color="error">
                      You do not have enough funds to place bid.
                    </Typography>
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
                <PrimaryButton
                  primary
                  title="Purchase NFT"
                  disabled={walletBalance < currentBid || isPurchasing}
                  onClick={openModal}
                />
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
        onClick={confirmBuy}
      />

      <PopupModal
        open={isErrModal}
        onClose={closeModal}
        head="Wallet Not connected"
        buttonTitle="Okay"
        onClick={closeModal}
      >
        <Typography variant="h6">
          Please connect your wallet to Buy Nft.
        </Typography>
      </PopupModal>
    </>
  );
};

const mapStateToProps = (state) => {
  const { NftArt, NftSale, Wallet, Auction } = state;

  return {
    ...NftArt,
    ...Wallet,
    ...Auction,
    ...NftSale,
  };
};
const mapDispatchToProps = {
  getNftDetails,
  purchaseNFT,
};
export default connect(mapStateToProps, mapDispatchToProps)(PurschaseNftPage);
