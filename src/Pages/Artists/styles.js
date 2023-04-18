import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(5),
    },
  },

  coverPic: {
    width: "100%",
    minHeight: 250,
    maxHeight: "500px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginBottom: theme.spacing(2),

    [theme.breakpoints.down("sm")]: {
      minHeight: 200,
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: 150,
    },
    "& .page__title__container": {
      minHeight: "inherit",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // [theme.breakpoints.down("sm")]: {
      //   minHeight: "",
      // },
      "& .title": {
        fontFamily: "Lato, sans-serif",

        [theme.breakpoints.down("sm")]: {
          fontSize: theme.spacing(6),
        },
      },
    },
  },
  mainContainer: {
    boxSizing: "border-box",
    maxWidth: 1800,
    margin: "0 auto",
    padding: "0px 30px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 15px",
    },
  },
  filterWrap: {
    paddingRight: 20,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  cardsContainer: {
    paddingTop: theme.spacing(5),
  },
  cardsGrid: {
    gridTemplateColumns: "repeat(4, 1fr) !important",
    [theme.breakpoints.up("xl")]: {
      gridTemplateColumns: "repeat(5, 1fr) !important",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr) !important",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr !important",
    },
  },
  search: {
    width: "100%",
  },

  loadMoreButtonContainer: {
    padding: theme.spacing(5, 0, 0),
    display: "flex",
    justifyContent: "center",
    "& .button": {
      maxWidth: 200,
      width: "100%",
    },
  },
  fab: {
    position: "fixed",
    bottom: "0",
    right: "0",
    margin: "0px 20px 20px 0px",
    zIndex: "500",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
