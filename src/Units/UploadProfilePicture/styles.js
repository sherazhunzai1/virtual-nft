import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  ProfilePic: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    backgroundPosition: "center",
    backgroundSize: "contain",
    border: "5px solid #B3A16C",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      margin: "0 auto",
    },
  },
  profilePicRoot: {
    display: "flex",
    justifyContent: "space-between",
    width: "40%",
    padding: "30px 0px",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      display: "block",
      margin: "0 auto",
    },
  },
  uploadWrap: {
    userSelect: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: 10,
    "& p": {
      margin: 0,
      fontSize: 16,
      fontWeight: "bold",
    },
    [theme.breakpoints.up("sm")]: { width: "60%" },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 20,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 20,
      textAlign: "center",
    },
  },
  name: {
    paddingBottom: "10px",
  },
}));
