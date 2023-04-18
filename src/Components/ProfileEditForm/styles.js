import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  inputsContainer: {
    paddingBottom: "50px",
  },
  submit: {
    borderTop: "1px solid #e6e8ec",
    padding: "20px 0px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    "& a": {
      display: "flex",
      alignItems: "center",
      color: "#777E91",
      textDecoration: "none",
      paddingLeft: "20px",
      fontWeight: "700",
      width: "100%",
    },
  },
  clearButton: {
    borderRadius: 15,
    height: "100%",
  },

  bio: {
    "& .MuiInputBase-root": {
      paddingBottom: 27,
    },
  },
  title: {
    fontWeight: 700,
    userSelect: "none",
  },
  message: {
    fontFamily: "Tajawal, sans-serif",
  },
  error: {
    color: "red",
  },
  success: {
    color: "green",
  },
}));
