import { CircularProgress } from "@material-ui/core";
import { useStyles } from "./styles";

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.loader}>
      <CircularProgress className={classes.root} sizes={40} />
    </div>
  );
};

export default Loading;
