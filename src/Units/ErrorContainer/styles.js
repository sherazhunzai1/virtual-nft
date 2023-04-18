import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  errorWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f44336",
    color: "white",
    padding: "5px 0px ",
    width: "100%",
  },
  message: {
    marginLeft: 10,
  },
}));
