import { Box, Typography, makeStyles } from "@material-ui/core";
import euImage from "../../Assets/PNGs/EU.png";

const ESProjectai = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.imageWrapper}>
        <img src={euImage} alt="eu" className={classes.image} />
      </Box>
      <Box className={classes.textWrapper}>
        <Typography variant="h5" className={classes.typography}>
          MB „Virtualus Pašnekovas” e. konkurencingų kultūros produktų kūrybinių
          industrijų ir kultūros industrijų sektoriui kūrimas
        </Typography>
        <Typography variant="body1" className={classes.typography}>
          Projekto tikslas – Paskatinti labai mažas, mažas ir vidutines (toliau
          – MVĮ) kultūros ir kūrybinės industrijos (toliau – KKI) įmones kurti
          naujus, aukštos pridėtinės vertės, konkurencingus kultūros ir
          kūrybinio turinio ir formos produktus, investuojant į naujus
          konkurencingo skaitmeninio ir (arba) žiedinę ekonomiką skatinančio
          kultūros ir kūrybinio turinio ir formos produktus, paslaugas ar
          veiklos procesus.
        </Typography>

        <Typography variant="body1" className={classes.typography}>
          Projekto tikslas – Paskatinti labai mažas, mažas ir vidutines (toliau
          – MVĮ) kultūros ir kūrybinės industrijos (toliau – KKI) įmones kurti
          naujus, aukštos pridėtinės vertės, konkurencingus kultūros ir
          kūrybinio turinio ir formos produktus, investuojant į naujus
          konkurencingo skaitmeninio ir (arba) žiedinę ekonomiką skatinančio
          kultūros ir kūrybinio turinio ir formos produktus, paslaugas ar
          veiklos procesus. Finansuojamas iš Europos regioninės plėtros fondo.
          Finansuojama kaip Sąjungos atsako į COVID-19 pandemiją priemonė.
        </Typography>
      </Box>
    </Box>
  );
};

export default ESProjectai;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  imageWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  textWrapper: {
    display: "grid",
    gap: 24,
    padding: 10,
    width: "70%",
    placeContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  image: {
    height: "auto",
    maxWidth: "100%",
  },
  typography: {
    fontFamily: "Lato,sans-serif",
  },
}));
