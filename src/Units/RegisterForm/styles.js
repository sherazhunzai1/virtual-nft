import { alpha, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  formHeads: {
    width: "100%",
  },
  inputs: {
    width: "100%",
  },
  formHead: {
    fontSize: "36px",
    fontWeight: "700",
    margin: 0,
    paddingBottom: "7.5px",
  },
  formPhrase: {
    color: " rgba(40, 44, 64, 0.6)",
    fontSize: "16px",
    fontWeight: "300",
    margin: 0,
    padding: "7.5px 0px 0px 0px",
    paddingBottom: 7.5,
    "& .success": {
      color: "green",
    },
    "& .error": {
      color: "red",
    },
  },
  checkForgot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 0px 0px 0px",
    flexWrap: "wrap",
    "& button": {
      color: "#0A1A72",
      border: "none",
      background: "transparent",
      fontFamily: "Lato, sans-serif",
      fontSize: "1rem",
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  continueWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",

    "& p": {
      margin: 7,
    },
  },
  contRule: {
    height: "1px",
    width: "30%",
    background: "#C4C4C4",
    [theme.breakpoints.down("md")]: {
      width: "25%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "20%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15%",
    },
  },
  contIcons: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    paddingBottom: 15,
  },

  contImg: {
    height: "55px",
    width: "55px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
    display: "grid",
    placeContent: "center",
    [theme.breakpoints.down("sm")]: {
      height: "50px",
      width: "50px",
    },
  },
  btnWrap: {
    padding: "15px 0px",
    width: "100%",

    "& .btn": {
      fontFamily: "Lato, sans-serif",
      marginTop: 10,
      marginBottom: 10,
    },
  },
  formInner: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  forgotsign: {
    marginTop: "20px",
  },
  arrowBack: {
    height: "20px",
    width: "20px",
    color: "white",
    background: "black",
    fontSize: "12px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      background: alpha("#000", 0.8),
    },
  },
  remember: {
    position: "relative",
    right: "12px",
  },

  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#0A1A72",
  },
}));
