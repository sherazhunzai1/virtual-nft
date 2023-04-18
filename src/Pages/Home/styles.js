import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  homeRoot: {
    userSelect: "none",
  },
  // logoMainBox: {
  //   padding: "10px",
  // },

  innerContainer: {
    width: "100%",
    display: "flex",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#231f2033",
    [theme.breakpoints.down("sm")]: {
      padding: "5px",
    },
  },
  videoLogo: {
    borderRadius: "10px",
    width: "100%",
    maxHeight: "600px",
    objectFit: "cover",
  },
  sectionHeadingContainer: {
    paddingBottom: 50,
    width: "90%",
    margin: "0 auto",
    textAlign: "center",
  },
  sectionHeading: {
    fontWeight: 700,
    fontFamily: "tajawal, sans-serif",
    paddingBottom: 5,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 50,

    "& > .button": {
      maxWidth: 200,
      width: "100%",
    },
  },
  loadingContainer: {
    height: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  banner: {
    width: "100%",
  },
  bannerWrap: {
    padding: "30px 10px",
    backgroundColor: "#80808057",
    objectFit: "cover",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
