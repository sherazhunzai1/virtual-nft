import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  barRoot: {
    fontFamily: "lato, sans-serif",
    "& h4": {
      margin: 0,
    },
    "& button": {
      fontFamily: "lato, sans-serif",
      background: "white",
      fontSize: "18px",
      width: "100%",
      color: "#353840",
      fontWeight: "700",
      padding: "10px",
      border: "1px solid white",
      textAlign: "left",
      borderRadius: "4px",
      lineHeight: "1.7",
      cursor: "pointer",
      transition: ".5s",
      paddingLeft: 0,
      "&:hover": {
        background: "#FBFDFF",
        border: "1px solid #E5E8EB",
        transition: ".5s",
      },
      "&:active": {
        color: "black",
      },
      "&:focus": {
        color: "black",
        border: "1px solid #0A1A72",
        transition: ".5s",
      },
    },
  },
  barMobBtn: {
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    padding: "10px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  rotate: {
    transform: "rotate(180deg)",
    transition: ".25s",
  },
  notRotate: {
    transition: ".25s",
  },
}));
