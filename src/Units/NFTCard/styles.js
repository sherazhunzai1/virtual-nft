import { alpha, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 5,
    width: "100%",
    cursor: "pointer",
    boxShadow: "0 0 5px 0 #8e8c8a87",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    flex: "auto",
    position: "relative",
    top: 0,
    transition: "300ms",
    "&:hover": {
      top: -3,
    },
  },

  mediaRoot: {
    position: "relative",
  },
  mediaInner: {
    boxSizing: " border-box",
    margin: 0,
    minWidth: 0,
    position: "relative",
    overflow: "hidden",
  },

  mediaInnerTop: {
    margin: 0,
    minWidth: 0,
    width: " 100%",
    height: 0,
    paddingBottom: "100%",
  },
  mediaContainer: {
    margin: 0,
    minWidth: 0,
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
  },
  media: {
    display: "block",
    objectFit: "cover",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
  },

  cardInner: {
    display: "flex",
    flex: "1 1 0%",
    alignItems: "flex-start",
    padding: "0px 24px 0px 24px",
  },
  saleContainer: {
    position: "relative",
    width: "100%",
    paddingTop: 20,
    paddingBottom: 20,
    "& .text": {
      backgroundColor: "#B7524B",
      fontWeight: 600,
      fontSize: 16,
      borderRadius: 10,
    },
    "& .button": {
      boxShadow: "0 0 12px -5px #0c2b5e",
      backgroundColor: "#231F20",
      borderRadius: 15,
      padding: "3px 14px",
      position: "relative",
      top: 0,
      "&:hover": {
        top: -2,
        backgroundColor: alpha("#231F20", 0.8),
      },
    },

    "& .button, .text": {
      padding: "0 10px",
      position: "absolute",
      right: 0,
      top: 0,
      color: "#fff",
      fontSize: 16,
    },
  },

  cardInnerContainer: {
    boxSizing: "border-box",
    display: "flex",
    height: "100%",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-between",
    position: "relative",
    padding: theme.spacing(2, 3),
  },
  cardTitle: {
    display: "grid",
    gridTemplateColumns: "1fr",
    fontWeight: 900,
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: 24,
    fontFamily: "tajawal, sans-serif",
    color: "#231F20",
    userSelect: "none",
    width: "100%",
  },
  creatorDetails: {
    paddingTop: theme.spacing(2.5),
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    "& .creator": { padding: 0, margin: 0 },
  },
  cardFooter: {
    backgroundColor: "#231F20",
    userSelect: "none",
    height: "110px",
  },
  footerFlex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  darkBG: {
    color: theme.palette.secondary.main,
  },
  cardFooterTab: {
    padding: 28,
  },
}));
