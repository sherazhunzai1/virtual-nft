import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  carousel: {
    "& .rec-arrow": {
      minWidth: 20,
      width: 30,
      height: 30,
      lineHeight: 0,
      backgroundColor: "white",
      color: "#231F20",
      border: "1px solid #231F20",
      cursor: "pointer",
      "&:hover:enabled ": {
        backgroundColor: "#231F20",
        color: "white",
      },
      "&:focus:enabled": {
        backgroundColor: "#231F20",
        color: "white",
      },
    },
    "& .rec-pagination": {
      display: "none",
    },
  },
}));
