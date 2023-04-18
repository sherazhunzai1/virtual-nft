import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    boxSizing: "border-box",
    margin: "0px 0px 20px",
    minWidth: 0,
    display: "flex",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderColor: "#E6E6E6",
  },
  container: {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
    position: "relative",
    zIndex: 3,
  },
  gridContainer: {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
    display: "grid",
    gap: 24,
  },
  innerGrid: {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
    display: "grid",
    gap: 16,
    gridTemplateColumns: "1fr",

    [theme.breakpoints.up("sm")]: {
      gap: 24,
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
  gridItem: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flex: "auto",
    flexDirection: "column",
    borderRadius: 10,
    overflow: "hidden",
    boxshadow: "0px 10px 20px rgb(0 0 0 / 5%)",
    transition: "all 300ms cubic-bezier(0.23,1,0.32,1)",
    textDecoration: "none",
    color: "inherit",
    willChange: "transform",
    "&:hover": {
      transform: "translateY(2px)",
      boxShadow: "rgb(0 0 0 / 5%) 0px 10px 20px",
    },
  },
  collected: {
    display: "flex",
    width: "14vw",
    height: "20vh",
  },
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  tab: {
    color: "black",
    backgroundColor: "transparent",
  },
}));
