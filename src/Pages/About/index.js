import { Grid } from "@material-ui/core";
import AboutSection from "../../Components/AboutSection";
import Quotes from "../../Components/Quotes";
import Head from "../../Units/Heading";
import {
  aboutContent,
  keyWords,
  Approach,
  quoteContent,
  founderMsg,
} from "./constants";
import { useStyles } from "./styles";

const AboutUs = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.aboutRoot}>
      <Head pageName="About Us" />

      <Grid item lg={12} md={12} sm={12} xs={12}>
        {aboutContent.map(({ heading, para, image, fade, video }, i) => (
          <AboutSection
            key={i}
            delay={i}
            isOdd={i % 2 !== 0}
            heading={heading}
            para={para}
            imgUrl={image}
            videoUrl={video}
            imgAnimation={fade}
          />
        ))}
      </Grid>

      {/* <Grid item lg={12} md={12} sm={12} xs={12}>
        {keyWords.map(({ heading, para, image, fade }, i) => (
          <AboutSection
            key={i}
            isOdd={i % 2 !== 0}
            heading={heading}
            para={para}
            imgUrl={image}
            imgAnimation={fade}
            onlySubHeadings
          />
        ))}
      </Grid> */}

      {/* <Grid item lg={12} md={12} sm={12} xs={12}>
        {Approach.map(({ heading, para, image, fade }, i) => (
          <AboutSection
            key={i}
            isOdd={true}
            heading={heading}
            para={para}
            imgUrl={image}
            imgAnimation={fade}
          />
        ))}
      </Grid> */}
    </Grid>
  );
};
export default AboutUs;
