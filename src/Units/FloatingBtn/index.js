import { Fab, makeStyles } from "@material-ui/core";
import Svg from "../Svg";

const FabBtn = ({ setFilterOn }) => {
  const classes = useStyles();
  return (
    <Fab className={classes.fab} onClick={() => setFilterOn(true)}>
      <Svg fill="white" height="25px" width="25px" />
    </Fab>
  );
};

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: "0",
    right: "0",
    margin: "0px 20px 20px 0px",
    zIndex: "500",
    background: "#0A1A72",
    color: "white",
    display: "grid",
    placeContent: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    "&:hover": {
      background: "#0A1A72",
      color: "white",
    },
  },
}));
export default FabBtn;
