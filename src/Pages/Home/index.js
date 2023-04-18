import { Divider, Grid, Typography, Box } from "@material-ui/core";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import MainAuction from "../../Components/MainAuction";
import NFTCardsList from "../../Components/NFTCardsList";
import CreatorsCardsList from "../../Components/CreatorsCardsList";
import PrimaryButton from "../../Units/Buttons/PrimaryButton";
import Loading from "../../Units/Loading";
import Section from "../../Units/Section";
import HomeBanner from "../../Assets/PNGs/nftCover.jpg";
import NetworkError from "../../Units/NetworkError";
import { useFetchHomePageData } from "../../Utilites";
import logoAnimated from "../../Assets/logoAnimated.mp4";
import { useStyles } from "./styles";

const Home = (props) => {
  const classes = useStyles();
  const {
    isMainAuctionLoading,
    isMainAuctionLoadingFailed,
    mainAuctionArt,

    isAuctionsLoading,
    isAuctionsLoadingFailed,
    homeAuctions: { liveAuction },

    isFixPriceArtsLoading,
    isFixPriceArtsLoadingFailed,
    homeFixPriceArts: { fixedPriceArts },

    isfeaturedCreatorsLoading,
    isfeaturedCreatorsLoadingFailed,
    homeFeaturedCreators: { featuredCreators },
  } = props;

  useFetchHomePageData();
  const history = useHistory();

  const handleViewAllArtworks = () => {
    let path = `market`;
    history.push(path);
  };

  const handleViewAllCreators = () => {
    let path = `artist`;
    history.push(path);
  };

  return (
    <>
      <Grid container className={classes.logoMainBox}>
        {isMainAuctionLoadingFailed ? (
          <NetworkError />
        ) : (
          <MainAuction
            auctionData={mainAuctionArt}
            isDataLoading={isMainAuctionLoading}
          />
        )}
        {/* <Box className={classes.innerContainer}>
          <video
            src={logoAnimated}
            width="75%"
            height="100%"
            loop
            autoplay="true"
            muted
            className={classes.videoLogo}
          />
        </Box> */}
      </Grid>

      <Section>
        <HomeArtWroksList
          isArtDataLoading={isAuctionsLoading}
          isArtDataLoadingFailed={isAuctionsLoadingFailed}
          artData={liveAuction}
          heading="Artworks On Auction"
          buttonTitle="View All Artworks"
          buttonOnClick={handleViewAllArtworks}
        />
      </Section>

      <Section>
        <HomeArtWroksList
          isArtDataLoading={isFixPriceArtsLoading}
          isArtDataLoadingFailed={isFixPriceArtsLoadingFailed}
          artData={fixedPriceArts}
          heading="Artworks On Fixed Price Sale"
          buttonTitle="View All Artworks"
          buttonOnClick={handleViewAllArtworks}
        />
      </Section>

      <div className={classes.bannerWrap}>
        <video
          src="https://firebasestorage.googleapis.com/v0/b/krama-f8422.appspot.com/o/166616625-e608908b-de1e-4b9c-9418-793521eb20e6.mp4?alt=media&token=9ccb382c-7f71-462d-8f79-053b423dbca6"
          loop
          autoplay="true"
          muted
          className={classes.videoLogo}
        />
      </div>

      <Section>
        <div className={classes.sectionHeadingContainer}>
          <Typography variant="h6" className={classes.sectionHeading}>
            Featured Creators
          </Typography>
          <Divider />
        </div>

        {isfeaturedCreatorsLoading ? (
          <div className={classes.loadingContainer}>
            <Loading />
          </div>
        ) : isfeaturedCreatorsLoadingFailed ? (
          <NetworkError />
        ) : (
          <>
            <CreatorsCardsList creators={featuredCreators} />

            <div className={classes.buttonContainer}>
              <PrimaryButton
                onClick={handleViewAllCreators}
                borderSec
                sm
                title="View All Artists"
                className="button"
              />
            </div>
          </>
        )}
      </Section>
    </>
  );
};

const mapStateToProps = (state) => {
  const { Home } = state;
  return {
    ...Home,
  };
};

export default connect(mapStateToProps)(Home);

const HomeArtWroksList = ({
  isArtDataLoading = false,
  isArtDataLoadingFailed,
  artData = [],
  heading,
  buttonTitle,
  buttonOnClick = () => {},
}) => {
  const classes = useStyles();
  return (
    <div className={classes.homeRoot}>
      <div className={classes.sectionHeadingContainer}>
        <Typography variant="h6" className={classes.sectionHeading}>
          {heading}
        </Typography>
        <Divider />
      </div>
      {isArtDataLoading ? (
        <div className={classes.loadingContainer}>
          <Loading />
        </div>
      ) : isArtDataLoadingFailed ? (
        <NetworkError />
      ) : (
        <>
          <NFTCardsList arts={artData} />

          <div className={classes.buttonContainer}>
            <PrimaryButton
              onClick={buttonOnClick}
              borderSec
              sm
              title={buttonTitle}
              className="button"
            />
          </div>
        </>
      )}
    </div>
  );
};
