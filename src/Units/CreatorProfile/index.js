import React, { useEffect } from "react";
// import GoogleFontLoader from "react-google-font-loader";
import { Grid, Divider, Typography } from "@material-ui/core";
import Tab from "./Tab/Tab";
import ProfileTop from "./Top";
// import Btn from "../Buttons/SecondaryRoundedButton";
// import {
//   VerifiedUser,
//   Twitter,
//   Language,
//   Instagram,
//   FileCopy,
// } from "@material-ui/icons";
import { useStyles } from "./style";

import cssClasses from "./index.module.css";
const CreatorProfile = ({
  creatorDetails = [],
  createdArts = [],
  collectedArts = [],
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  creatorDetails = creatorDetails[0];
  return (
    <div>
      {/* <NoSsr>
        <GoogleFontLoader
          fonts={[
            { font: "Fjalla One" },
            { font: "Sen", weights: [700] },
            { font: "Roboto", weights: [500] },
          ]}
        />
      </NoSsr> */}
      {/* 
        @props
        coverPicture: type "string" -> url
        profilePicture: type "string" -> url
       */}
      <ProfileTop
        coverPicture={creatorDetails && creatorDetails.creator_gif}
        profilePic={creatorDetails && creatorDetails.img}
      />
      <div className={`${classes.outerContainer} ${cssClasses.outerContainer}`}>
        {/* left */}
        <div className={classes.leftGrid}>
          {/* +=====================================================+ */}
          <div className={classes.addressBtn}>
            {/* <div className={classes.address}> */}
            <p className={classes.startAddress}>#018968</p>
            <p style={{ marginRight: "6px" }}>0x123asdv</p>
            {/* <span className={classes.copyBtn}><FileCopy /></span> */}
            {/* </div> */}
          </div>

          {/* +=====================================================+ */}
          <div className={classes.nameGrid}>
            <Typography variant="h2" className={classes.name}>
              {creatorDetails.username}
            </Typography>
          </div>
          <div className={classes.tag}>@ {creatorDetails.username}</div>

          {/* +=====================================================+ */}
          {/* <Grid container>
            <Grid item md={6} sm={3} xs={6}>
              <div className={classes.followersCount}>0 </div>
              <div className={classes.followers}>Followers</div>
            </Grid>
            <Grid item md={6} sm={3} xs={6}>
              <div className={classes.followersCount}>0 </div>
              <div className={classes.followers}>Followers</div>
            </Grid>
            <Grid item md={12} sm={6} xs={12}>
              <Btn> follow</Btn>
            </Grid>
          </Grid> */}

          {/* +====================Add twitter link=====================+ */}

          {/* <Grid item className={classes.twitterFollow}>
            <div className={classes.socialtwitter}>
              <VerifiedUser />
              <a href="/" className={classes.twit}>
                @{creatorDetails.username}
              </a>
              <Twitter />
            </div>
          </Grid> */}

          {/* +=====================================================+ */}
          <Grid item className={classes.bioGrid}>
            <Typography variant="body1" className={classes.bio}>
              Bio
            </Typography>
            <Divider />
            <Typography className={classes.biopara}>
              {creatorDetails.description}
            </Typography>
          </Grid>

          {/* +=====================================================+ */}
          <Grid item className={classes.linkGrid}>
            <p className={classes.link}>Links</p>
            <Divider />

            <Typography component="h3">No Social Links</Typography>
            {/* <div className={classes.socialLinks}>
              <Language className={classes.web} />
              <a href="https://twitter.com" className={classes.hrefs}>
                www.KashanGhori.com
              </a>
            </div> */}
            {/* <div className={classes.socialLinks}>
              <Instagram className={classes.web} />
              <a href="https://twitter.com" className={classes.hrefs}>
                www.KashanGhori.com
              </a>
            </div> */}
          </Grid>
          {/* +=====================================================+ */}

          <Grid item className={classes.datejoin}>
            <Divider />
            <div className={classes.joined}>
              <p className={classes.join}>Joined</p>
              <p>
                {new Date(creatorDetails.created_at).toLocaleString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <Divider />
          </Grid>
          {/* end left grid */}
        </div>

        {/* right */}
        <div className={`${classes.rightGrid}`}>
          {/* 
        @props
        createdArts: type "array" 
        collectedArts: type "array" 
       */}
          <Tab
            createdArts={createdArts}
            collectedArts={collectedArts}
            creatorName={creatorDetails.username}
            bio={creatorDetails.description}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
