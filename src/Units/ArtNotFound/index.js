import { useEffect } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import error404 from "../../Assets/PNGs/pagenotfound.PNG";
import { useStyle } from "../Styles";

const ArtNotFound = ({ handleClear }) => {
  const classes = useStyle();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.pageNotFoundContainer}>
      <div
        className={classes.top}
        style={{ backgroundImage: `url(${error404})` }}
      />
      <div>
        <h1>Art Not Found</h1>
        <p>The art you searched for does not exist</p>
        <PrimaryButton
          borderSec
          md
          onClick={handleClear}
          title="Clear Search"
        />
      </div>
    </div>
  );
};

export default ArtNotFound;
