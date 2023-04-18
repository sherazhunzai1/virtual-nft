import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  coverImage: {
    minHeight: 300,
    maxHeight: 400,
    height: "100%",
    backgroundColor: "#afafaf3d",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      minHeight: 200,
      maxHeight: 300,
    },
    "& .edit__profile": {
      position: "absolute",
      bottom: 0,
      right: 0,
      padding: theme.spacing(2, 0),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.down("xs")]: {
        paddingRight: theme.spacing(0.5),
        bottom: 10,
      },
    },
  },
  profileContainer: {
    boxSizing: "border-box",
    maxWidth: 1800,
    margin: "0 auto",
    padding: "0px 30px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 15px",
    },
  },
  userDetailsItem: {
    [theme.breakpoints.up("md")]: {
      paddingRight: theme.spacing(4),
    },
  },
  mrkBanner: {
    width: "100%",
    maxHeight: "200px",
  },
  cardsGrid: {
    gridTemplateColumns: "repeat(3, 1fr) !important",
    [theme.breakpoints.up("xl")]: {
      gridTemplateColumns: "repeat(4, 1fr) !important",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr) !important",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr !important",
    },
  },
  cardsContainer: {
    marginTop: theme.spacing(2),
  },
  collection: {
    fontFamily: "Lato,sans-serif",
    fontSize: "24px",
  },
  collectionWrap: {
    "& .tabs": {
      borderBottom: "1px solid #E8E6Ec",
    },

    "& .MuiTabs-indicator ": {
      backgroundColor: "#B7524B",
    },

    "& > .tabPanelsContainer": {
      paddingTop: theme.spacing(5),
    },
  },
  share: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "20px 40px 20px 0px",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
}));
