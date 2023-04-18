import React from "react";
import { Checkbox, makeStyles, Slider, Typography } from "@material-ui/core";
import FilterButton from "../../Units/Buttons/FilterButton";
import { useFormik } from "formik";
import { useState } from "react";
import { filterNfts } from "../../Redux/Actions/market.actions";
import { useDispatch } from "react-redux";
import { CURRENCY } from "../../utils/helper";

export const FilterOptions = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [priceRange, setPriceRange] = useState(0.1);
  const handlePriceRange = (_, value) => {
    setPriceRange(value);
  };
  const formik = useFormik({
    initialValues: {
      listings: false,
      bidding: false,
      views: false,
      purchase: false,
    },
    onSubmit: (values) => {
      let filterValues = { ...values, price: priceRange };
      dispatch(filterNfts(filterValues));
    },
  });
  const categories = [
    { name: "listings", value: formik.values.listing },
    { name: "bids", value: formik.values.bidding },
    { name: "views", value: formik.values.views },
    { name: "purchase", value: formik.values.purchase },
  ];
  return (
    <div className={classes.root}>
      <h1>Filters</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.checks}>
          {categories.map(({ name, value }, i) => {
            return (
              <div key={i} className={classes.checksInner}>
                <Checkbox
                  color="primary"
                  onChange={formik.handleChange}
                  value={value}
                  name={name}
                />{" "}
                <Typography className={classes.checkboxHeading}>
                  {name}
                </Typography>
              </div>
            );
          })}
        </div>

        <div className={classes.range}>
          <p>Price Range</p>
          <Slider
            value={priceRange}
            min={0.1}
            max={10}
            step={0.1}
            onChange={handlePriceRange}
            valueLabelDisplay="auto"
            name="price"
          />
          <div className={classes.priceExtremes}>
            <p>0.1 {CURRENCY}</p>
            <p>10 {CURRENCY}</p>
          </div>
        </div>

        <div className={classes.filterBtns}>
          <FilterButton type="submit" title="Apply Filter" />
        </div>
      </form>
    </div>
  );
};

export const useStyles = makeStyles(() => ({
  root: {
    "& h1": {
      margin: "0",
      paddingLeft: "10px",
      fontSize: "24px",
      fontWeight: "600",
      color: "#23262F",
    },
  },
  checksInner: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: "500",
    color: "#141416",
    "& .MuiCheckbox-colorPrimary.Mui-checked ": {
      color: "#B7524B",
    },
  },

  range: {
    padding: "0px 0px 24px 10px",
    borderBottom: "1px solid #E6E8EC",
    "& .MuiSlider-root": {
      color: "#B7524B",
    },
    "& p": {
      color: "#B1B5C3",
      fontWeight: "700",
      fontSize: "12px",
    },
  },
  priceExtremes: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& p": {
      margin: 0,
      color: "#23262F",
      fontWeight: "500",
    },
  },

  filterBtns: {
    padding: "27px 0px",
  },
  checkboxHeading: {
    textTransform: "capitalize",
  },
}));
