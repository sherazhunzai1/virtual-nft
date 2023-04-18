import { alpha, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    userSelect: "none",
    maxWidth: 1800,
    margin: "0 auto",
    paddingTop: theme.spacing(8),
    padding: theme.spacing(8),
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(4),
    },
  },

  formOuter: {
    display: "grid",
    gridTemplateColumns: "1.8fr 1fr",
    gap: 50,

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },

  formRoot: {
    width: "100%",
  },

  previewWrap: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(5),
    },
  },
  arrowWrap: {
    height: "40px",
    width: "42px",
    border: "2px solid #78736D",
    borderRadius: "50%",
    display: "grid",
    placeContent: "center",
    color: "#777E90",
    marginBottom: 30,
  },
  headingWrap: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "700",
    fontSize: "48px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
    "& p": {
      [theme.breakpoints.down("xs")]: {
        fontSize: 25,
      },
      margin: 0,
    },
  },

  buttonsContainer: {
    display: "grid",
    gap: theme.spacing(1, 2),
    gridTemplateColumns: "1.5fr 1fr",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: " 1fr 1fr",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: " 1fr ",
    },

    "& .button": {
      borderRadius: 15,
      color: "#fff",
      position: "relative",
      top: 0,
      transition: "250ms",
      "&:hover": {
        top: -3,
      },
    },

    "& .primary": {
      borderRadius: 15,
      backgroundColor: "#0A1A72",

      "&:hover": {
        backgroundColor: alpha("#0A1A72", 0.8),
      },
      "&:disabled": {
        backgroundColor: alpha("#0A1A72", 0.7),
      },
    },

    "& .main": {
      borderRadius: 15,
      backgroundColor: "#B3A16C",
      "&:hover": {
        backgroundColor: alpha("#B3A16C", 0.8),
      },
    },
    "& .secondary": {
      borderRadius: 15,
      color: "#000",
    },
  },

  note: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 16,
    margin: theme.spacing(0.5, 0, 2),
  },

  loader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(10),
    "& .progress-bar": {
      "& div": {
        padding: 0,
      },
    },
  },
}));
