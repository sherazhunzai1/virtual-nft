import React from "react";
import { useStyle } from "../Styles";
import noContent from "../../Assets/PNGs/81ad0634c8d3b2543dbb4b50dc001ba1.png";

const NoCollection = ({ market }) => {
  const classes = useStyle();
  return (
    <div className={classes.pageNotFoundContainer}>
      <div
        className={classes.top}
        style={{ backgroundImage: `url(${noContent})` }}
      />
      {!market && (
        <div>
          <h1>This user currently does not have any Collections</h1>
        </div>
      )}
    </div>
  );
};
export default NoCollection;
