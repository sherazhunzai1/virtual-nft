import Carousel from "react-elastic-carousel";

import { useStyles } from "./styles";
const CustomCarousel = (props) => {
  const classes = useStyles();

  return (
    <Carousel
      className={classes.carousel}
      itemPadding={props.itemPadding}
      breakPoints={props.breakPoints}
    >
      {props.children}
    </Carousel>
  );
};

export default CustomCarousel;
