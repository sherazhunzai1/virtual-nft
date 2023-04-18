import React, { useRef } from "react";
import { Grid } from "@material-ui/core";
import { connect, useSelector } from "react-redux";
import ProfileEditForm from "../../Components/ProfileEditForm";
import PrimaryButton from "../../Units/Buttons/PrimaryButton";
import defaultCoverPic from "../../Assets/PNGs/auctionBack.png";

import { useStyles } from "./styles";
import { editCoverPicture } from "../../HTTP/APIs";
import { COVER_PIC_BASE_URL } from "../../HTTP/config";

const EditProfile = ({ user: { userId } }) => {
  const classes = useStyles();

  return (
    <>
      <CoverPicture userId={userId} />
      <Grid container className={classes.editProfileContainer}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.contentWrap}
        >
          <h1>Edit Profile</h1>
          <p>
            You can set preferred display name, create your profile URL and
            manage other personal settings.
          </p>
          <ProfileEditForm userId={userId} />
        </Grid>
      </Grid>
    </>
  );
};
const mapStateToProps = (state) => {
  const { Auth } = state;
  return {
    ...Auth,
  };
};
export default connect(mapStateToProps, null)(EditProfile);

const CoverPicture = ({ userId }) => {
  const classes = useStyles();
  const {
    ArtistProfile: {
      user: { cover: coverPic },
    },
  } = useSelector((state) => state);
  const coverUrl = coverPic
    ? coverPic.includes(COVER_PIC_BASE_URL)
      ? coverPic
      : `${COVER_PIC_BASE_URL}/${coverPic}`
    : defaultCoverPic;

  const coverImgRef = useRef();
  const [, setProfileImageState] = React.useState({
    selectedFile: null,
    invalidImage: null,
  });

  const handleCoverImageUpload = (event) => {
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
      if (coverImgRef.current) {
        coverImgRef.current.style.backgroundImage = `url(${img.src})`;
      }
      const fd = new FormData();
      fd.append("profilePic", imageFile, imageFile.name);
      fd.append("userId", userId);
      editCoverPicture(fd);
      event.target.value = "";
    };
  };
  const inputRef = useRef();

  const handleUploadClick = () => {
    inputRef.current.click();
  };
  return (
    <div
      className={classes.coverImage}
      style={{ backgroundImage: `url('${coverUrl}')` }}
      ref={coverImgRef}
    >
      <div className="edit__profile">
        <div className={classes.direction}>
          <p>Cover Photo</p>
          <small>We recommend an image of at least 1360x252.</small>
        </div>
        <div className="button">
          <PrimaryButton
            title="Upload"
            inputBtn
            lg
            onClick={handleUploadClick}
          />
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleCoverImageUpload}
            style={{ display: "none" }}
          />
        </div>
      </div>
    </div>
  );
};
