import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "10px",
    width: "100%",
  },
}));

const AvatarButton = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={props.avatar}
        endIcon={props.avatar2}
      >
        {String(props.children).replace(/(^\s*,)|(,\s*$)/g, "")}
      </Button>
    </div>
  );
};
export default AvatarButton;
