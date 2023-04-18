import { alpha, Link, makeStyles } from "@material-ui/core";

const BuyButton = ({ href }) => {
  const classes = useStyles();
  return (
    <Link
      className={classes.headerBtn}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      Buy
    </Link>
  );
};

const useStyles = makeStyles((theme) => ({
  headerBtn: {
    backgroundColor: "#2776EE",
    marginRight: 25,
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)",
    color: theme.palette.primary.main,
    borderRadius: "50px",
    padding: "13px 30px",
    textTransform: "capitalize",
    fontSize: 16,
    transition: "all 300ms cubic-bezier(0.23, 1, 0.32, 1) 0s",

    "&:hover": {
      textDecoration: "none",

      backgroundColor: alpha("#2776EE", 0.9),
      boxShadow: "5px 2px 10px 0px #2776ee99",
      transform: "translateY(-1px)",
    },
  },
}));

export default BuyButton;
