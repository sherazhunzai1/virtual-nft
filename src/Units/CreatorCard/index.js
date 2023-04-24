import React from "react";
import { CardMedia, Avatar, Box, Typography } from "@material-ui/core";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import { useHistory } from "react-router";
import cn from "classnames";
import { Row, Item } from "@mui-treasury/components/flex";

import defaultProfilePic from "../../Assets/PNGs/userimg.jpg";
import defaultCoverPic from "../../Assets/PNGs/auctionBack.png";
import { COVER_PIC_BASE_URL, PROFILE_BASE_URL } from "../../HTTP/config";
import useStyles from "./styles";
import { textOverflow } from "../../utils/helper";

const CreatorCard = ({
  cover,
  profile,
  name,
  username = "krama_user",
  description,
}) => {
  const classes = useStyles({ color: "#fff" });
  const mediaStyles = useCoverCardMediaStyles();

  const coverUrl = cover
    ? cover.includes(COVER_PIC_BASE_URL)
      ? cover
      : `${COVER_PIC_BASE_URL}/${cover}`
    : defaultCoverPic;
  const profileURL = profile
    ? profile.includes(PROFILE_BASE_URL)
      ? profile
      : `${PROFILE_BASE_URL}/${profile}`
    : defaultProfilePic;

  const history = useHistory();
  const handleNavigation = () => {
    const path = username.split(" ").join("-");
    history.push(`/@${path}`);
  };
  let desc = textOverflow(description, 175);
  return (
    <Box
      onClick={handleNavigation}
      className={cn(classes.root, classes.color)}
      pt={20}
    >
      <CardMedia
        image={coverUrl}
        className={classes.cover}
        classes={mediaStyles}
      />
      <Box className={classes.content} p={2}>
        <Box position={"relative"} zIndex={1}>
          <Row p={0} gap={2}>
            <Item>
              <Avatar className={classes.logo} src={profileURL} />
            </Item>
          </Row>
          <div>
            <Typography className={classes.title} variant="h5">
              {name || "krama user"}
            </Typography>
          </div>
          <div>
            <Typography className={classes.tag} variant="h6">
              @&nbsp;{username || "krama user"}
            </Typography>
          </div>
          <div className={classes.description}>
            <Typography className={"description"} variant="body1">
              {desc}
            </Typography>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default CreatorCard;