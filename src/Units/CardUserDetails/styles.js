import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  avatar: {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
    background: "transparent",

    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    marginTop: "auto",
    border: "none",
    cursor: "pointer",
    transition: "300ms",
    "&:hover, &:focus": {
      background: "transparent",
    },

    "& > span": {
      marginLeft: "10px",
      fontSize: "16px",
      fontWeight: 600,
      transition: "300ms",
    },
    "& >img": {
      minWidth: "34px",
      minHeight: "34px",
      maxWidth: "34px",
      maxHeight: "34px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "999px",
      transition: "300ms",
      objectFit: "cover",
    },
    "&:hover": {
      "& >img, & > span": {
        transform: "scale(1.1)",
      },
    },
  },
  user: {
    color: "#666666",
    fontSize: "14px",
    fontFamily: "Lato, sans-serif",
    fontWeight: "900",
  },
}));
