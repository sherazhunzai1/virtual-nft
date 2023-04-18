import React from "react";
import { Box, IconButton, Modal } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import { useStyles } from "./styles";
import { FilterOptions } from "../FilterOptions";

const FilterMobile = ({ filterOn, setFilterOn }) => {
  const classes = useStyles();

  return (
    <Modal
      open={filterOn}
      onBackdropClick={() => setFilterOn(false)}
      disablePortal
    >
      <Box className={classes.root}>
        <IconButton onClick={() => setFilterOn(false)}>
          <CancelIcon className={classes.crossIcon} />
        </IconButton>

        <FilterOptions />
      </Box>
    </Modal>
  );
};

export default FilterMobile;
