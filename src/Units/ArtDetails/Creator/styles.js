import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    "& *": {
      fontFamily: '"Lato", sans-serif ',
    },
  },
  profilePic: {
    cursor: "pointer",
    boxSizing: "border-box",

    margin: 0,
    borderRadius: 999,
    paddingRight: 20,

    "&  > img": {
      boxShadow: "rgb(0 0 0 / 10%) 0px 10px 20px",
      width: 104,
      height: 104,
      objectFit: "cover",
      borderRadius: 999,
    },
  },
  subHeadingContainer: {
    marginTop: 25,
    marginBottom: 5,
  },
  divider: {
    margin: theme.spacing(2, 0, 4),
    width: "100%",
  },

  flex: {
    display: "flex",
    paddingBottom: 20,
  },
  userDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    lineHeight: 1.8,
  },
  fullname: {
    userSelect: "none",
    fontSize: 25,
    fontWeight: 600,
  },

  username: {
    boxSizing: "border-box",
    minWidth: 0,
    fontSize: 23,
    fontWeight: 500,
    margin: 0,
  },
  creatorDetail: {
    userSelect: "none",
    fontSize: 20,
    fontWeight: 400,
    padding: 12,
    textAlign: "justify",
    lineHeight: 1.7,
  },
  link: {
    textDecoration: "none",
    color: "#000",
  },
}));
