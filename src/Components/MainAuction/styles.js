import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    boxSizing: "border-box",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: 0,
    minWidth: 0,
    width: "100%",
    maxWidth: 1800,
    paddingLeft: 24,
    paddingRight: 24,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  container: {
    boxSizing: "border-box",
    minHeight: `calc(100vh - 70px)`,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },

    [theme.breakpoints.up("lg")]: {
      height: "100%",
      maxHeight: 1000,
      minHeight: 750,
    },
  },
  imageContainer: {
    [theme.breakpoints.down("sm")]: {
      marginTop: 50,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 50,
    },
  },

  image: {
    boxSizing: "border-box",
    maxWidth: 650,
    maxHeight: 550,
    height: "100%",
    margin: "0 auto",
    minHeight: 300,
    borderRadius: "15px",
    objectFit: "contain",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      maxHeight: 300,
      minHeight: 200,
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  alignLeft: {
    textAlign: "left",
    margin: "5px auto",
  },
  mainHeading: {
    margin: "2rem auto",
    marginBottom: "8%",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      marginTop: theme.spacing(2),
    },
  },
  bigHeading: {
    textTransform: "capitalize",
    fontSize: "3.5rem",
    textAlign: "left",
    lineHeight: 1,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      letterSpacing: "-0.92px",
      textAlign: "center",
    },
  },
  timerContainer: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
      paddingBottom: 20,
    },
  },
  pR: {
    boxSizing: "border-box",
    paddingRight: "10px",
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0,
      paddingBottom: 20,
    },
  },
  pL: {
    boxSizing: "border-box",
    paddingLeft: "10px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
    },
  },
  textCenter: {
    position: "relative",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomMargin: {
    marginBottom: "5%",
  },
  displayNone: {
    display: "none",
  },
  leftContainer: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
      paddingBottom: 70,

      "& .bottom": {
        display: "flex",
        flexDirection: "column",
      },
    },
  },
  loadercontainer: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  mainAuctionPrice: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  timerTitle: {
    "& .timer__title": {
      marginLeft: 20,
    },
  },
}));
