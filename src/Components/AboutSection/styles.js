import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  abtSectRoot: {
    display: "flex",
    margin: "30px 0px ",
    overflow: "hidden",
    gridColumnGap: 30,
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  oddInd: {
    flexDirection: "row-reverse",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  abtInner: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 30,
    },

    "& h1": {
      marginBottom: 15,
    },

    "& .key-words": {
      "& h3": {
        marginTop: 10,
      },
    },

    "& .container .section": {
      "& h3": {
        margin: 0,
        marginTop: 30,
        paddingBottom: 10,
        [theme.breakpoints.down("sm")]: {
          fontSize: "24px",
        },
      },
      "&:first-child": {
        "& h3": {
          marginTop: 10,
        },
      },
    },

    "& p": {
      fontSize: "20px",
      margin: 0,
      fontFamily: "Lato, sans-serif",
      lineHeight: 1.5,
      [theme.breakpoints.down("sm")]: {
        fontSize: "18 px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  section: {
    paddingBottom: theme.spacing(2),
  },
  abtLower: {
    width: "50%",
    minHeight: "375px",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      minHeight: "150px"
    },
  },
}));
