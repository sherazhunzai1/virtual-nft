import React from "react";
import { useHistory } from "react-router";
import cn from "classnames";
import defaultProfilePic from "../../Assets/PNGs/userimg.jpg";
import { useStyles } from "./styles";

const CardUserDetails = ({
  profilePic = "",
  username = "",
  className = null,
  style = null,
}) => {
  const classes = useStyles();

  const profileURL = profilePic ? profilePic : defaultProfilePic;

  const history = useHistory();
  const handleButtonClick = (e) => {
    e.stopPropagation();
    let path = username.split(" ").join("-");
    path = `/@${path}`;
    history.push(path);
  };
  return (
    <button
      className={cn(classes.avatar, className)}
      style={style}
      onClick={handleButtonClick}
    >
      <img src={profileURL} alt={username} />
      <span className={classes.user}>@&nbsp;{username}</span>
    </button>
  );
};

export default CardUserDetails;
