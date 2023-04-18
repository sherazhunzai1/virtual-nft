import React from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { CURRENCY } from "../../utils/helper";

const CardArtDetails = ({ title = "Current bid", price = 0 }) => {
  const classes = useStyles();

  return (
    <div className={classes.cardFooter}>
      <Typography className={classes.heading}>{title}</Typography>
      <Typography className={classes.heading}>
        {price}&nbsp;{CURRENCY}
      </Typography>
    </div>
  );
};

export default CardArtDetails;
