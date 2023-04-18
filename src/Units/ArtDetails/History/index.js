import React from "react";
import { Avatar, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import { formateDate } from "../../../Utilites";

import { GoToIcon } from "../../Svg";
import { CURRENCY } from "../../../utils/helper";

const History = ({
  type,
  profilePic = "",
  username = "",
  date = Date.now(),
  priceEth = "0",
  linkAddress = null,
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.linkButton}>
      <div className={classes.flex}>
        <Link to={`/@${username}`} className={classes.icon}>
          <Avatar
            src={profilePic}
            alt={`${username} profile`}
            className={classes.img}
          />
        </Link>

        <div className={classes.paddingLeft}>
          <Typography className={classes.username}>
            {type} by&nbsp;
            <Link to={`/@${username}`} className={classes.link}>
              @&nbsp;{username}{" "}
            </Link>
          </Typography>

          <Typography className={classes.date}>
            At&nbsp;{formateDate(date)}
          </Typography>
        </div>
      </div>

      <div className={classes.right}>
        <div className={classes.prices}>
          {String(type).trim().toLocaleLowerCase() !== "minted" && (
            <div className={classes.eth}>
              <div className="price">{priceEth}</div>
              &nbsp;{CURRENCY}
            </div>
          )}
        </div>
        <a
          href={linkAddress}
          target="_blank"
          rel="noreferrer"
          className={classes.svgLink}
        >
          <GoToIcon />
        </a>
      </div>
    </Paper>
  );
};

export default History;
