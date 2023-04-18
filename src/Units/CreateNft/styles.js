import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  innercontainer: {
    minWidth: "35%",
    color: "black",
    padding: "1%",

    [theme.breakpoints.down("sm")]: {
      padding: "3%",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "-20",
  },

  cancelicon: {
    color: "grey",
    "& , onhover": {
      cursor: "pointer",
    },
  },
  heading: {
    cursor: "default",
    userSelect: "none",
    fontFamily: "Tajawal, sans-serif",
    fontWeight: "bold",
    fontSize: "18px",
  },
  subHeading: {
    cursor: "default",
    userSelect: "none",
    fontFamily: "Tajawal, sans-serif",
    fontSize: 16,
    maxWidth: "50ch",
    textAlign: "center",
  },
  middelbox: {
    background: "linear-gradient(236.41deg, #B5A16C 1.65%, #B3A26E 100%)",
    borderRadius: "12px",
    maxWidth: "100%",
    padding: "10% 3% 0% 3%",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    height: "25vh",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      height: "20vh",
    },
  },
  imagebox: {
    height: "30vh",

    padding: "0% 2% 1% 2%",
    alignItems: "flex-end",
  },

  boxtext: {
    color: "white",
    fontSize: "0.8rem",
    fontFamily: "Tajawal, sans-serif",
    fontWeight: "500",
  },
}));
