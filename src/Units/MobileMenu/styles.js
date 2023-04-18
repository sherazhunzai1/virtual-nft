import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  list: {
    width: "22vw",

    [theme.breakpoints.down("sm")]: {
      width: "65vw",
    },
  },
  fullList: {
    width: "auto",
  },
  mobileViewLink: {
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&.active": {
      backgroundColor: "#B7524B",
      color: "white",

      "& > .MuiListItem-root > .MuiListItemIcon-root": {
        color: "inherit",
      },
      "& > .MuiListItem-root > .MuiListItemText-root >span": {
        color: "inherit",
      },
    },
  },
  linkTitle: {
    "& > span": {
      fontSize: 18,
    },
  },
  userMobileIcon: {
    width: 30,
    height: 30,
    borderRadius: "100%",
  },
  hideMenu: {
    paddingRight: 10,
    // [theme.breakpoints.up("md")]: {
    //   display: "none",
    // },
  },
  menuButton: {
    boxShadow: "0 0 5px 0 #00000061",
    backgroundColor: "#B7524B",
    color: "white",
    "&:hover": {
      backgroundColor: "#B7524B",
      color: "white",
    },
    [theme.breakpoints.down("sm")]: {
      padding: 6,
    },
  },
}));
