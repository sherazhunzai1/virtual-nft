import { useEffect, useRef, useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { makeStyles } from "@material-ui/core";

const MarketDropSec = ({
  item: { label, options },
  selectedOption = "",
  handleSelectOptionChange = () => {},
}) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef();
  useEffect(() => {
    const bodyClick = (e) => {
      if (ref.current && ref.current.contains(e.target)) return;
      setIsOpen(false);
    };

    document.body.addEventListener("click", bodyClick);
    return () => {
      document.body.removeEventListener("click", bodyClick);
    };
  }, []);

  const handleOptClick = (e, option) => {
    e.stopPropagation();
    handleSelectOptionChange(option);

    setIsOpen(false);
  };

  return (
    <div className={classes.dropRoot} ref={ref}>
      <button className={classes.dropbtn} onClick={() => setIsOpen(true)}>
        <p>{selectedOption || label}</p>
        <ArrowDropDownIcon className={isOpen ? classes.rotate : classes.show} />
        <div className={isOpen ? classes.dropOpt : classes.hide}>
          {options.map((option, i) => (
            <p key={i} onClick={(e) => handleOptClick(e, option)}>
              {option}
            </p>
          ))}
        </div>
      </button>
    </div>
  );
};

export default MarketDropSec;

const useStyles = makeStyles((theme) => ({
  dropRoot: {
    width: "100%",
    position: "relative",
    "& p": {
      margin: 0,
    },
    "& label": {
      fontSize: "12px",
      fontWeight: "700",
      color: "#B1B5C3",
    },
  },
  dropbtn: {
    display: "flex",
    background: "#231F20",
    alignItems: "center",
    justifyContent: "space-between",
    border: "2px solid #E6E8EC",
    width: "100%",
    borderRadius: "12px",
    padding: "6px",
    position: "relative",
    cursor: "pointer",
    color: "white",
    zIndex: "500",
    "& p": {
      fontSize: "14px",
      fontWeight: "500",
      color: "white",
      fontFamily: "Lato, sans-serif",
      width: "100%",
    },

    "&:focus": {
      outline: "none",
    },
  },
  hide: {
    display: "none",
    transition: "1s",
  },
  show: {
    display: "block",
    transition: ".25s",
  },
  rotate: {
    transform: "rotate(180deg)",
    transition: ".25s",
  },

  dropOpt: {
    background: "white",
    zIndex: "1",
    borderRadius: "10px",
    position: "absolute",
    border: " 1px solid #231F20",
    color: "#231F20",
    width: "100%",
    cursor: "pointer",
    left: 0,
    right: 0,
    top: 35,

    "& > p": {
      boxSizing: "border-box",
      fontSize: 16,
      color: "inherit",
      textAlign: "left",
      padding: theme.spacing(1, 2),
      "&:hover": {
        background: "#ebebeb",
      },
    },
  },
}));
