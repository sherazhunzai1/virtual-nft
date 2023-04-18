import { withStyles } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";

export const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 21,
    padding: 0,
    margin: theme.spacing(1),
    display: "flex",
    alignItems: "center",
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(20px)",
      color: theme.palette.common.white,
      "& + $thumb": {
        backgroundColor: "#3772FF",
        opacity: 1,
        border: "none",
      },
      "& + $track": {
        backgroundColor: "#3772FF",
        opacity: 1,
        border: "none",
      },
    },

    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
      backgroundColor: "white",
    },
  },
  thumb: {
    width: 19,
    height: 19,
    backgroundColor: theme.palette.common.white,
  },
  track: {
    borderRadius: 26 / 2,
    backgroundColor: "#E6E8EC",
    opacity: 1,
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});
