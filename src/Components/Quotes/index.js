import { makeStyles } from "@material-ui/core";
import QuoteData from "../../Units/Quotes";

const Quotes = (props) => {
  const { content } = props;
  const classes = useStyles();
  return (
    <>
      {content.map((item, index) => {
        return (
          <div className={classes.quotes}>
            <QuoteData item={item} index={index} />
          </div>
        );
      })}
    </>
  );
};

const useStyles = makeStyles(() => ({
  quotes: {
    display: "flex",
    justifyContent: "flex-start",
  },
}));
export default Quotes;
