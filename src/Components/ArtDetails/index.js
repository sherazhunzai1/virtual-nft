import React from "react";
import { Divider, Grid, Toolbar, Typography } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useHistory } from "react-router";
import UserButton from "../../Units/Buttons/UserButton";
import History from "../../Units/ArtDetails/History";
import Creator from "../../Units/ArtDetails/Creator";
import AuctionDetails from "../../Units/ArtDetails/AuctionDetails";
import useScrollToTop from "../../Utilites";
import ShareButton from "../../Units/Buttons/ShareButton";
import styles from "./styles.module.css";
import { useStyles } from "./styles";
import ShareModal from "../../Units/ShareModal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useFullscreenStatus } from "../../Utilites";

const ArtDetails = ({
  chainName,
  artData,
  contractAddress,
  transactionsHistory,
}) => {
  const classes = useStyles();
  useScrollToTop();
  const {
    id,
    art_name,
    art_description,
    creator_username,
    creator_fullName,
    creator_description,
    creator_img,
    owner_username,
    owner_walletAddress,
    higgestBidderAddress,
    owner_img,
    art_img,
    art_price,
    end_date,
    isAuction,
    isFixedprice,
    higgestBid,
    metadata,
    tokenId = 0,
  } = artData;
  const [openShareModal, setOpenShareModal] = useState(false);
  const maximizableElement = React.useRef(null);
  const [isFullscreen, setIsFullscreen] =
    useFullscreenStatus(maximizableElement);
  const handleShareModal = () => {
    setOpenShareModal(!openShareModal);
  };
  const history = useHistory();
  const navigateToPlaceBid = () => {
    const artName = String(art_name)
      .trim()
      .replace(/[^a-zA-Z0-9 ]/g, "");
    const uri = `${artName} ${id}`.split(" ").join("-");
    const path = `/place-bid/${uri}`;
    history.push(path);
  };

  const navigateToPurchaseNFT = () => {
    const artName = String(art_name)
      .trim()
      .replace(/[^a-zA-Z0-9 ]/g, "");
    const uri = `${artName} ${id}`.split(" ").join("-");
    const path = `/purchase-nft/${uri}`;
    history.push(path);
  };

  const nftURL = Boolean(art_img)
    ? /ipfs:\/\//.test(art_img)
      ? `https://ipfs.io/ipfs/${art_img.split("//")[1]}`
      : art_img
    : null;

  const {
    Auth: { walletAddress },
  } = useSelector((state) => state);
  const url = window.location.href;
  return (
    <>
      <Grid style={{ backgroundColor: "white" }}>
        <Grid>
          <div className={classes.imageBackground} onClick={setIsFullscreen}>
            <div className={classes.cardMedia}>
              <div className="outer" />
              <div className="media__container">
                <img
                  ref={maximizableElement}
                  src={nftURL}
                  alt={art_name}
                  className={isFullscreen ? "media__fullscreen" : "media"}
                />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <div className={classes.innerContainer}>
            <div className={styles.subMenuContaienr}>
              <div className={styles.shareUser}>
                <div>
                  <Typography
                    gutterBottom
                    className={classes.subSubHeading}
                    variant="h5"
                  >
                    Created by
                  </Typography>
                  <UserButton
                    profilePic={creator_img}
                    userName={creator_username}
                  />
                </div>

                <ShareButton onClick={handleShareModal} />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <div className={classes.container}>
        <div className={classes.gridContainer}>
          <div>
            <Typography className={classes.subHeading}>{art_name}</Typography>
            <div className={styles.mTop10}>
              <a href="#artInfo" className={styles.toBottomLink}>
                <span className={styles.linkIcon}>
                  <ArrowDownwardIcon />
                </span>
                <span className={styles.inlineBlock}>
                  <Typography>Artwork information</Typography>
                </span>
              </a>
            </div>

            <div className={classes.descriptionContainer}>
              <Typography className={classes.subSubHeading}>
                {art_description}
              </Typography>
            </div>
          </div>

          {Boolean(isAuction) ? (
            <div>
              <AuctionDetails
                title={higgestBid ? "Current Bid" : "Reserve Price"}
                buttonTtitle={
                  end_date > Math.floor(Date.now())
                    ? "Place a bid"
                    : "Settle Auction"
                }
                hideButton={
                  (end_date < Math.floor(Date.now()) &&
                    (String(owner_walletAddress).toLocaleLowerCase() !==
                      String(walletAddress).toLocaleLowerCase() ||
                      String(higgestBidderAddress).toLocaleLowerCase() !==
                        String(walletAddress).toLocaleLowerCase())) ||
                  (end_date > Math.floor(Date.now()) &&
                    String(owner_walletAddress).toLocaleLowerCase() ===
                      String(walletAddress).toLocaleLowerCase())
                }
                auctionEndTime={end_date}
                priceInETH={higgestBid ? higgestBid : art_price}
                ownerUsername={owner_username}
                ownerImage={owner_img}
                profilePic={creator_img}
                userName={creator_username}
                onButtonClick={navigateToPlaceBid}
              />
            </div>
          ) : Boolean(isFixedprice) ? (
            <div>
              <AuctionDetails
                title={"Fix Price"}
                buttonTtitle={"BUY"}
                priceInETH={higgestBid ? higgestBid : art_price}
                ownerUsername={owner_username}
                hideButton={
                  String(owner_walletAddress).toLocaleLowerCase() ===
                  String(walletAddress).toLocaleLowerCase()
                }
                ownerImage={owner_img}
                profilePic={creator_img}
                userName={creator_username}
                onButtonClick={navigateToPurchaseNFT}
              />
            </div>
          ) : null}
        </div>
        <Toolbar />

        <div className={classes.gridContainer}>
          <div className={classes.creatorContainer}>
            <Creator
              profilePic={creator_img}
              hasProfilePicture={Boolean(creator_img)}
              fullname={creator_fullName}
              username={creator_username}
              creatorDescription={creator_description}
            />
          </div>

          <div className={classes.historyContainer}>
            <div className={styles.historyMargin}>
              <Typography className={styles.subTitle} variant="h4">
                History
              </Typography>
              <Divider className={classes.divider} />
            </div>

            {transactionsHistory.map(
              (
                {
                  date,
                  transactionAmount,
                  transactionHash,
                  transactionType,
                  userImg,
                  username,
                },
                { i }
              ) => (
                <History
                  key={i}
                  type={transactionType}
                  profilePic={userImg}
                  username={username}
                  priceEth={transactionAmount}
                  date={date}
                  linkAddress={`https://mumbai.polygonscan.com/tx/${transactionHash}`}
                />
              )
            )}
          </div>
        </div>
      </div>
      <Toolbar />

      <div className={classes.container}>
        <Divider />
      </div>

      <Grid container className={classes.container} id="artInfo">
        <Grid item md={6} sm={8} xs={12}>
          <div>
            <Typography variant="h4">Artwork Information</Typography>
          </div>
          <div className={classes.linksContainer}>
            <ExternalLink href={Boolean(art_img) ? nftURL : null}>
              View NFT On IPFS
            </ExternalLink>

            <ExternalLink
              href={
                Boolean(metadata) ? `https://ipfs.io/ipfs/${metadata}` : null
              }
            >
              View metadata On IPFS
            </ExternalLink>

            <ExternalLink
              href={
                Boolean(contractAddress) &&
                Boolean(tokenId) &&
                `https://etherscan.io/token/${contractAddress}/?a=${tokenId}`
              }
            >
              View On Etherscan
            </ExternalLink>
          </div>
        </Grid>
        <ShareModal
          url={url}
          open={openShareModal}
          onClose={handleShareModal}
        />
      </Grid>
    </>
  );
};

export default ArtDetails;

const ExternalLink = ({ href = "void(0)", children }) => {
  const classes = useStyles();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.anchorTag}
    >
      <div className={classes.externalLinks}>
        <Typography className="text">{children}</Typography>
        <ArrowForwardIcon />
      </div>
    </a>
  );
};
