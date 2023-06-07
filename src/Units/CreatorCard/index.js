import React from "react";
import { CardMedia, Avatar, Box, Typography } from "@material-ui/core";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import { useHistory } from "react-router";
import cn from "classnames";
import { Row, Item } from "@mui-treasury/components/flex";

import defaultProfilePic from "../../Assets/PNGs/userimg.jpg";
import defaultCoverPic from "../../Assets/PNGs/auctionBack.png";
import useStyles from "./styles";
import { textOverflow } from "../../utils/helper";

const CreatorCard = ({
  cover,
  profile,
  name,
  username = "virtual Nft_user",
  description,
}) => {
  const classes = useStyles({ color: "#fff" });
  const mediaStyles = useCoverCardMediaStyles();

  const coverUrl = cover ? cover : defaultCoverPic;
  const profileURL = profile ? profile : defaultProfilePic;

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
              {name || "virtual Nft user"}
            </Typography>
          </div>
          <div>
            <Typography className={classes.tag} variant="h6">
              @&nbsp;{username || "virtual Nft user"}
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
