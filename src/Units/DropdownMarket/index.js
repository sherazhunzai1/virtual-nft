import { useStyles } from "./styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useState } from "react";

const MarketDrop = (props) => {
  const { label, options } = props.item;
  const classes = useStyles();
  const [isClicked, setIsClicked] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const handleOptClick = (selectedOpt) => {
    setSelected(selectedOpt);
    setIsClicked(false);
  };
  return (
    <div className={classes.dropRoot}>
      <label>{label}</label>
      <button
        className={classes.dropbtn}
        onClick={() => setIsClicked(!isClicked)}
      >
        <p>{selected}</p>
        <div className={classes.chevron}>
          <ExpandMoreIcon
            className={isClicked ? classes.rotate : classes.show}
          />
        </div>
      </button>
      <div className={isClicked ? classes.dropOpt : classes.hide}>
        {options.map((item, i) => {
          return (
            <p key={i} onClick={() => handleOptClick(item)}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default MarketDrop;
