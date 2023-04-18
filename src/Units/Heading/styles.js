import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  dot: {
    height: "8px",
    width: "8px",
    borderRadius: "50%",
    background: "#a9a9a9",
    marginRight: theme.spacing(1.5),
    marginLeft: theme.spacing(1.5),
  },
  headRoot: {
    width: "100%",
  },
  headInner: {
    display: "flex",
    alignItems: "center",
    // textTransform: "uppercase",
    color: "#B7524B",
  },
}));
