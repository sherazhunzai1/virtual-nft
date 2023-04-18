import React from "react";
import { useStyles } from "./styles";

const Section = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
};

export default Section;
