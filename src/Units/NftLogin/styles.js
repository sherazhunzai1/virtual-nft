import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10%",
    marginTop: "4%,",
    fontSize: "0.7rem",
    maxWidth: "70%",
    marginRight: "auto",
    marginLeft: "auto",
    display: "flex",
    flexDirection: "column",
    position: "relativve",

    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "95%",
      position: "relative",
      top: "60px",
    },
  },
  connectYourWallet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop:"8%",
    maxWidth:"20%",
  },

  paper: {
    width: "100%",
    padding: "2%",
  },
  Topinput: {
    minWidth: "100%",
    borderRadius: "3%",
    backgroundColor: "hsl(0, 0%, 77%)",
  },
  TextFieldtext: {
    justifyContent: "flex-start",
    fontWeight: "bold",
    borderRadius: "3%",
  },
  imagebox: {
    borderRadius: "3%",
    backgroundColor: "red",
  },
  uploadimage: {
    backgroundColor: "hsl(0, 0%, 77%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "60%",
    height: "30vh",
    cursor: "pointer",
  },

  uploadaudio: {
    backgroundColor: "hsl(0, 0%, 77%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "30%",
    height: "15vh",
    cursor: "pointer",
  },
  bottominput: {
    minWidth: "65%",
    padding: "7% 0% 7% 4%",
    maxWidth: "max-content",
    backgroundColor: "hsl(0, 0%, 77%)",
    borderRadius: "3%",
    "& input[type=number]": {
      "-moz-appearance": "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
  bottombuttons: {
    backgroundColor: "hsl(0, 0%, 77%)",

    maxHeight: "10vh",
    minHeight: "8vh",
    fontWeight: "500",
    marginLeft: "2%",

    fontSize: "0.9rem",
  },
}));
