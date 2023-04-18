import { Button, makeStyles } from "@material-ui/core";

import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingButton = (props) => {
  const classes = useStyles();
  return (
    <Button className={classes.roundBtn}>
      <CircularProgress
        size={10}
        classname={classes.progress}
        color="secondary"
        variant="indeterminate"
      />
    </Button>
  );
};

const useStyles = makeStyles((theme) => ({
  roundBtn: {
    borderRadius: "100%",
    padding: "15px",
  },
  progress: { position: "relative", top: "-10px" },
}));
export default LoadingButton;
