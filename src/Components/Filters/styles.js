import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {
    fontFamily: "Lato, sans-serif",
    background: " #FCFCFD",
    border: "1px solid #E6E8EC",
    borderRadius: "24px",
    padding: "32px 10px",
    width: "90%",
    maxHeight: 1000,
    "& h1": {
      margin: "0",
      paddingLeft: "10px",
      fontSize: "24px",
      fontWeight: "600",
      color: "#23262F",
    },
  },
}));
