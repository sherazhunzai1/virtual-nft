import React from "react";
import { Button, CardContent, Typography } from "@material-ui/core/";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import TimerComponent from "../TimerComponent";

import CardArtDetails from "../CardArtDetails";
import CardUserDetails from "../CardUserDetails";
import { useStyles } from "./styles";
import { createURL } from "../../utils/helper";
import { textOverflow } from "../../utils/helper";

const NFTCard = ({
  id,
  title = " ",
  image,
  createrName,
  createrImg,
  description,
  artPrice,
  endTime,
  priceComponentTitle,
  isAuction,
  isProfileCard,
  onSale,
  owner_id,
}) => {
  const classes = useStyles();
  const isIPFSImg = /ipfs:\/\//.test(image),
    imgSrc = isIPFSImg ? `https://ipfs.io/ipfs/${image.split("//")[1]}` : image;

  const history = useHistory();
  const handleNavigation = (e) => {
    e.stopPropagation();

    const uri = createURL(title, id);
    const path = `/@${createrName}/${uri}`;
    history.push(path);
  };

  const handlePutForSale = (e) => {
    e.stopPropagation();

    const uri = createURL(title, id);

    const path = `/sell-nft/${uri}`;
    history.push(path);
  };

  const {
    Auth: {
      user: { userId },
    },
  } = useSelector((state) => state);
  let descript = textOverflow(description, 150);
  return (
    <div className={classes.root} onClick={handleNavigation}>
      <div className={classes.mediaRoot}>
        <div className={classes.mediaInner}>
          <div className={classes.mediaInnerTop} />
          <div className={classes.mediaContainer}>
            <img
              loading="lazy"
              src={imgSrc}
              alt={title}
              className={classes.media}
            />
          </div>
        </div>
      </div>

      <div className={classes.cardInnerContainer}>
        <div className={classes.cardTitle}>
          <Typography variant="h5">{title}</Typography>
        </div>
        <div className={classes.creatorDetails}>
          <CardUserDetails
            className={"creator"}
            profilePic={createrImg}
            username={createrName}
          />
        </div>
      </div>

      {isProfileCard ? (
        <>
          <div className={classes.cardInnerContainer}>
            <Typography variant="h6">{descript}</Typography>
          </div>
          {Number(onSale) === 1 ? (
            <div className={classes.cardInner}>
              <div className={classes.saleContainer}>
                <Typography variant="h6" className="text">
                  ON SALE
                </Typography>
              </div>
            </div>
          ) : (
            Number(userId) === Number(owner_id) && (
              <div className={classes.cardInner}>
                <div className={classes.saleContainer}>
                  <Button onClick={handlePutForSale} className="button">
                    PUT FOR SALE
                  </Button>
                </div>
              </div>
            )
          )}
        </>
      ) : (
        <div className={classes.cardFooter}>
          <CardContent className={classes.darkBG}>
            <div className={classes.footerFlex}>
              <CardArtDetails title={priceComponentTitle} price={artPrice} />
              {isAuction && (
                <TimerComponent isCard time={endTime} isUpdating={false} />
              )}
            </div>
          </CardContent>
        </div>
      )}
    </div>
  );
};

export default NFTCard;
