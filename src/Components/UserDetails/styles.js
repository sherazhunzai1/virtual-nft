import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "lato,sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
    borderRadius: "10px",
    margin: "0 auto",
    padding: "0px 20px 70px 20px",

    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "auto",
    },
  },
  profilePic: {
    backgroundColor: "#afafaf",
    objectFit: "cover",
    position: "relative",
    bottom: "40px",
    height: "150px",
    width: "150px",
    borderRadius: "50%",
    border: "5px solid white",
    filter: "drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.15))",
  },
  detailsWrap: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  walletWraper: {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "20px",
    width: "80%",
    textAlign: "center",
    padding: "5px 0px",

    "& p": {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      margin: 0,
      padding: theme.spacing(0, 2),
    },
  },
  userBio: {
    textAlign: "center",
    userSelect: "none",
  },
  bioTag: {
    borderBottom: "1px solid #cecece",
    paddingBottom: "10px",
    margin: "0",
    userSelect: "none",
  },
  linkTag: {
    userSelect: "none",
    borderBottom: "1px solid #cecece",
    paddingBottom: "10px",
    margin: "0",
    width: "100%",
  },
  socialWrap: {
    width: "100%",
    textAlign: "center",
  },
  iconWrap: {
    display: "flex",
    justifyContent: "space-around",
    padding: "15px 0px 30px 0px",
    borderBottom: "1px solid #cecece",
    "& p": {
      userSelect: "none",
    },
  },
  joiningWrap: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #cecece",
  },
}));
