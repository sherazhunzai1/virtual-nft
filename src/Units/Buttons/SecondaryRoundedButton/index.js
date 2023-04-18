import { Button } from "@material-ui/core";
import { useStyles } from "./styles";
const SecondaryRoundedButton = (props) => {
  const {
    onClickHandler = () => {},
    Stylings = () => ({
      style: {},
    }),
    type,
    isPrimary,
  } = props;
  const classes = useStyles();
  const customClasses = Stylings();
  return (
    <Button
      onClick={onClickHandler}
      className={`${classes.secondary} ${customClasses.style} ${
        isPrimary && classes.primary
      }`}
      type={type}
    >
      {/* trim if any leading and ending commas */}
      {String(props.children).replace(/(^\s*,)|(,\s*$)/g, "")}
    </Button>
  );
};

export default SecondaryRoundedButton;
