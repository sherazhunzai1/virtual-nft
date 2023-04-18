import React from "react";
import { makeStyles } from "@material-ui/core";
import bgImage from "../../Assets/PNGs/nftDispBackground.jpg";

const PreviewNft = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className="heading">Preview</h1>
      <div className={classes.cardMedia}>
        <div className="outer" />
        <div className="media__container">
          <img src={bgImage} className="media" ref={ref} alt="nft" />
        </div>
      </div>
    </div>
  );
});

export default PreviewNft;

export const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    maxWidth: 400,
    width: "100%",
    padding: "20px 15px",
    margin: "auto",
    "& .heading": {
      fontFamily: "Poppins, sans-serif ",
      margin: 0,
      marginBottom: 5,
      [theme.breakpoints.down("xs")]: {
        fontSize: 25,
      },
    },
    border: "1px solid  #E7EB21",
    borderRadius: 15,
  },

  cardMedia: {
    position: "relative",
    "& .outer": {
      boxSizing: "border-box",
      margin: 0,
      minWidth: 0,
      width: "100%",
      height: 0,
      paddingBottom: "100%",
    },
    "& .media__container": {
      margin: 0,
      minWidth: 0,
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "& .media": {
      display: "block",
      objectFit: "cover",
      width: " 100%",
      height: "100%",
      borderRadius: 15,
    },
  },
}));
