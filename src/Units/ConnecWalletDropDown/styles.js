import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    color: "black",
    minWidth: "100%",
    fontFamily: "Lato, sans-serif",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  innercontainer: {
    minWidth: "max-content",
    outline: "none",
    color: "black",
    padding: theme.spacing(1, 2.5, 3),
    borderRadius: "10px",
  },

  connectWalletButton: {
    padding: theme.spacing(1.5, 4),
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#B7524B",
    color: "#FFFFFF",
    fontSize: "1rem",
    fontWeight: 600,
    fontFamily: "Lato, sans-serif",
    transition: "200ms",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 2px 7px 5px #fdcecb",
    },
  },
  grid: {
    textAlign: "center",
  },
  cancelicon: {
    color: "grey",
    display: "flex",
    justifyContent: "flex-end",
    "&:hover": {
      cursor: "pointer",
    },
  },
  topheading: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    fontFamily: "Lato, sans-serif",
    padding: theme.spacing(0.2, 1, 2),
  },
  secondheading: {
    fontFamily: "Lato, sans-serif",
    maxWidth: "35ch",
    padding: theme.spacing(0, 1, 2),
  },

  image: {
    marginTop: "15px",
    minWidth: "100%",
    borderRadius: "8px",
    "&:hover": {
      cursor: "pointer",
    },
  },

  button: {
    padding: 0,
    margin: 0,
    border: "none",
    background: "transparent",
  },

  messageContainer: {
    textAlign: "center",
    padding: theme.spacing(2, 1),

    "& .message": {
      marginBottom: theme.spacing(3),
      fontFamily: "Lato, sans-serif",
    },
  },
}));
