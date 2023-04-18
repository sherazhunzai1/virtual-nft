import Loading from "../Loading";
import { useStyles } from "./styles";
const LoaderContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.loaderContainer}>
      <Loading />
    </div>
  );
};

export default LoaderContainer;
