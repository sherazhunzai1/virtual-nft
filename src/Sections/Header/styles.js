import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px 10px",
  },
  brandCont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  linkCont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  register: {
    cursor: "pointer",
  },
  btnCont: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  linkWrap: {
    color: "black",
    textDecoration: "none",
    fontFamily: "Lato, sans-serif",
    fontWeight: "700",
    fontSize: "14px",
    padding: theme.spacing(1, 1.5),
    "&:hover": {
      color: "black",
      textDecoration: "none",
    },
  },
  headerButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none !important",
  },
  show: {
    display: "flex !important",
  },
  brandContInner: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  mobMenu: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  brandImg: {
    width: "120px",

    [theme.breakpoints.down("md")]: {
      width: "130px",
    },
  },

  navButton: {
    padding: theme.spacing(1, 0),
    minHeight: 0,
    borderRadius: 15,
    textTransform: "uppercase",
  },
}));
