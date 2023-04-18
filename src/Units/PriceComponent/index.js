import { Grid, Typography } from "@material-ui/core";
import { CURRENCY } from "../../utils/helper";
import { useStyles } from "./styles";
const PriceComponent = ({ title, priceInETH }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.priceRoot}>
      <Grid>
        <Typography className={classes.title}>{title}</Typography>
      </Grid>
      <Grid>
        <Typography className={classes.price}>
          {priceInETH}&nbsp;{CURRENCY}
        </Typography>
      </Grid>
      <Grid>
        <Typography className={classes.dollar}>
          {/* &#36;{Number(priceInCurrency).toFixed(2)} */}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PriceComponent;
