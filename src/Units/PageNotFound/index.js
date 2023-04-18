import React, { useEffect } from "react";
import { useStyle } from "../Styles";
import PrimaryButton from "../Buttons/PrimaryButton";
import error404 from "../../Assets/PNGs/pagenotfound.PNG";
import { Link } from "react-router-dom";

const PageNotFound = () => {
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
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist</p>
        <Link to="/home">
          <PrimaryButton borderSec md title="Back to Home" />
        </Link>
      </div>
    </div>
  );
};
export default PageNotFound;
