import { alpha, makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  modalRoot: {
    fontFamily: "Lato, sans-serif",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "white",
    borderRadius: "20px",
    width: "80%",
    minHeight: 350,
    zIndex: "1000",
    overflow: "hidden",
    maxHeight: 600,
    maxWidth: 1200,
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      top: "47%",
    },
  },

  sideImg: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "10px 10px 40px 10px",
    minHeight: "80vh ",
    borderRadius: "0px 20px 20px 0px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  formWrap: {
    padding: "40px 80px",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "40px 40px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "40px 25px",
    },
  },

  cancelIcon: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    cursor: "pointer",
  },
  changeLink: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    "& p": {
      margin: 0,
      fontFamily: "Lato, sans-serif",
      fontSize: "1rem",
      cursor: "default",
    },
  },
  click: {
    color: "#0A1A72 ",
    margin: 0,
    paddingLeft: "7px",
    cursor: "pointer",
    textDecoration: "underline",
    border: "none",
    background: "transparent",
    fontFamily: "Lato, sans-serif",
    fontSize: "1rem",
  },

  closeButton: {
    color: "#000",
    background: "transparent",
    padding: 0,
    "&:hover": {
      "& .MuiSvgIcon-root": {
        color: alpha("#000", 0.8),
      },
    },
  },
}));
