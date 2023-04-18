import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  priceRoot: {
    "&  *": {
      fontFamily: "Lato, sans-serif",
    },
  },
  title: {
    userSelect: "none",
    fontSize: 24,
    margin: 0,
  },
  price: {
    fontWeight: 900,
    fontSize: 30,
    margin: 0,
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  dollar: {
    margin: 0,
    paddingTop: 10,
    fontWeight: 900,
    boxSizing: "border-box",
    fontSize: 23,
    color: "#666666",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
}));
