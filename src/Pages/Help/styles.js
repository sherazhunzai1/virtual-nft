import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  blogHead: {
    color: "#0A1A72",
  },
  blogRoot: {
    maxWidth: 1800,
    margin: "0 auto",
    padding: "0px 100px 150px 100px",
    fontFamily: "lato, sans-serif",
    [theme.breakpoints.down("md")]: {
      padding: "0px 50px 100px 50px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  blogDisplay: {
    paddingLeft: 50,
    "& p": {
      fontSize: "17px",
      fontWeight: "600",
      color: "#767676",
    },
    "& span": {
      color: "#a9a9a9",
      wordSpacing: "3px",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
    },
  },
}));
