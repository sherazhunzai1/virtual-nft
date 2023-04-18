import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  paperPadding: {
    padding: 23,
    fontFamily: "Lato, sans-serif",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.25) !important",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",

    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr ",
    },
  },

  placeBidbutton: {
    color: "white",
    backgroundColor: "black",
  },
  ownedBy: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      alignItems: "flex-start",
      paddingTop: "20px",
    },
    "& h3": {
      fontWeight: "900",
      fontSize: "24px",
      paddingBottom: "30px",
      margin: "0",
      textAlign: "center",
    },
  },
  placebid: {
    color: "white",
    backgroundColor: "black",
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 1,
    [theme.breakpoints.up("sm")]: {
      borderColor: theme.palette.primary.main,
      width: "100%",
    },
  },
  paddingTop: {
    position: "relative",
    left: "auto",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
    },
  },
}));

export const buttonStyles = makeStyles((theme) => ({
  style: {
    width: "100%",
    backgroundColor: "black",
    color: "white",
    borderRadius: 15,
    "&:hover": {
      color: "black",
    },
  },
}));
