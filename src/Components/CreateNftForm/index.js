import React from "react";
import InputField from "../../Units/InputField";
import Switches from "../../Units/Switches";
import { Checkbox } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";

const CreateNftForm = React.memo(function Form({
  formik,
  switchesState: { sale, isAuction, isFixPrice },
  setSwitches,
}) {
  const classes = useStyles();

  const handleSetSale = () => {
    if (!sale)
      setSwitches((p) => ({
        ...p,
        sale: true,
      }));
    else
      setSwitches((p) => ({
        ...p,
        sale: false,
      }));
  };
  const toggleSwitches = () => {
    setSwitches((p) => ({
      ...p,
      isFixPrice: p.isAuction ? true : false,
      isAuction: p.isAuction ? false : true,
    }));
  };

  const switchData = [
    {
      title: "Put on auction",
      phrase: "",
      checked: isAuction,
      setChecked: toggleSwitches,
    },

    {
      title: "Fixed price",
      phrase: "",
      checked: isFixPrice,
      setChecked: toggleSwitches,
    },
  ];

  return (
    <div className={classes.cNForm}>
      <p style={{ marginBottom: 0, marginTop: 30 }}>NFT Details</p>
      <InputField
        margin="normal"
        variant="outlined"
        placeholder="NFT Name"
        type="text"
        name="title"
        fullWidth
        value={formik.values.title}
        helperText={formik.touched.title && formik.errors.title}
        error={formik.touched.title && Boolean(formik.errors.title)}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <InputField
        variant="outlined"
        placeholder="Description"
        name="description"
        type="text"
        fullWidth
        rows="3"
        multiline
        value={formik.values.description}
        helperText={formik.touched.description && formik.errors.description}
        error={formik.touched.description && Boolean(formik.errors.description)}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Switches
        title={"Put on sale"}
        phrase={"You’ll receive bids on this item"}
        checked={sale}
        setChecked={handleSetSale}
      />
      {sale && (
        <>
          <div>
            {switchData.map((item, index) => {
              return (
                <Switches
                  key={index}
                  title={item.title}
                  phrase={item.phrase}
                  checked={item.checked}
                  setChecked={item.setChecked}
                />
              );
            })}
          </div>

          {isAuction && (
            <div>
              <div>
                <p className={classes.inputLabel}>Place on Auction For:</p>
                <div className={classes.auctionTimeInputs}>
                  <div>
                    <InputField
                      name="days"
                      placeholder="Days"
                      type="number"
                      variant="outlined"
                      label="Days"
                      className={classes.auctionTimeInput}
                      value={formik.values.days}
                      helperText={formik.touched.days && formik.errors.days}
                      error={formik.touched.days && Boolean(formik.errors.days)}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div>
                    <InputField
                      name="hours"
                      placeholder="Hours"
                      type="number"
                      variant="outlined"
                      label="Hours"
                      className={classes.auctionTimeInput}
                      value={formik.values.hours}
                      helperText={formik.touched.hours && formik.errors.hours}
                      error={
                        formik.touched.hours && Boolean(formik.errors.hours)
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className={classes.inputLabel}>Starting Bid in ETH</p>
                <InputField
                  className={classes.inputField}
                  placeholder="Starting Bid"
                  type="number"
                  margin="normal"
                  variant="outlined"
                  name="startingBid"
                  value={formik.values.startingBid}
                  helperText={
                    formik.touched.startingBid && formik.errors.startingBid
                  }
                  error={
                    formik.touched.startingBid &&
                    Boolean(formik.errors.startingBid)
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
          )}

          {isFixPrice && (
            <div>
              <p className={classes.inputLabel}>Fix Price in ETH</p>
              <InputField
                className={classes.inputField}
                placeholder="Price"
                type="number"
                margin="normal"
                variant="outlined"
                name="fixPrice"
                value={formik.values.fixPrice}
                helperText={formik.touched.fixPrice && formik.errors.fixPrice}
                error={
                  formik.touched.fixPrice && Boolean(formik.errors.fixPrice)
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          )}
        </>
      )}
      <div>
        <div className={classes.agreement}>
          <Checkbox
            color="primary"
            name="accpetTerms"
            checked={formik.values.accpetTerms}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <p>
            I agree to the&nbsp;
            <Link to="/terms" className={classes.termLink}>
              Terms and Conditions
            </Link>
          </p>
        </div>
        {formik.touched.accpetTerms && Boolean(formik.errors.accpetTerms) && (
          <p className={classes.errorMessage}>
            {formik.touched.accpetTerms && formik.errors.accpetTerms}
          </p>
        )}
      </div>
    </div>
  );
});

export default CreateNftForm;
