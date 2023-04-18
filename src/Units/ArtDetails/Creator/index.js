import { Divider, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import defaultProfilePic from "../../../Assets/PNGs/userimg.jpg";

import useStyles from "./styles";

const Creator = ({
  profilePic = "",
  fullname = "",
  username = "",
  hasProfilePicture,
  creatorDescription = "",
}) => {
  const classes = useStyles();
  profilePic = hasProfilePicture ? profilePic : defaultProfilePic;
  return (
    <div>
      <div className={classes.subHeadingContainer}>
        <Typography variant="h4">Creator Information</Typography>
      </div>
      <Divider className={classes.divider} />

      <Grid container style={{ marginBottom: 30 }}>
        <Grid item xs={12}>
          <div className={classes.flex}>
            <Link to={`/@${username}`} className={classes.link}>
              <div className={classes.profilePic}>
                <img src={profilePic} alt={fullname} />
              </div>
            </Link>
            <div className={classes.userDetails}>
              <Link to={`/@${username}`} className={classes.link}>
                <Typography variant="h5" className={classes.username}>
                  @&nbsp;{username}
                </Typography>
              </Link>
              <Typography variant="h5" className={classes.fullname}>
                {fullname}
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.creatorDetail}>{creatorDescription}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Creator;
