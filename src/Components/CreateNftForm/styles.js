import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  cNForm: {
    fontFamily: "Poppins, sans-serif",
    "& .MuiInputLabel-outlined": {
      fontFamily: "Poppins, sans-serif",
    },
    "& p": {
      fontSize: "16px",
      fontWeight: "500",
    },

    "& .MuiFormHelperText-contained": {
      marginLeft: 0,
      fontSize: 14,
    },
  },
  selectMain: {
    width: "60%",
    marginTop: 8,
    height: "40px",
    border: "1px solid #c4c4c4",
    borderRadius: "5px",
    fontSize: "14px",
    fontWeight: "500",
    padding: "0px 16px",
    cursor: "pointer",
    color: "#747474",
    marginLeft: "10px",
    "&:focus": {
      outline: "none",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  quantity: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  royalty: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1ch",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  agreement: {
    display: "flex",
    alignItems: "center",
    paddingTop: 40,
  },
  termLink: {
    textDecoration: "none",
    color: "#3772FF",
  },
  btnWrap: {
    paddingTop: 30,

    width: "25%",
    [theme.breakpoints.down("md")]: {
      width: "35%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "60%",
    },
  },
  selectWrap: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "space-between",
    },
  },
  inputLabel: {
    margin: "10px 0 0",
    "& .MuiInputBase-input": {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 12,
    },
  },

  inputField: {
    marginTop: 5,
  },
  errorMessage: {
    color: "red",
    marginTop: 0,
  },

  auctionTimeInputs: {
    marginTop: 10,
    display: "flex",
    "& > div:first-child": {
      paddingRight: 10,
    },

    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap",
      "& > div:first-child": {
        marginBottom: 10,
      },
    },
  },

  auctionTimeInput: {
    maxWidth: 90,
    "& .MuiInputBase-input": {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 12,
    },
  },
}));
