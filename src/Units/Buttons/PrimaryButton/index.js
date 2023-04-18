import { Button as Btn, makeStyles } from "@material-ui/core";

import cn from "classnames";

const Button = ({
  primary,
  secondary,
  rounded,
  borderSec,
  borderPri,
  inputBtn,
  xs,
  sm,
  md,
  lg,
  iconSize,
  acceptChild,
  children,
  disabled,
  outlined,
  iconStart,
  iconEnd,
  styles,
  title,
  onClick = () => {},
  className,
  type = "button",
}) => {
  const classes = useStyles();

  const activeClasses = cn(
    className,
    classes.default,
    { [classes.lg]: !sm && !xs && !md }, // default size
    { [classes.xs]: xs },
    { [classes.sm]: sm },
    { [classes.md]: md },
    { [classes.primary]: primary || !secondary },
    { [classes.secondary]: secondary },
    { [classes.inputBtn]: inputBtn },
    { [classes.rounded]: rounded },
    { [classes.borderSec]: borderSec },
    { [classes.borderPri]: borderPri },
    { [classes.iconSize]: iconSize }
  );

  return (
    <Btn
      className={activeClasses}
      variant={outlined}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {acceptChild && children}
      {!acceptChild && title}
    </Btn>
  );
};

export default Button;

const useStyles = makeStyles((theme) => ({
  default: {
    padding: "10px 10px",
    fontFamily: "Lato, sans-serif",
    boxSizing: "border-box",
    borderRadius: "15px",
    color: theme.palette.secondary.main,
    appearance: "none",
    display: "inline-block",
    textAlign: "center",
    textTransform: "initial",
    outline: "nono",
    minHeight: "45px",
    width: "100%",
    fontSize: "0.7rem",
    transition: theme.transitions.create("all"),
  },
  primary: {
    backgroundColor: "#B7524B",
    color: "white",
    fontFamily: "Lato, sans-serif",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#B7524B",
      boxShadow: "0px 8px 15px rgba(0,0,0,0.25)",
      transform: "translateY(-3px)",
    },
  },
  secondary: {
    backgroundColor: "#231F20",
    color: "white",
    fontFamily: "Lato, sans-serif",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#231F20",
      boxShadow: "0px 8px 15px rgba(0,0,0,0.25)",
      transform: "translateY(-3px)",
    },
  },
  inputBtn: {
    backgroundColor: "white",
    color: "black",
    fontFamily: "Lato, sans-serif",
    fontWeight: "bold",
    border: "1px solid #c4c4c4",
    "&:hover": {
      backgroundColor: "white !important",
      color: "black !important",
    },
  },
  rounded: {
    fontSize: "18px",
    borderRadius: "999px",
  },
  // sizes of button
  xs: {
    width: "25%",
  },
  sm: {
    width: "33.33%",
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
  },
  md: {
    width: "66.66%",
  },
  lg: {
    width: "100%",
  },
  iconSize: {
    width: "5%",
  },
  iconStart: {
    position: "absolute",
    left: "15px",
    width: "25px",
    height: "25px",
  },
  iconEnd: {
    position: "absolute",
    right: "15px",
    width: "25px",
    height: "25px",
  },
  borderPri: {
    fontWeight: "bold",
    background: "white",
    border: "1px solid #B7524B",
    color: "#B7524B",
    fontFamily: "Lato, sans-serif",
    "&:hover": {
      background: "#B7524B",
      border: "1px solid #B7524B",
      color: "white",
    },
  },
  borderSec: {
    fontWeight: "bold",
    background: "white",
    border: "1px solid #231F20",
    color: "#231F20",
    fontFamily: "Lato, sans-serif",
    "&:hover": {
      background: "#231F20",
      border: "1px solid #231F20",
      color: "white",
    },
  },
  bars: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));
