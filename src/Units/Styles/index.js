import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  pageNotFoundContainer: {
    marginBottom: theme.spacing(5),
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: "20vh",
    alignItems: "center",
    color: "#505050",
    fontFamily: theme.typography.fontFamily,
    textAlign: "center",
    "& h1": {
      paddingTop: theme.spacing(3),
    },
    "& p": {
      maxWidth: "45ch",
    },
  },

  top: {
    height: "33vh",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
  goToHomeLink: {
    textDecoration: "none",
  },
  goToHomeLinkText: {
    width: 100,
    margin: "0 auto",
    marginTop: theme.spacing(2),
    padding: "10px 25px",
    backgroundColor: "#0A1A72",
    color: "white",
    borderRadius: 18,
    transition: theme.transitions.create("all"),
    "&:hover": {
      backgroundColor: "#B3A16C",
    },
  },
}));
