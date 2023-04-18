import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  search: {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    alignItems: "center",
    border: "1px solid #959595",
    borderRadius: "10px",

    fontFamily: "Lato, sans-serif",
    padding: "0px 10px",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  },
  inputRoot: {
    width: "100%",
    border: "none",
    padding: "11px",
    "&:focus": {
      outline: "none",
    },
  },
  searchcon: {
    color: "#959595",
    width: "25px",
    height: "20px",
  },
  searchBtn: {
    border: "1px solid white",
    padding: "3px 3px 2px 3px",
    background: "white",
    cursor: "pointer  ",
  },
}));
