import { TextField } from "@material-ui/core";

const InputField = (props) => {
  return <TextField color="primary" fullWidth={props.fullWidth} {...props} />;
};

export default InputField;
