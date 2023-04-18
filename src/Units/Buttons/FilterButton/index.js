import { useStyles } from "./styles";
import cn from "classnames";

const FilterButton = (props) => {
  const classes = useStyles();
  const { className, title } = props;
  return (
    <div className={classes.root}>
      <button className={cn(classes.FilterButton, className)} {...props}>
        {title}
      </button>
    </div>
  );
};

export default FilterButton;
