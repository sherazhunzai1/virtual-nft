import { IconButton, makeStyles, Paper } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import cn from "classnames";

const ShareButton = (props) => {
  const classes = useStyles();
  const { className } = props;
  return (
    <IconButton className={cn(classes.button, className)} {...props}>
      <Paper elevation={3} className={classes.paper}>
        <ShareIcon />
      </Paper>
    </IconButton>
  );
};

const useStyles = makeStyles((theme) => ({
  button: {
    "&:hover": {
      backgroundColor: "white",
      "& $paper": {
        backgroundColor: "white",
        transform: "translateY(-4px)",
      },
    },
  },
  paper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    height: 30,
    minWidth: 50,
    padding: "5px 20px",
    boxShadow: "0px 1px 7px 2px #afafaf78",
    transition: "250ms",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      padding: "3px 0px",
    },
  },
}));

export default ShareButton;
