import { Grid } from "@material-ui/core";
import { useState } from "react";
import DisplayQuestion from "../../Units/DisplayQuestion";
import Head from "../../Units/Heading";
import SideBar from "../../Units/SideBar";
import { faqContent } from "./constants";
import { useStyles } from "./styles";
const FAQ = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState(0);
  return (
    <Grid container className={classes.faqRoot}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Head pageName="FAQ" />
      </Grid>
      <Grid item lg={2} md={12} sm={12} xs={12}>
        <SideBar setSelected={setSelected} heads={faqContent} />
      </Grid>
      <Grid item lg={9} md={12} sm={12} xs={12} className={classes.faqDisplay}>
        <DisplayQuestion selected={selected} content={faqContent} />
      </Grid>
    </Grid>
  );
};

export default FAQ;
