import React from "react";
import { Typography } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import Loading from "../Loading";
import { useStyles } from "./styles";

const UploadImage = React.forwardRef(
  ({ handleImageUploadComplete, helperText, error, value }, ref) => {
    const classes = useStyles();

    const [isImgUploading, setIsImgUploading] = React.useState(false);
    const [isInvalidImage, setIsInvalidImage] = React.useState(false);

    const handleImageUpload = (event) => {
      event.preventDefault();
      setIsInvalidImage(null);
      setIsImgUploading(true);

      const imageFile = event.target.files[0];

      // check for file
      if (!imageFile) {
        setIsInvalidImage("Please select an image or a gif.");
        setIsImgUploading(false);
        return false;
      }
      // check file type
      if (!/\.(jpg|jpeg|png|gif)$/.test(imageFile.name.toLocaleLowerCase())) {
        setIsInvalidImage("");
        setIsImgUploading(false);
        return false;
      }
      // check file size limit 100 MiB
      if (imageFile.size / 1024 / 1024 > 100) {
        setIsInvalidImage("File size exceed 100MiB limit.");
        setIsImgUploading(false);
        return false;
      }

      setIsImgUploading(false);

      handleImageUploadComplete(imageFile);
      const res = URL.createObjectURL(imageFile);
      ref.current.src = res;
      event.target.value = "";
    };

    const hiddenFileInput = React.useRef(null);
    const handleClick = () => {
      hiddenFileInput.current.click();
    };

    return (
      <div>
        <label className={classes.mainLabel}>
          <p className={classes.upload}>Upload NFT</p>
        </label>
        <input
          accept="image/*"
          type="file"
          name="imageFile"
          className={classes.mainTag}
          ref={hiddenFileInput}
          onChange={handleImageUpload}
        />
        <div className={classes.label}>
          {isImgUploading ? (
            <div>
              <Typography className={classes.subHeading}>
                Uploading NFT to IPFS Please wait...
              </Typography>
              <Loading />
            </div>
          ) : (
            <div className={classes.innerLabel} onClick={handleClick}>
              <PublishIcon />
              <p>PNG, GIF, WEBP, JPG, JPEG </p>
            </div>
          )}
        </div>
        <div className={classes.mainLabel}>
          {error || isInvalidImage ? (
            <p className={classes.error}>{isInvalidImage || helperText}</p>
          ) : (
            <p className={classes.drag}>{/*Drag or*/} Choose file to upload</p>
          )}
        </div>
      </div>
    );
  }
);

export default UploadImage;
