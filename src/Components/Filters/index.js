import { useStyles } from "./styles";
import { FilterOptions } from "./FilterOptions";

const Filters = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FilterOptions />
    </div>
  );
};

export default Filters;
