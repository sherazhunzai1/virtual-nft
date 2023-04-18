import React from "react";
import { useRef } from "react";
import { editProfilePicture } from "../../HTTP/APIs";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useStyles } from "./styles";

const UploadProfilePicture = ({ userId, profileImage }) => {
  const classes = useStyles();

  const hiddenFileInput = React.useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const profileImgRef = useRef();

  const [, setProfileImageState] = React.useState({
    selectedFile: null,
    invalidImage: null,
  });

  const handleProfileImageUpload = (event) => {
    event.preventDefault();
    let reader2 = new FileReader();
    const imageFile = event.target.files[0];
    if (!imageFile) {
      setProfileImageState({ invalidImage: "Please select image." });
      return false;
    }
    if (!imageFile.name.toLowerCase().match(/\.(jpg|jpeg|png|gif)$/)) {
      setProfileImageState({ invalidImage: "Please select valid image." });
      return false;
    }
    // to dispaly on page
    reader2.readAsDataURL(imageFile);
    reader2.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setProfileImageState({ selectedFile: imageFile, invalidImage: null });
      };
      img.onerror = () => {
        setProfileImageState({ invalidImage: "Invalid image content." });
        return false;
      };
      img.src = e.target.result;
      if (profileImgRef.current) {
        profileImgRef.current.style.backgroundImage = `url(${img.src})`;
      }
      const fd = new FormData();
      fd.append("profilePic", imageFile, imageFile.name);
      fd.append("userId", userId);
      editProfilePicture(fd);
      event.target.value = "";
    };
  };
  return (
    <div className={classes.profilePicRoot}>
      <div
        ref={profileImgRef}
        className={classes.ProfilePic}
        style={{ backgroundImage: `url('${profileImage}')` }}
      />
      <div className={classes.uploadWrap}>
        <div className={classes.name}>
          <p>Profile Picture</p>
          <small>
            We recommend an image of at least 400x400. Gifs work too 🙌
          </small>
        </div>
        <div>
          <PrimaryButton title="Upload" lg inputBtn onClick={handleClick} />

          <input
            accept="image/*"
            type="file"
            style={{ display: "none" }}
            ref={hiddenFileInput}
            onChange={handleProfileImageUpload}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadProfilePicture;
