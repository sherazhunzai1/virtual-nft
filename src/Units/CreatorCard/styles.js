import { makeStyles } from "@material-ui/core/styles";
import Color from "color";

export default makeStyles((theme) => ({
  color: ({ color }) => ({
    "&:before": {
      backgroundColor: Color(color).darken(0.3).desaturate(0.2).toString(),
    },
  }),
  root: {
    userSelect: "none",

    boxSizing: "border-box",
    width: "100%",
    position: "relative",
    borderRadius: 5,
    top: 0,
    transition: "300ms",

    "&:hover": {
      cursor: "pointer",
      top: -3,
      "& $logo": {
        transform: "scale(1.1)",
      },
    },
    "&:before": {
      position: "absolute",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      borderRadius: "10px",
      zIndex: 0,
      bottom: 0,
      boxShadow: "0 0 5px 0 #8e8c8a87",
      transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
  cover: {
    borderRadius: "10px",
    backgroundSize: "cover",
  },
  content: {
    position: "relative",
    height: "100%",
    boxSizing: "border-box",
    zIndex: 1,
    borderRadius: "10px",
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: 0,
      width: "100%",
      height: "100%",
      clipPath:
        "polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,265% 0%,100% 0%, 100% 100%)",
      borderRadius: "4px",
      background: "#B5B5B5",
    },
  },
  title: {
    fontFamily: "Tajawal, sans-serif",
    color: "white",
    fontSize: "2rem",
    fontWeight: 600,
    margin: 0,
  },
  tag: {
    fontFamily: "Tajawal, sans-serif",
    color: "#666666",
    fontSize: "1.25rem",
    fontWeight: 600,
    margin: 0,
  },
  description: {
    paddingTop: theme.spacing(2),
    "& .description": {
      fontFamily: "Tajawal, sans-serif",
      color: "white",
      opacity: 1,
      fontSize: 17,
      fontWeight: 600,
      borderRadius: 12,
      maxWidth: "400px",
      minHeight: 100,
      overflow: "hidden",
    },
  },
  logo: {
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    width: 100,
    height: 100,
    borderRadius: "100%",
    border: "3px solid #231F20",
    backgroundColor: "#fff",
  },

  date: {
    fontFamily: "Sen",
    color: "#fff",
    backgroundColor: theme.palette.text.hint,
    opacity: 0.72,
    fontSize: "0.75rem",
    padding: "0 0.5rem",
    borderRadius: 12,
  },

  hide: {
    overflow: "hidden",
  },
}));
