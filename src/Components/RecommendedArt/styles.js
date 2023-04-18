import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  img: {
    width: "180px",
    height: "210px",
    borderRadius: "5px",
  },
  featured: {
    textAlign: "center",
    borderBottom: "1px solid #e5e5e5",
    margin: "0px 150px",
    width: "100%",
    "& p": {
      fontFamily: "tajawal, sans-serif",
      fontSize: "24px",
      fontWeight: "700",
    },
  },
  carouselWrap: {
    width: "90%",
  },
  carouselRoot: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
