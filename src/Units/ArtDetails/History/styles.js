import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  linkButton: {
    userSelect: "none",
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 10px",
    margin: "10px auto",
    minWidth: 0,
    fontFamily: "Tajawal, sans-serif ",
    boxShadow: "0 0 0 1px #0000000f",
  },

  username: {
    fontFamily: "Tajawal, sans-serif ",
    fontWeight: "700",
    fontSize: "18px",
    color: "#000",
  },
  date: {
    fontFamily: "Tajawal, sans-serif ",
    fontWeight: "700",
  },
  flex: {
    display: "flex",
  },
  paddingLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "black",
    paddingLeft: 10,
  },
  link: {
    textDecoration: "none",
    color: "#000",
  },

  svgLink: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 15,

    color: "#808080",
    transition: "color 300ms cubic-bezier(0.23, 1, 0.32, 1) 0s",

    "&:hover": {
      color: "#000",
    },
  },

  img: {
    width: 50,
    height: 50,
    borderRadius: 999,
    objectFit: "cover",
  },
  icon: {
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },

  right: {
    display: "flex",
  },
  prices: {
    display: "flex",
    alignItems: "center",
  },

  eth: {
    fontWeight: 600,
    fontSize: "1.3rem",
    display: "flex",

    "& .price": {
      width: "100%",
      maxWidth: "8ch",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
  dollar: {
    color: "black",
    fontWeight: 600,
    fontSize: 14,
  },
}));
