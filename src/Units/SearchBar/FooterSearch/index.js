import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { subscriptionRequest } from "../../../HTTP/APIs";
import PopupModal from "../../PopupModal";
import { Typography } from "@material-ui/core";
const FooterSearch = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const [confirmationModal, setConfirmationModal] = useState(false);
  const handleModalClose = () => setConfirmationModal(false);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleClick = async (email) => {
    try {
      const res = await subscriptionRequest(email);
      setModalMessage(res.data.message);
      setConfirmationModal(true);
    } catch (error) {
      setModalMessage("Subscription Failed");
      setConfirmationModal(true);
    }
  };
  return (
    <div className={classes.FootSearchRoot}>
      <input
        type="email"
        className={classes.footInp}
        placeholder="Email Address"
        onChange={handleEmail}
      />
      <button onClick={() => handleClick(email)} className={classes.iconWrapa}>
        <div className={classes.iconWrapb}>
          <ArrowForwardIcon className={classes.iconS} />
        </div>
      </button>
      <PopupModal
        open={confirmationModal}
        head="Subscription"
        onClose={handleModalClose}
        hideButton
      >
        <Typography variant="h6">{modalMessage}!</Typography>
      </PopupModal>
    </div>
  );
};
const useStyles = makeStyles(() => ({
  FootSearchRoot: {
    display: "flex",
    alignItems: "center",
    border: "1px solid black",
    borderRadius: "5px",
    paddingLeft: "5px",
  },
  footInp: {
    width: "100%",
    border: "none",
    fontFamily: "tajawal, sans-serif",
    fontSize: "18px",
    fontWeight: "700",
    color: "#A0A0A0",
    "&:focus": {
      outline: "none",
    },
  },
  iconWrapa: {
    background: "black",
    height: "43px",
    display: "grid",
    border: "1px solid black",
    placeContent: "center",
    width: "43px",
    cursor: "pointer",
  },
  iconWrapb: {
    background: "white",
    width: "30px",
    height: "30px",
    transform: "rotate(-45deg)",
    display: "grid",
    placeContent: "center",
  },
  iconS: {
    transform: "rotate(45deg)",
  },
}));
export default FooterSearch;
