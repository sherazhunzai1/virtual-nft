import { alpha, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    "&  *": {
      fontFamily: "Poppins, sans-serif",
      userSelect: "none",
    },
    padding: theme.spacing(5, 5),
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },

    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: theme.spacing(10),

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
      gap: theme.spacing(5),
    },
  },

  innerContainer: {
    paddingTop: 20,
  },

  heading: {
    marginBottom: theme.spacing(1),
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },

  imageRoot: {
    boxSizing: "border-box",
    maxWidth: 400,
    width: "100%",
    padding: "20px 15px",
    margin: "auto",
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    paddingTop: 10,
  },
  description: {
    boxSizing: "border-box",
    padding: "1px 0 20px",
    fontSize: 20,
  },
  subHeading: {
    boxSizing: "border-box",
    padding: "20px 0 0",
    fontSize: 20,
  },
  cardMedia: {
    position: "relative",
    "& .outer": {
      boxSizing: "border-box",
      margin: 0,
      minWidth: 0,
      width: "100%",
      height: 0,
      paddingBottom: "100%",
    },
    "& .media__container": {
      margin: 0,
      minWidth: 0,
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "& .media": {
      display: "block",
      objectFit: "cover",
      width: " 100%",
      height: "100%",
      borderRadius: 15,
    },
  },
  errorOuter: {
    width: "70%",

    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  bidInputContainer: {
    position: "relative",
    width: "70%",
    display: "flex",
    alignItems: "center",
    border: "1px solid #0A1A72",
    borderRadius: "4px",
    "& h5": {
      fontWeight: 600,
      color: "#fff",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "4px 0 0 4px",
    },
    "& .MuiOutlinedInput-input": {
      padding: "15px 0 15px 10px",
    },
    "& input": {
      fontSize: "22px",
    },
    "& .MuiFormHelperText-contained": {
      position: "absolute",
      bottom: "-20px",
      margin: 0,
    },

    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  ethContainer: {
    background: "#0A1A72",
    height: "56px",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 2),
  },
  ethImage: {
    width: 35,
    height: 35,
    padding: theme.spacing(0, 0, 0, 0.5),
  },
  balanceContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 10px",
    background: "#e3e3e3",
    borderRadius: 4,
  },
  balanceWrapper: {
    padding: "30px 0",
    width: "70%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  balanceTitle: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#878787",
  },
  balance: {
    fontSize: "18px",
    fontWeight: 700,
  },
  wrapper: {
    display: "grid",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0A1A72",
    borderRadius: 4,
    color: "#FFFFFF",
    minWidth: 100,
    maxWidth: 200,
    width: "100%",
    margin: "auto",
    padding: "5px 25px",
    "&:hover": {
      backgroundColor: alpha("#0A1A72", 0.8),
    },
    "&:disabled": {
      color: "#FFFFFF",
      backgroundColor: alpha("#0A1A72", 0.7),
    },
  },
  buttonContainer: {
    display: "grid",
    justifyContent: "flex-start",
    gridTemplateColumns: "1fr",
    width: "70%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  warningContainer: {
    padding: "20px 0 30px 0",
  },
  creatorContainer: {
    "& > div": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("xs")]: {
        alignItems: "flex-start",
      },
    },
  },
  priceContainer: {
    padding: "0 40px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  price: {
    fontSize: "28px",
    fontWeight: 600,
  },
}));
export const buttonStyles = makeStyles((theme) => ({
  styles: {
    width: "70%",
  },
}));
