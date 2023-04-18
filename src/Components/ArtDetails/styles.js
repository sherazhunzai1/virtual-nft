import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  container: {
    "&  *": {
      fontFamily: '"Lato", sans-serif',
    },
    padding: "0 7% 2% 7%",
    color: "black",
    maxWidth: 1800,
    margin: "0 auto",
  },

  innerContainer: {
    padding: theme.spacing(4, 0, 2),
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    columnGap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr ",
    },
  },

  bottomContainer: {
    marginTop: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      marginTop: 3,
    },
  },
  subHeading: {
    fontSize: theme.spacing(5.5),
  },

  descriptionContainer: {
    paddingTop: 10,
    maxWidth: "27rem",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 20,
    },
  },
  subSubHeading: {
    fontSize: theme.spacing(2.3),
    fontWeight: 400,
    lineHeight: 1.7,
  },

  anchorTag: {
    textDecoration: "none",
    color: "#000000",
    boxShadow: "0 0 0 1px #0000000f",
  },
  externalLinks: {
    "& > .text": {
      fontWeight: "bold",
    },

    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
    backgroundColor: "#aba3a31c",
    padding: theme.spacing(1.5, 2),
    borderRadius: 10,
    marginTop: theme.spacing(1),
    position: "relative",
    top: 0,
    transition: theme.transitions.create("all"),
    "&:hover": {
      top: -3,
    },
  },
  linksContainer: {
    paddingTop: theme.spacing(3),
  },

  historyContainer: {
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(5),
    },
  },

  creatorContainer: {
    [theme.breakpoints.down("sm")]: { marginTop: theme.spacing(5) },
  },

  imageBackground: {
    background: "linear-gradient(0deg, #c5c5c5 0%, #e6e6e600 100%)",
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
    position: "relative",
    overflow: "hidden",
    paddingBottom: 30,
    paddingTop: 10,
  },

  cardMedia: {
    filter: "drop-shadow(0 20px 20px rgba(0, 0, 0, 0.25))",
    maxWidth: 400,
    margin: "auto",
    position: "relative",
    "& .outer": {
      boxSizing: "border-box",
      margin: 0,
      minWidth: 0,
      width: "100%",
      height: 0,
      paddingBottom: "100%",
    },
    "& .media__container": {
      margin: 0,
      minWidth: 0,
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "& .media": {
      display: "block",
      objectFit: "cover",
      width: " 100%",
      height: "100%",
      borderRadius: 15,
    },
    "& .media__fullscreen": {
      display: "block",
      objectFit: "contain",
      width: " 100%",
      height: "100%",
      borderRadius: 15,
    },
  },

  divider: {
    width: "100%",
    margin: "16px 0px 5px",
  },
}));
