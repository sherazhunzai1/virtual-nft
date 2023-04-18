import { Grid } from "@material-ui/core";
import { useState } from "react";
import DisplayQuestion from "../../Units/DisplayQuestion";
import Head from "../../Units/Heading";
import SideBar from "../../Units/SideBar";
import { blogContent } from "./constants";
import { useStyles } from "./styles";
const Help = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState(0);
  window.scroll({ left: 0, top: 0, behavior: "smooth" });
  return (
    <Grid container className={classes.blogRoot}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Head pageName="Help Center" />
      </Grid>
      <Grid item lg={2} md={12} sm={12} xs={12}>
        <SideBar setSelected={setSelected} heads={blogContent} />
      </Grid>
      <Grid item lg={9} md={12} sm={12} xs={12} className={classes.blogDisplay}>
        <DisplayQuestion selected={selected} content={blogContent} />
      </Grid>
    </Grid>
  );
};

export default Help;
