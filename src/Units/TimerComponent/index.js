import React from "react";
import { Typography } from "@material-ui/core";
import Countdown from "react-countdown";
import UserButton from "../Buttons/UserButton";
import cn from "classnames";
import styles from "./styles.module.css";
import { useStyles } from "./styles";

const Timer = ({
  time,
  isUpdating,
  isCard = false,
  ownerUsername,
  ownerImage,
}) => {
  return (
    <div>
      {!isUpdating && (
        <Countdown
          date={time}
          renderer={
            isCard
              ? cardTimer
              : (e) =>
                  renderer({
                    ...e,
                    profilePic: ownerImage,
                    username: ownerUsername,
                  })
          }
        />
      )}
    </div>
  );
};

export default Timer;

const CardCompletionist = () => {
  const classes = useStyles();
  return (
    <div className={classes.titlePaddingLeft}>
      <h2 className={classes.end_heading}>Auction has ended</h2>
    </div>
  );
};

const cardTimer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <CardCompletionist />;
  } else {
    // Render a countdown

    return (
      <CardTimerJsx
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

const CardTimerJsx = ({ days, hours, minutes, seconds }) => {
  const classes = useStyles();
  const displaySec = cn(classes.seconds, {
    [classes.displayNone]: days > 0 ? true : false,
  });
  const displayDays = cn({ [classes.displayNone]: days > 0 ? false : true });
  const displayHrs = cn({ [classes.displayNone]: hours > 0 ? false : true });
  return (
    <div className={classes.titlePaddingLeft}>
      <Typography variant="h3" component="p" className={classes.end_heading}>
        Ending in
      </Typography>

      <div className={classes.timerContainer}>
        <div className={displayDays}>
          <Typography
            variant="subtitle1"
            className={cn(classes.end_heading, classes.timerText)}
          >
            {days}d
          </Typography>
        </div>

        <div className={displayHrs}>
          <Typography
            variant="subtitle1"
            className={cn(classes.end_heading, classes.timerText)}
          >
            {hours}h
          </Typography>
        </div>
        <Typography
          variant="subtitle1"
          className={cn(classes.end_heading, classes.timerText, {
            [classes.seconds]: days > 0 ? true : false,
          })}
        >
          {minutes}m
        </Typography>

        <div className={displaySec}>
          <Typography
            variant="subtitle1"
            className={cn(classes.end_heading, classes.timerText)}
          >
            {seconds}s
          </Typography>
        </div>
      </div>
    </div>
  );
};

const Completionist = ({ profilePic = "", username = "" }) => {
  return (
    <div className={styles.paddingAround}>
      <Typography
        variant="h3"
        component="p"
        className={styles.subHeadingPaddings}
      >
        Owned By
      </Typography>
      <UserButton profilePic={profilePic} userName={username} />
    </div>
  );
};

const renderer = (props) =>
  props.completed ? <Completionist {...props} /> : <RenderJsx {...props} />;

const RenderJsx = ({ days, hours, minutes, seconds }) => {
  const classes = useStyles();

  const displaySec = cn({
    [classes.displayNone]: days > 0 ? true : false,
  });
  const displayDays = cn({ [classes.displayNone]: days > 0 ? false : true });
  const displayHrs = cn({ [classes.displayNone]: hours > 0 ? false : true });

  return (
    <div>
      <Typography className={classes.auctionTitle}>Auction time</Typography>

      <div className={classes.innerContainer}>
        {!(days < 0) && (
          <div className={displayDays}>
            <Typography className="timerText">{days}d</Typography>
          </div>
        )}
        <div item xs={3} className={displayHrs}>
          <Typography className="timerText">{hours}h</Typography>
        </div>
        <div item xs={3} className={classes.item}>
          <Typography className="timerText">{minutes}m</Typography>
        </div>

        {!(days > 0) && (
          <div item xs={3} className={displaySec}>
            <Typography className="timerText">{seconds}s</Typography>
          </div>
        )}
      </div>
    </div>
  );
};
