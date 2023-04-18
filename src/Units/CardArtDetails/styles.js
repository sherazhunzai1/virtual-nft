import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  cardFooter: {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    boxSizing: "border-box",
    fontFamily: "tajawal, sans-serif",
    fontSize: 20,
    margin: 0,
    fontWeight: 500,
    color: "white",
    lineHeight: 1,
    textTransform: "capitalize",
  },
}));
