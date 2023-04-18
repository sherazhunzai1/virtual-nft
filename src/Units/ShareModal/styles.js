import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  container: {
    padding: "10px 10px",
    display: "grid",
    gridTemplateColumns: "1fr",
    justifyContent: "center",
    position: "relative",
  },
  shareButtons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "20px 0",
    "& svg": {
      width: 50,
      height: 50,
      padding: 10,
    },
    "& .MuiIconButton-root": {
      padding: 0,
    },
  },
  headingWrapper: {
    textAlign: "center",
  },
  heading: {
    fontWeight: 700,
  },
  cancelContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
  },
  cancelButton: {
    background: "transparent",
    border: "none",
    position: "absolute",
    "&:hover": {
      outline: "none",
    },
    "& svg": {
      cursor: "pointer",
    },
  },
  iconButton: {
    display: "flex",
    flexDirection: "column",
  },
}));
