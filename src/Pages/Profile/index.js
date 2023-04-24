import React, { useEffect, useState } from "react";
import { Grid, Tabs } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import UserDetails from "../../Components/UserDetails";
import RecommendedArt from "../../Components/RecommendedArt";
import NFTCardsList from "../../Components/NFTCardsList";
import ShareButton from "../../Units/Buttons/ShareButton";
import PrimaryButton from "../../Units/Buttons/PrimaryButton";
import PageNotFound from "../../Units/PageNotFound";
import defaultCoverPic from "../../Assets/PNGs/auctionBack.png";
import Activity from "../../Units/ActivityUnit";
import NoCollection from "../../Units/NoCollections";
import LoaderContainer from "../../Units/LoaderContainer";
import { a11yProps, LinkTab, TabPanel } from "../../Units/ProfileUnits";
import { useStyles } from "./styles";

import {
  fetchUserArts,
  fetchUserProfileDetails,
} from "../../Redux/Actions/artistProfile.actions";

import { COVER_PIC_BASE_URL } from "../../HTTP/config";
import useScrollToTop from "../../Utilites";
import ShareModal from "../../Units/ShareModal";

const Profile = ({
  isUserDataLoading,
  isUserNotFound,
  isUserDataLoadingFailed,
  fetchUserArts,
  fetchUserProfileDetails,
  userArts,
  user,
  loggedInUser,
}) => {
  const { location } = useHistory();
  const creator = location.pathname.replace("/", "").replace("@", "").trim();
  useEffect(() => {
    fetchUserProfileDetails(creator);
    fetchUserArts(creator);
  }, [fetchUserArts, fetchUserProfileDetails, creator]);
  return (
    <div>
      {isUserDataLoading ? (
        <LoaderContainer />
      ) : isUserNotFound ? (
        <PageNotFound />
      ) : isUserDataLoadingFailed ? (
        <p>network error</p>
      ) : (
        <UserProfile
          user={user}
          userArts={userArts}
          loggedInUser={loggedInUser}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { ArtistProfile, Auth } = state;

  return { ...ArtistProfile, loggedInUser: Auth.user };
};

const mapDispatchToProps = {
  fetchUserArts,
  fetchUserProfileDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const UserProfile = ({ userArts, user, loggedInUser }) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const classes = useStyles();
  useScrollToTop();

  const {
    userId,
    bio,
    facebook,
    img,
    instagram,
    // portfolio,
    twitter,
    username,
    fullName,
    walletAddress,
    cover,
    createdAt,
  } = user;
  const { userId: logginUserId } = loggedInUser;
  const { createdArts, collectedArts } = userArts;
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleShareModal = () => {
    setIsShareModalOpen(!isShareModalOpen);
  };
  const hideEditButton =
    Boolean(logginUserId) && Boolean(userId) && logginUserId === userId;

  const coverUrl = cover ? cover : defaultCoverPic;

  const url = window.location.href;
  return (
    <>
      <div
        className={classes.coverImage}
        style={{ backgroundImage: `url('${coverUrl}')` }}
      >
        {hideEditButton && (
          <div className="edit__profile">
            <Link to="/editprofile">
              <PrimaryButton title="Edit Profile" lg inputBtn />
            </Link>
          </div>
        )}
      </div>
      <div className={classes.profileContainer}>
        <Grid container>
          <Grid item md={3} xs={12} className={classes.userDetailsItem}>
            <UserDetails
              profilePic={img}
              username={username}
              fullName={fullName}
              walletAddress={walletAddress}
              bio={bio}
              instagram={instagram}
              twitter={twitter}
              facebook={facebook}
              joinDate={createdAt}
            />
          </Grid>
          <Grid item md={9} xs={12} className={classes.profileContent}>
            <div className={classes.share}>
              <ShareButton onClick={handleShareModal} />
            </div>
            <div className={classes.collectionWrap}>
              <div className="tabs">
                <Tabs
                  variant="fullWidth"
                  value={value}
                  onChange={handleChange}
                  className={classes.tabs}
                >
                  <LinkTab label="Created" href="/created" {...a11yProps(0)} />
                  <LinkTab
                    label="Collected"
                    href="/collected"
                    {...a11yProps(1)}
                  />
                  <LinkTab
                    label="Activity"
                    href="/activity"
                    {...a11yProps(2)}
                  />
                </Tabs>
              </div>

              <div className="tabPanelsContainer">
                <TabPanel value={value} index={0}>
                  {createdArts.length !== 0 ? (
                    <NFTCardsList
                      isProfileCard
                      arts={createdArts}
                      className={classes.cardsGrid}
                    />
                  ) : (
                    <NoCollection />
                  )}
                </TabPanel>
                <TabPanel value={value} index={1}>
                  {collectedArts.length !== 0 ? (
                    <NFTCardsList
                      isProfileCard
                      arts={collectedArts}
                      className={classes.cardsGrid}
                    />
                  ) : (
                    <NoCollection />
                  )}
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Activity username={username} />
                </TabPanel>
              </div>
            </div>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <RecommendedArt />
          </Grid>
        </Grid>
      </div>
      <ShareModal
        open={isShareModalOpen}
        url={url}
        onClose={handleShareModal}
      />
    </>
  );
};
