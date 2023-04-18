import {
  Button,
  Dialog,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import cn from "classnames";

const PopupModal = ({
  className,
  open,
  head,
  children,
  buttonTitle,
  hideButton = false,
  onClose = () => {},
  onClick = () => {},
  onExited = () => {},
}) => {
  const classes = useStyles();
  return (
    <Dialog
      fullWidth={true}
      open={open}
      className={cn(classes.root, className)}
      TransitionProps={{
        onExited,
      }}
    >
      <div className="wrapper">
        <div className="mainHeading">
          <Typography variant="h6" className={classes.head}>
            {head}
          </Typography>
          <div className="icon">
            <IconButton onClick={onClose}>
              <CancelIcon />
            </IconButton>
          </div>
        </div>
        <div className="content">{children}</div>
        {!hideButton && (
          <Button className="button" onClick={onClick}>
            {buttonTitle}
          </Button>
        )}
      </div>
    </Dialog>
  );
};

export default PopupModal;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      fontFamily: "'Poppins', sans-serif",
    },
    boxSizing: "border-box",
    userSelect: "none",
    "& .MuiPaper-root": {
      width: 500,
    },

    "& .wrapper": {
      boxSizing: "border-box",
      padding: 20,

      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      width: "100%",
      textAlign: "center",
    },

    "& .content": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: 20,
      paddingBottom: 20,
    },

    "& .mainHeading": {
      position: "relative",
      width: "100%",
      borderBottom: "1px solid #eaeaea",
      textAlign: "center",
    },
    "& .icon": {
      position: "absolute",
      right: -5,
      top: -15,
    },

    "& .button": {
      backgroundColor: "#0A1A72",
      borderRadius: 15,
      color: "#FFFFFF",
      minWidth: 100,
      fontFamily: "Tajawal,sans-serif",
      fontWeight: "700",
      maxWidth: 200,
      width: "100%",
      margin: "auto",
    },
  },
  head: {
    fontFamily: "Tajawal, sans-serif",
    fontSize: 24,
    fontWeight: 700,
  },
}));
