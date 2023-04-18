import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  mediaRoot: {
    position: "relative",
  },
  mediaInner: {
    boxSizing: " border-box",
    margin: 0,
    minWidth: 0,
    maxHeight: 500,
    position: "relative",
    overflow: "hidden",
  },

  mediaInnerTop: {
    margin: 0,
    minWidth: 0,
    width: " 100%",
    height: 0,
    paddingBottom: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 0,
    },
  },
  mediaContainer: {
    margin: 0,
    minWidth: 0,
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
    },
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    "& .media": {
      display: "block",
      width: "100%",
      height: "auto",
      maxWidth: "100%",
      objectFit: "contain",
    },
  },
}));
