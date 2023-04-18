import { makeStyles } from "@material-ui/core";
import React from "react";
const HeaderTab = () => {
  const classes = useStyles();
  return <div className={classes.root} />;
};

export default HeaderTab;

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(15),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(8),
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(2),
    },
  },
}));
