import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  aboutRoot: {
    maxWidth: 1800,
    margin: "0 auto",
    fontFamily: "Lato, sans-serif",
    padding: "0px 100px",
    [theme.breakpoints.down("md")]: {
      padding: "0px 60px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 30px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  quoteWrap: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 30,
  },
}));
