import { alpha, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  coverImage: {
    minHeight: 300,
    maxHeight: 400,
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      minHeight: 200,
      maxHeight: 300,
    },
    "& .edit__profile": {
      display: "flex",
      fontFamily: "Tajawal, sans-serif",
      position: "absolute",
      bottom: 0,
      right: 0,
      padding: theme.spacing(2, 0),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        alignItems: "flex-end",
        "& .button": {
          marginTop: 5,
          width: "50%",
          right: 0,
        },
      },
    },
  },
  direction: {
    userSelect: "none",
    width: "100%",
    backgroundColor: alpha("#000", 0.5),
    borderRadius: 15,
    padding: "5px 10px",
    marginRight: 5,
    color: "white",
    "& p": {
      fontFamily: "Tajawal, sans-serif",
      fontWeight: "700",
      margin: 0,
    },
  },
  editProfileContainer: {
    maxWidth: 1800,
    margin: "0 auto",
    fontFamily: "Tajawal, sans-serif",
    "& h1": {
      margin: 0,
    },
  },
  contentWrap: {
    userSelect: "none",
    padding: "30px 120px",
    [theme.breakpoints.down("md")]: {
      padding: "30px 80px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "15px 40px",
    },
  },
}));
