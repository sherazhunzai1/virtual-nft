import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  termRoot: {
    padding: "0px 100px 100px 100px ",
    fontFamily: "Lato, sans-serif",
    [theme.breakpoints.down("md")]: {
      padding: "0px 30px 30px 30px",
    },
  },
  termContent: {
    "& p": {
      fontSize: "18px",
      color: "#797979",
      fontWeight: "600",
      paddingLeft: "10px",
      lineHeight: "30px",
      textTransform: "capitalize",
      wordSpacing: "0.1em",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: 0,
      },
    },
  },
  end: {
    textAlign: "center",
    padding: "50px 0px ",
    width: "100%",
  },
}));
