import { TextField } from "@material-ui/core";
import cn from "classnames";
import { useStyles } from "./styles";
const RegisterInput = (props) => {
  const classes = useStyles();
  const { className } = props;
  const fieldClasses = cn(classes.input, { [className]: Boolean(className) });
  return (
    <>
      <TextField {...props} className={fieldClasses} />
    </>
  );
};

export default RegisterInput;
