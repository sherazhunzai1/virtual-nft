import React from "react";
import { Grid, Typography, Divider, Box } from "@material-ui/core";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import UserButton from "../../Units/Buttons/UserButton";
import PrimaryButton from "../../Units/Buttons/PrimaryButton";
import TimerComponent from "../../Units/MainAuctionTimer";
import PriceComponent from "../../Units/PriceComponent";
import coverImage from "../../Assets/PNGs/auctionBack.png";
import Loading from "../../Units/Loading";
import { useStyles } from "./styles";
import { createURL, whatIsFileType } from "../../utils/helper";
import logoAnimated from "../../Assets/logoAnimated.mp4";

const MainAuction = (props) => {
  const {
    auctionData: {
      id,
      higgestBid,
      art_name,
      creator_name,
      creator_img,
      art_img,
      end_date,
      art_price,
      owner_walletAddress,
      owner_name,
      owner_img,
      isAuction,
      higgestBidderAddress,
    },
    isDataLoading,
  } = props;

  const classes = useStyles();
  const history = useHistory();

  const handleViewArtWrokClick = () => {
    let path = `/@${creator_name}/${createURL(art_name, id)}`;
    history.push(path);
  };

  const navigateToPlaceBid = () => {
    const uri = createURL(art_name, id);
    const path = `/place-bid/${uri}`;
    history.push(path);
  };

  const {
    Auth: { walletAddress },
  } = useSelector((state) => state);

  if (isDataLoading)
    return (
      <div className={classes.loadercontainer}>
        <Loading />
      </div>
    );

  if (!id) return <Typography>No data to show </Typography>;

  return (
    <>
      <div
        className={classes.mainContainer}
        style={{ backgroundImage: `url('${coverImage}')` }}
      >
        <Grid container spacing={4} className={classes.container}>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            className={`${classes.textCenter} ${classes.imageContainer}`}
          >
            <Box className={classes.imageWrapper}>
              {whatIsFileType(art_img) === "image" && (
                <img
                  src={
                    art_img && `https://ipfs.io/ipfs/${art_img.split("//")[1]}`
                  }
                  alt=""
                  className={classes.image}
                />
              )}
              {whatIsFileType(art_img) === "video" && (
                <video
                  src={art_img}
                  alt=""
                  loop
                  autoplay="true"
                  muted
                  className={classes.image}
                />
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6} className={classes.leftContainer}>
            <Grid item xs={12} md={12} lg={12} className="bottom">
              <Grid className={classes.alignLeft}>
                <UserButton profilePic={creator_img} userName={creator_name} />
              </Grid>
              <Grid className={classes.mainHeading}>
                <Typography
                  className={classes.bigHeading}
                  variant="h2"
                  component="h1"
                >
                  {art_name}
                </Typography>
              </Grid>
              <Grid container className={classes.bottomMargin}>
                <Grid
                  item
                  xm={12}
                  sm={12}
                  md={5}
                  className={classes.mainAuctionPrice}
                >
                  <PriceComponent
                    title={
                      !isAuction
                        ? "Fix Price"
                        : higgestBid
                        ? "Current Bid"
                        : "Reserve Price"
                    }
                    priceInETH={higgestBid ? higgestBid : art_price}
                    priceInCurrency=""
                  />
                  <Divider orientation="vertical" />
                </Grid>

                {Boolean(Number(isAuction)) && (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    className={classes.timerContainer}
                  >
                    <TimerComponent
                      // time={end_date}
                      ownerUsername={owner_name}
                      ownerProfilePicture={owner_img}
                      className={classes.timerTitle}
                    />
                  </Grid>
                )}
              </Grid>
              <Grid container>
                {Boolean(Number(isAuction)) ? (
                  end_date > Math.floor(Date.now()) ? (
                    <Grid item xs={12} sm={12} md={5} className={classes.pR}>
                      <PrimaryButton
                        primary
                        title={"Place a bid"}
                        lg
                        onClick={navigateToPlaceBid}
                      />
                    </Grid>
                  ) : String(owner_walletAddress).toLocaleLowerCase() ===
                      String(walletAddress).toLocaleLowerCase() ||
                    String(higgestBidderAddress).toLocaleLowerCase() ===
                      String(walletAddress).toLocaleLowerCase() ? (
                    <Grid item xs={12} sm={12} md={5} className={classes.pR}>
                      <PrimaryButton
                        primary
                        title={"Settle Auction"}
                        lg
                        onClick={navigateToPlaceBid}
                      />
                    </Grid>
                  ) : null
                ) : (
                  <Grid item xs={12} sm={12} md={5} className={classes.pR}>
                    <PrimaryButton
                      primary
                      title={/*"Buy Art"*/ "Place a Bid"}
                      lg
                    />
                  </Grid>
                )}

                <Grid item xs={12} sm={12} md={5} className={classes.pL}>
                  <PrimaryButton
                    borderSec
                    lg
                    onClick={handleViewArtWrokClick}
                    title="View artwork"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default MainAuction;
