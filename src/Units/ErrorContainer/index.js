import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";

import WarningIcon from "@material-ui/icons/Warning";
const ErrorContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.errorWrapper}>
      <WarningIcon />
      <Typography className={classes.message}>{children}</Typography>
    </div>
  );
};

export default ErrorContainer;
