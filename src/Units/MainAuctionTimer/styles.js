import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  displayNone: {
    display: "none !important",
  },
  titlePaddingLeft: {
    paddingTop: 13,
    [theme.breakpoints.up("md")]: { textAlign: "center" },
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      display: "flex",
      paddingTop: 20,
    },
  },
  timerContainer: {
    fontFamily: "tajawal, sans-serif !important",
    justifyContent: "space-evenly",

    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-end",
      textAlign: "right",
    },
  },
  paddingAround: {
    textAlign: "left",
    marginLeft: 30,
    [theme.breakpoints.down("md")]: {
      textAlign: "left",
      padding: "0 25px",
      paddingLeft: 0,
      marginLeft: 0,
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      justifyContent: "center",
    },
  },
  rendererContainer: {
    userSelect: "none",
    marginLeft: "10px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      marginLeft: "0px",
    },
  },
  subHeadingPaddings: {
    paddingBottom: 15,
    fontFamily: "lato, sans-serif !important",
    fontSize: "30px !important",
    fontWeight: "600 !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px !important",
      paddingTop: "10px !important",
      paddingBottom: "20px !important",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  item: {
    fontFamily: "lato, sans-serif !important",
    fontSize: "30px !important",
    fontWeight: "900 !important",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  itemContainer: {
    fontFamily: "lato, sans-serif !important",
    fontSize: "30px !important",
    fontWeight: "900 !important",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-evenly",
    },
  },
  dhsm: {
    fontFamily: "lato, sans-serif !important",
    fontSize: "30px !important",
    fontWeight: "900 !important",
  },

  auctionTitle: {
    fontSize: "24px !important",
    fontFamily: "lato, sans-serif !important",
  },
}));
