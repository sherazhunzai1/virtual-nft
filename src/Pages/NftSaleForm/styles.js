import { alpha, makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    "&  *": {
      fontFamily: "Poppins, sans-serif",
      userSelect: "none",
    },
    padding: theme.spacing(0, 5),

    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },

    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: theme.spacing(10),

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
      gap: theme.spacing(5),
    },
  },
  container: {
    paddingTop: 20,
  },
  heading: {
    marginBottom: theme.spacing(1),
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },

  title: {
    fontSize: 24,
    fontWeight: 600,
    paddingTop: 10,
  },

  description: {
    boxSizing: "border-box",
    padding: "1px 0 20px",
    fontSize: 20,
  },

  imageRoot: {
    boxSizing: "border-box",
    maxWidth: 400,
    width: "100%",
    padding: "20px 15px",
    margin: "auto",
  },

  cardMedia: {
    position: "relative",
    "& .outer": {
      boxSizing: "border-box",
      margin: 0,
      minWidth: 0,
      width: "100%",
      height: 0,
      paddingBottom: "100%",
    },
    "& .media__container": {
      margin: 0,
      minWidth: 0,
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "& .media": {
      display: "block",
      objectFit: "cover",
      width: " 100%",
      height: "100%",
      borderRadius: 15,
    },
  },
  auctionTimeInputs: {
    marginTop: 10,
    display: "flex",
    "& > div:first-child": {
      paddingRight: 10,
    },

    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap",
      "& > div:first-child": {
        marginBottom: 10,
      },
    },
  },

  inputField: {
    marginTop: 5,
  },
  inputLabel: {
    margin: "10px 0 0",
    "& .MuiInputBase-input": {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 12,
    },
  },
  termLink: {
    textDecoration: "none",
    color: "#3772FF",
  },
  agreement: {
    display: "flex",
    alignItems: "center",
    paddingTop: 40,
  },

  note: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 16,
    margin: theme.spacing(0.5, 0, 2),
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
}));
