import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";
import Logo from "../../Assets/PNGs/logo.png";
import FooterSearch from "../../Units/SearchBar/FooterSearch";
import Typography from "@material-ui/core/Typography";
import boaxLogo from "../../Assets/PNGs/boaxicon.png";
const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.footerRoot}>
      <Grid item lg={3} md={4} sm={6} xs={12} className={classes.footerBrand}>
        <img src={Logo} alt="" className={classes.brandImg} />
        <p>&copy; Copyright 2022 </p>
      </Grid>
      <Grid item lg={4} md={4} sm={6} xs={12} className={classes.footerLinks}>
        <Link to="/help" className={classes.linkWrap}>
          Help Center
        </Link>
        {/* <Link path="/" className={classes.linkWrap}>
          Contact Us
        </Link> */}
        <Link to="/terms" className={classes.linkWrap}>
          Terms and Conditions
        </Link>
        {/* <Link path="/" className={classes.linkWrap}>
          Support
        </Link> */}
      </Grid>
      <Grid item lg={2} md={4} sm={6} xs={12} className={classes.footerSocial}>
        <a
          href="https://instagram.com/krama.nft"
          target="_blank"
          className={classes.socialLink}
        >
          <InstagramIcon className={classes.icon} />
        </a>
        {/* <a
          href="https://t.me/kramaNFT"
          target="_blank"
          className={classes.socialLink}
          rel="noreferrer"
        >
          <TelegramIcon className={classes.icon} />
        </a> */}
        <a
          href="https://discord.gg/XqVNrxgUUD"
          target="_blank"
          className={classes.socialLink}
          rel="noreferrer"
        >
          <img
            className={classes.icon}
            src="https://img.icons8.com/ios-filled/72/discord-logo.svg"
            alt=""
          />
        </a>
        {/* <a
          href="https://www.linkedin.com/company/kramanft "
          target="_blank"
          className={classes.socialLink}
          rel="noreferrer"
        >
          <LinkedInIcon className={classes.icon} />
        </a> */}
        <a
          href=" https://twitter.com/KramaNFT"
          target="_blank"
          className={classes.socialLink}
        >
          <TwitterIcon className={classes.icon} />
        </a>
        <a
          href="https://facebook.com/krama.nft"
          target="_blank"
          className={classes.socialLink}
          rel="noreferrer"
        >
          <FacebookIcon className={classes.icon} />
        </a>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12} className={classes.footerSearch}>
        <FooterSearch />
      </Grid>
    </Grid>
  );
};
const useStyles = makeStyles((theme) => ({
  footerRoot: {
    padding: "10px 40px 0px 40px",
    borderTop: "1px solid #E6E8EC",
    marginTop: 100,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  footerBrand: {
    "& p": {
      fontFamily: "Lato, sans-serif",
      fontWeight: "900",
      fontSize: "14px",
    },
  },
  footerLinks: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    padding: "20px 0px",
  },
  footerSocial: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    padding: "20px 0px",
  },
  footerSearch: {
    padding: "20px 20px 14px 20px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    "& p": {
      fontFamily: "Lato, sans-serif",
      fontWeight: "900",
      fontSize: "14px",
      textAlign: "end",
    },
    "& .boaxlogo": {
      width: "15px",
      position: "relative",
      top: "2px",
    },
  },
  linkWrap: {
    color: "black",
    width: "50%",
    fontFamily: "tajawal,sans-serif",
    fontWeight: "700",
    fontSize: "18px",
    textDecoration: "none",
    "&:hover": {
      color: "black",
      textDecoration: "none",
    },
  },
  socialLink: {
    color: "black",
    width: "33%",
    "&:hover": {
      color: "black",
    },
  },
  icon: {
    width: "30px",
    height: "25px",
  },
  brandImg: {
    position: "relative",
    right: "23px",
    maxWidth: "100%",
  },
}));
export default Footer;
