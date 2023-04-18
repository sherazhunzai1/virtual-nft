import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  grid: {
    display: "grid",
    gap: 15,
    [theme.breakpoints.down("sm")]: {},
  },
  root: {
    "& *": {
      fontFamily: "Tajawal, sans-serif ",
    },
    boxShadow: "0 0 5px 0px #13367230",
    userSelect: "none",
    display: "grid",
    gridTemplateColumns: "0.8fr 1fr 0.4fr",
    padding: "16px 10px 0",
    minWidth: 0,

    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },

  username: {
    fontFamily: "Tajawal, sans-serif ",
    fontWeight: "700",
    fontSize: "18px",
    color: "#000",
  },

  flex: {
    display: "flex",
    alignItems: "center",
  },

  right: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "10px 0",
  },
  action: {
    fontWeight: "700",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
  },

  subHeading: {
    paddingLeft: 5,
    fontWeight: "700",
    fontSize: "18px",
  },
  heading: { fontWeight: 700, fontSize: "18px" },

  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    borderRadius: 40,
  },
}));
