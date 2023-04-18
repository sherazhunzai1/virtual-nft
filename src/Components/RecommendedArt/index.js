import CustomCarousel from "../../Units/Carousel";
import Image from "../../Assets/PNGs/creatorCover.png";
import { useStyles } from "./styles";
const RecommendedArt = () => {
  const classes = useStyles();
  const imageData = [
    Image,
    Image,
    Image,
    Image,
    Image,
    Image,
    Image,
    Image,
    Image,
    Image,
    Image,
    Image,
    Image,
    Image,
  ];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 6 },
  ];
  return (
    <div className={classes.carouselRoot}>
      <div className={classes.featured}>
        <p>Recommended Artworks</p>
      </div>
      <div className={classes.carouselWrap}>
        <CustomCarousel breakPoints={breakPoints} itemPadding={[50, 5]}>
          {imageData.map((imgSrc, i) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a href="#">
              <img src={imgSrc} alt="" className={classes.img} />
            </a>
          ))}
        </CustomCarousel>
      </div>
    </div>
  );
};

export default RecommendedArt;
