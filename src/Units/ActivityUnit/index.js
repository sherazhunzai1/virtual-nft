import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Paper, Typography } from "@material-ui/core";
import { GoToIcon } from "../Svg";
import { useStyles } from "./styles";
import {
  fetchUserActivity,
  withdrawAuctionBid,
} from "../../Redux/Actions/artistProfile.actions";
import { formateDate } from "../../Utilites";
import Loading from "../Loading";
import { CURRENCY } from "../../utils/helper";

const Activity = ({ username }) => {
  const classes = useStyles();
  const {
    Auth: {
      user: { username: activeUser },
    },
    ArtistProfile: { isActivityLoading, activities },

    Web3Instance: { validNetworkName: chainName },
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserActivity(username));
  }, [username, dispatch]);

  return (
    <div className={classes.grid}>
      {isActivityLoading ? (
        <Loading />
      ) : (
        activities.map(
          (
            {
              transactionType,
              ArtTitle,
              transactionAmount,
              transactionHash,
              date,
              result,
              auctionId,
            },
            key
          ) => (
            <History
              key={key}
              eventType={transactionType}
              artName={ArtTitle}
              priceInETH={transactionAmount}
              txHash={transactionHash}
              chainName={chainName}
              showButton={
                activeUser &&
                username &&
                String(activeUser).toLocaleLowerCase() ===
                  String(username).toLocaleLowerCase()
              }
              date={date}
              result={result}
              username={username}
              auctionId={auctionId}
            />
          )
        )
      )}
    </div>
  );
};

const History = ({
  chainName,
  artName,
  priceInETH,
  eventType,
  txHash,
  date,
  result,
  showButton,
  username,
  auctionId,
}) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleWithdrawBid = () =>
    dispatch(withdrawAuctionBid({ txHash, username, auctionId }));
  return (
    <Paper className={classes.root} elevation={1}>
      <div className={classes.flex}>
        <div>
          <Typography className={classes.action}>{eventType}</Typography>
          <Typography className={classes.username}>{artName}</Typography>
        </div>
      </div>

      <div className={classes.right}>
        <div className={classes.flex}>
          <Typography className={classes.heading}>Amount:</Typography>
          <Typography className={classes.subHeading}>
            {priceInETH}&nbsp;{CURRENCY}
          </Typography>
        </div>
        <div className={classes.flex}>
          <Typography className={classes.heading}>Date</Typography>
          <Typography className={classes.subHeading}>
            At&nbsp;{formateDate(date)}
          </Typography>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <a
          href={`https://${chainName}polygonscan.com/tx/${txHash}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoToIcon />
        </a>
        {showButton &&
          Boolean(result) &&
          String(result).toLocaleLowerCase() !== "won" && (
            <div>
              {String(result).toLocaleLowerCase() === "pending" ? (
                <Typography>Auction is in pending</Typography>
              ) : (
                <Button
                  onClick={handleWithdrawBid}
                  variant="outlined"
                  className={classes.button}
                >
                  Refund Bid
                </Button>
              )}
            </div>
          )}
      </div>
    </Paper>
  );
};

export default Activity;
