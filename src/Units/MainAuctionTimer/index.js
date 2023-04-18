import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Countdown from "react-countdown";
import UserButton from "../Buttons/UserButton";
import cn from "classnames";
import { useStyles } from "./styles";

const Timer = ({
  time,
  ownerUsername,
  ownerProfilePicture,
  className = null,
  style = null,
}) => {
  return (
    <Countdown
      date={time}
      renderer={(e) =>
        renderer({
          ...e,
          username: ownerUsername,
          profilePic: ownerProfilePicture,
          className,
          style,
        })
      }
    />
  );
};
export default Timer;

const Completionist = ({ profilePic = "", username = "" }) => {
  const styles = useStyles();
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

const renderer = (props) => <TimerJSX days={3} hours={20} minutes={35} />;

const TimerJSX = ({ days, hours, minutes, seconds, className, style }) => {
  const styles = useStyles();
  const displaySec = cn({
    [styles.displayNone]: days > 0 ? true : false,
  });
  const displayDays = cn({ [styles.displayNone]: days > 0 ? false : true });
  const displayHrs = cn({ [styles.displayNone]: hours > 0 ? false : true });
  if (hours <= 9) hours = "0" + hours;

  return (
    <Grid
      container
      className={cn(styles.rendererContainer, {
        [className]: Boolean(className),
      })}
      style={style}
    >
      <Typography className={cn(styles.auctionTitle, "timer__title")}>
        Auction time
      </Typography>
      <Grid container className={cn(styles.itemContainer, "timer__title")}>
        <Grid item xs={4} className={`${displayDays} ${styles.item}`}>
          <Typography className={styles.dhsm}>{days}d</Typography>
        </Grid>
        <Grid item xs={4} className={`${displayHrs} ${styles.item}`}>
          <Typography className={styles.dhsm}>{hours}h</Typography>
        </Grid>
        <Grid item xs={4} className={`${styles.item}`}>
          <Typography className={styles.dhsm}>{minutes}m</Typography>
        </Grid>
        <Grid item xs={4} className={`${displaySec} ${styles.item}`}>
          <Typography className={styles.dhsm}>{seconds}s</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
