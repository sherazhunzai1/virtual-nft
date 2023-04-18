import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
    fontFamily: "Lato, sans-serif",
    background: " #FCFCFD",
    border: "1px solid #E6E8EC",
    borderRadius: "24px",
    height: "500px",
    padding: "32px 10px",
    width: "90%",
    overflowY: "scroll",
    "& h1": {
      margin: "0",
      paddingLeft: "10px",
      fontSize: "24px",
      fontWeight: "600",
      color: "#23262F",
    },
    "&::-webkit-scrollbar": {
      width: "10px",
      marginRight: "39px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#eee",
      borderRadius: "20px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#c4c4c4",
      borderRadius: "10px",
    },
  },
  crossIcon: {
    position: "fixed",
    top: "0",
    right: "0",
    margin: "10px 10px 0px 0px",
  },
}));
