import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  quoteRoot: {
    width: "60%",
    marginBottom: 30,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },

    animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`,
  },
  quote: {
    fontSize: 20,
    fontFamily: "Lato, sans-serif",
    lineHeight: 1.1,
    paddingBottom: 25,
  },
  quotee: {
    fontFamily: "Lato, sans-serif",
    lineHeight: 1.5,
    fontSize: 20,
    fontWeight: "bold",
    color: "#ababab",
    borderLeft: "5px solid #0A1A72",
    paddingLeft: 10,
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(-100px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0px)",
    },
  },
}));
