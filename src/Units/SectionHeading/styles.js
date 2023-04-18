import { alpha, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  innerContainer: {
    boxSizing: "border-box",
    paddingBottom: 5,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",

    "& .left": {
      display: "flex",
      alignItems: "center",
    },
    "& .right": {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },

    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },

  subHeading: {
    fontFamily: "Lato,sans-serif",
    fontSize: 24,
    fontWeight: 600,
    letterSpacing: "-0.02em",
    cursor: "default",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
    fontFamily: theme.typography.fontFamily,

    "& > p": {
      color: "inherit",
      fontSize: "1rem",

      fontWeight: 600,
    },
    "&:hover > p": {
      color: alpha(theme.palette.secondary.main, 0.8),
      transition: theme.transitions.create("color"),
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.95rem",
    },
  },
  blink: {
    display: "inline-block",
    padding: 2,
    width: 10,
    height: 10,
    marginRight: 10,
    backgroundColor: "#FF1010",
    borderRadius: "100%",
    opacity: 1,
    animation: "$blinkAnimation 1s steps(5, start) infinite",
    [theme.breakpoints.down("xs")]: {
      width: 8,
      height: 8,
    },
  },
  "@keyframes blinkAnimation": {
    to: {
      opacity: 0.1,
    },
  },
}));
