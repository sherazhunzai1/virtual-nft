import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  switchMain: {
    padding: "16px 0px",
  },
  switchWrap: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  title: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "500",
  },
  phrase: {
    margin: 0,
    fontSize: "12px !important",
    fontWeight: "400",
    color: "#777E90 ",
  },
  displayNone: {
    display: "none",
  },
}));
