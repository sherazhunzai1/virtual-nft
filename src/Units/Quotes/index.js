import { useStyles } from "./styles";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Typography } from "@material-ui/core";

const QuoteData = (props) => {
  const { item } = props;
  const classes = useStyles();
  useEffect(() => {
    Aos.init({ duration: 3000 });
  });
  return (
    <div data-aos={item.fade} className={classes.quoteRoot}>
      <Typography className={classes.quote}>{item.quote}</Typography>
      <Typography className={classes.quotee}>
        {item.quotee},{item.position}
      </Typography>
    </div>
  );
};

export default QuoteData;
