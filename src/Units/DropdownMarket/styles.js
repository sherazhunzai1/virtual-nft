import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  dropRoot: {
    position: "relative",
    "& p": {
      margin: 0,
      fontFamily: "Lato, sans-serif",
    },
    "& label": {
      fontSize: "12px",
      fontWeight: "700",
      color: "#B1B5C3",
    },
    margin: "12px 0px",
  },
  dropbtn: {
    display: "flex",
    background: " #FCFCFD",
    alignItems: "center",
    justifyContent: "space-between",
    border: "2px solid #E6E8EC",
    width: "100%",
    padding: "12px ",
    margin: "12px 0px 0px 0px",
    borderRadius: "12px",
    cursor: "pointer",
    "& p": {
      fontSize: "14px",
      fontWeight: "500",
      color: "#23262F",
    },
    "&:focus": {
      outline: "none",
    },
  },
  hide: {
    display: "none !important",
    transition: "1s",
  },
  show: {
    display: "block",
    transition: ".25s",
  },
  rotate: {
    transform: "rotate(180deg)",
    transition: ".25s",
  },
  chevron: {
    border: "2px solid #E6E8EC",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#777E90",
  },
  dropOpt: {
    borderRadius: 10,
    boxSizing: "border-box",
    background: "white",
    zIndex: "5",
    position: "absolute",
    border: "1px solid #E6E8EC",
    width: "100%",
    cursor: "pointer",
    left: 0,
    right: 0,
    "& p": {
      padding: theme.spacing(1.3, 1.4),
      fontFaimly: "Lato, sans-serif",
      boxSizing: "border-box",
      width: "100%",
      "&:hover": {
        background: "#ededed",
      },
    },
  },
}));
