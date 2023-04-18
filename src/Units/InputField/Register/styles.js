import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  input: {
    width: "100%",

    "& .MuiFormLabel-root": {
      fontFamily: "Lato, sans-serif",
      fontSize: 16,
      fontWeight: "bold",
    },
    "& .MuiInputBase-input": {
      fontFamily: "Lato, sans-serif",
    },
  },
}));
