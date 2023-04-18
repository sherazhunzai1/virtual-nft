import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  displayNone: {
    display: "none",
  },
  titlePaddingLeft: {
    display: "flex",
    paddingTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },

  timerContainer: {
    fontFamily: "tajawal, sans-serif ",
    justifyContent: "space-evenly",
    display: "flex",
  },

  end_heading: {
    color: "#fff",
    fontFamily: "'Tajawal', sans-serif",
    margin: 0,
    fontSize: 20,
    fontWeight: 500,
  },

  timerText: {
    padding: theme.spacing(0, 1),
  },
  seconds: {
    paddingRight: 0,
  },
  subHeading: {
    paddingTop: 14,
  },

  innerContainer: {
    userSelect: "none",
    display: "flex",
    "& .timerText": {
      fontFamily: '"lato", sans-serif ',
      fontSize: 30,
      fontWeight: 900,
      paddingRight: theme.spacing(1.5),

      [theme.breakpoints.down("xs")]: {
        fontSize: 20,
      },
    },
  },

  auctionTitle: {
    [theme.breakpoints.down("xs")]: {
      paddingTop: 10,
    },
    fontSize: 24,
    fontFamily: '"lato", sans-serif',
  },

  item: {
    fontFamily: '"lato", sans-serif',
    fontSize: 30,
    fontWeight: 900,
  },
}));
