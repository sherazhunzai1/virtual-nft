import { alpha, makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  modal: {
    userSelect: "none",
    "& .icon": {
      display: "flex",
      justifyContent: "center",
    },
    "& .message": {
      lineHeight: 1.3,
      fontSize: 19,
    },
    "& .sub": {
      paddingTop: 10,
    },
    "& div.content ": {
      padding: theme.spacing(1, 2, 4),
      "& > .mainHeading": {
        fontWeight: 600,
      },
    },
    "&  div.wrapper": {
      display: "inline-block",
    },

    "& button.MuiButtonBase-root": {
      maxWidth: 300,
      display: "flex",
      margin: "auto",
    },

    "& div.iconContainer": {
      display: "inline-block",
      paddingBottom: 10,
    },
  },
  arrowStyle: {
    fontSize: 20,
  },

  error: {
    backgroundColor: alpha("#ce1126", 0.04),
    color: "#ce1126",
    fontSize: 16,
  },
}));
