import { useEffect } from "react";
import { useStyle } from "../Styles";
import NetworkErr from "../../Assets/PNGs/router-device.png";

const NetworkError = () => {
  const classes = useStyle();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.pageNotFoundContainer}>
      <div
        className={classes.top}
        style={{ backgroundImage: `url(${NetworkErr})` }}
      />
      <div>
        <h1>Oops! Something went wrong, Please refresh the page.</h1>
      </div>
    </div>
  );
};

export default NetworkError;
