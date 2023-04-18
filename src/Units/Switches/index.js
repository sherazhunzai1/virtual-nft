import { IOSSwitch } from "./switch";
import { useStyles } from "./styles";
const Switches = (props) => {
  const classes = useStyles();
  const { title, phrase, checked, setChecked, disabled } = props;
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <div
        className={`${classes.switchMain} ${
          title === "none" ? classes.displayNone : null
        }`}
      >
        <div className={classes.switchWrap}>
          <p className={classes.title}>{title}</p>
          <IOSSwitch
            color="primary"
            checked={checked}
            onChange={(event) => handleChange(event)}
            disabled={disabled}
          />
        </div>
        <p className={classes.phrase}>{phrase}</p>
      </div>
    </>
  );
};

export default Switches;
