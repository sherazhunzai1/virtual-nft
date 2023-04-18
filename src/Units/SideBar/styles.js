import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  barRoot: {
    fontFamily: "lato, sans-serif",
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
        border: "1px solid #B5A16C",
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
  bigScreen: {
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  mobScreen: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
}));
