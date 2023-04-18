import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  secondary: {
    backgroundColor: theme.palette.primary.pacebid,
    color: theme.palette.secondary.main,
    border: "2px solid" + theme.palette.secondary.main,
    fontSize: "1.15rem",
    borderRadius: "999px",
    padding: "16px 24px",
    marginTop: "30px",
    fontWeight: 600,
    textTransform: "inherit",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      boxShadow: "0px 8px 15px rgba(0,0,0,0.25)",
      transform: "translateY(-2px)",
    },
    "& .MuiButtonBase-root": {
      backgroundColor: theme.palette.primary.pacebid,
      color: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.pacebid,
        color: theme.palette.secondary.main,
      },
    },
  },
  primary: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
  },
}));
