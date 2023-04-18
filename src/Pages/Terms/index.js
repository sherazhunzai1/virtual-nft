import { Grid } from "@material-ui/core";
import Head from "../../Units/Heading";
import { useStyles } from "./styles";
import { termsContent } from "./constants";
const Terms = () => {
  const classes = useStyles();
  window.scroll({ left: 0, top: 0, behavior: "smooth" });
  return (
    <Grid container className={classes.termRoot}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Head pageName="Terms" />
      </Grid>
      <Grid item lg={12} className={classes.termContent}>
        {termsContent.map((item) => {
          return (
            <>
              <h2>{item.heading}</h2>
              {item.para.map((item) => (
                <p>{item.p}</p>
              ))}
            </>
          );
        })}
      </Grid>
      <Grid item lg={12} className={classes.end}>
        <h2>END OF AGREEMENT</h2>
      </Grid>
    </Grid>
  );
};

export default Terms;
