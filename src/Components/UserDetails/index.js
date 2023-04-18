import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import defaultProfilePic from "../../Assets/PNGs/userimg.jpg";
import { useStyles } from "./styles";
import { PROFILE_BASE_URL } from "../../HTTP/config";
import { formateDate } from "../../Utilites";

const UserDetails = ({
  profilePic,
  username,
  fullName,
  walletAddress,
  bio,
  instagram,
  twitter,
  facebook,
  joinDate,
}) => {
  const classes = useStyles();

  const profileURL = profilePic
    ? profilePic.includes(PROFILE_BASE_URL)
      ? profilePic
      : `${PROFILE_BASE_URL}/${profilePic}`
    : defaultProfilePic;
  return (
    <>
      <div className={classes.root}>
        <div>
          <img src={profileURL} alt="" className={classes.profilePic} />
        </div>
        <div className={classes.detailsWrap}>
          {walletAddress && (
            <div className={classes.walletWraper}>
              <p>{walletAddress}</p>
            </div>
          )}
          <div className={classes.userBio}>
            <h3>{fullName}</h3>
            <p>@&nbsp;{username}</p>
            <div>
              <p className={classes.bioTag}>Bio</p>
              <p>{bio}</p>
            </div>
          </div>
          <div className={classes.socialWrap}>
            <p className={classes.linkTag}>Links</p>
            <div className={classes.iconWrap}>
              {!facebook && !twitter && !instagram ? (
                <p>No Social Links</p>
              ) : (
                <>
                  {instagram && (
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon />
                    </a>
                  )}

                  {twitter && (
                    <a href={twitter} target="_blank" rel="noopener noreferrer">
                      <TwitterIcon />
                    </a>
                  )}

                  {facebook && (
                    <a
                      href={facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon />
                    </a>
                  )}
                </>
              )}
            </div>
            <div className={classes.joiningWrap}>
              <p>Joined</p>
              <p>{formateDate(joinDate)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserDetails;
