import { makeStyles } from "@material-ui/core";
import cn from "classnames";

const CardsGrid = ({ className, style, children }) => {
  const classes = makeStyles((theme) => ({
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: theme.spacing(2),

      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(3, 1fr)",
      },

      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
      [theme.breakpoints.down("xs")]: {
        gridTemplateColumns: "1fr",
      },
    },
  }))();
  return (
    <div
      className={cn(classes.grid, { [className]: Boolean(className) })}
      style={style}
    >
      {children}
    </div>
  );
};

export default CardsGrid;
