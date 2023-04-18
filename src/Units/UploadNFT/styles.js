import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  subHeading: {
    fontFamily: "Poppins,sans-serif",
    cursor: "default",
    userSelect: "none",
  },
  mainTag: {
    display: "none",
  },
  mainLabel: {
    fontFamily: "Poppins, sans-serif",
  },
  label: {
    display: "Grid",
    placeContent: "center",
    width: "100%",
    textAlign: "center",
    border: " 1px solid #E7EB21",
    borderRadius: 10,
    padding: "65px 0px",
  },
  innerLabel: {
    cursor: "pointer",
    fontFamily: "Poppins,sans-serif",
    color: "#777E90",
    "& p": {
      fontSize: "12px",
    },
  },
  upload: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  drag: {
    fontSize: "12px",
    color: " #777E91",
  },
  error: {
    fontSize: 14,
    color: "#f44336",
  },
}));
