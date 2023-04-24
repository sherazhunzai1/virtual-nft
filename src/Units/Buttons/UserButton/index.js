import { CardMedia, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import defaultProfilePic from "../../../Assets/PNGs/userimg.jpg";

const UserButton = ({ profilePic = "", userName = "" }) => {
  const classes = useStyles();
  const profileURL = profilePic ? profilePic : defaultProfilePic;

  return (
    <Link to={`/@${userName}`} className={classes.link}>
      <span className={classes.headerBtn}>
        <CardMedia className={classes.imgContainer}>
          <img src={profileURL} alt="profile" className={classes.roundedImg} />
        </CardMedia>

        <Typography variant="h6" component="h5" className={classes.userTitle}>
          @ {userName}
        </Typography>
      </span>
    </Link>
  );
};

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
  headerBtn: {
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    backgroundColor: "white",
    color: theme.palette.text.primary,
    borderRadius: "50px",
    height: 45,
    minWidth: 50,
    padding: "5px 0px",
    textTransform: "capitalize",
    fontSize: "18px",
    boxShadow: "0px 1px 7px 2px #afafaf78",
    transition: "all 300ms cubic-bezier(0.23, 1, 0.32, 1) 0s",
    [theme.breakpoints.down("sm")]: {
      padding: "3px 0px",
    },
    "&:hover": {
      backgroundColor: "white",
      transform: "translateY(-4px)",
    },
  },

  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  roundedImg: {
    borderRadius: "50%",
    marginRight: "5px",
    width: 43,
    height: 43,
    objectFit: "cover",
  },
  userTitle: {
    fontSize: "1em",
    fontWeight: 600,
    textTransform: "initial",
    paddingRight: 20,
  },
}));

export default UserButton;
