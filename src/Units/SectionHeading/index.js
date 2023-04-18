import React from "react";
import { Divider, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";

const SectionHeading = ({
  sectionTitle,
  isLiveAuction,
  linkTitle,
  linkAddress,
  creatorSection = false,
}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.innerContainer}>
        <div className="left">
          {isLiveAuction && <div className={classes.blink}></div>}
          <Typography className={classes.subHeading}>{sectionTitle}</Typography>
        </div>
        {!creatorSection && (
          <div className="right">
            <Link to={linkAddress} className={classes.link}>
              <Typography> View all {linkTitle}</Typography>
            </Link>
          </div>
        )}
      </div>
      <Divider />
    </React.Fragment>
  );
};

export default SectionHeading;
