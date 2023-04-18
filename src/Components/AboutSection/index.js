import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import cn from "classnames";
import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";

const AboutSection = ({
  heading = "",
  para = [],

  imgUrl,
  delay = 1,
  videoUrl,
  imgAnimation,
  isOdd,
  onlySubHeadings = false,
  className = "",
}) => {
  const classes = useStyles();
  useEffect(() => { Aos.init({ duration: 3000 }); }, []);

  return (
    <div
      className={cn(classes.abtSectRoot, className, {
        [classes.oddInd]: isOdd,
      })}
    >
      <div className={classes.abtInner}>
        <h1>{heading}</h1>

        {onlySubHeadings ? (
          <>
            {para.map(({ subHeading }, i) => (
              <div key={i} className="key-words">
                <h3>{subHeading}</h3>
              </div>
            ))}
          </>
        ) : (
          <div className="container">
            {para.map(({ subHeading, text }, i) => (
              <div key={i} className="section">
                {subHeading && <h3>{subHeading}</h3>}
                <Typography>{text}</Typography>
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className={classes.abtLower}
        style={!videoUrl ? { backgroundImage: `url(${imgUrl})` } : {}}
        data-aos={!videoUrl && imgAnimation}
      >
        {videoUrl && <video style={{ width: '100%', maxHeight: '100%' }} loop="loop" autoplay="true" muted src={videoUrl} />}
      </div>
    </div>
  );
};
//loop="loop"

export default AboutSection;
