import { Divider, Grid, Paper } from "@material-ui/core";
import PriceComponent from "../../PriceComponent";
import TimerComponent from "../../TimerComponent";
import { useStyles, buttonStyles } from "./styles";
import PrimaryButton from "../../Buttons/PrimaryButton";

const AuctionDetails = ({
  title,
  auctionEndTime = 0,
  priceInETH = 0,
  priceInCurrency = 0,
  onPlaceBidHander = () => {},
  ownerUsername,
  ownerImage,
  onButtonClick,
  hideButton = false,
  buttonTtitle,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paperPadding}>
      <div className={classes.grid}>
        <div>
          <PriceComponent title={title} priceInETH={priceInETH} />
        </div>
        <div>
          <TimerComponent
            time={auctionEndTime}
            isUpdating={false}
            ownerUsername={ownerUsername}
            ownerImage={ownerImage}
          />
        </div>
      </div>

      {!hideButton && (
        <>
          <Divider className={classes.divider} />
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <PrimaryButton
                primary
                lg
                title={buttonTtitle}
                onClick={onButtonClick}
                Stylings={buttonStyles}
              />
            </Grid>
          </Grid>
        </>
      )}
    </Paper>
  );
};

export default AuctionDetails;
