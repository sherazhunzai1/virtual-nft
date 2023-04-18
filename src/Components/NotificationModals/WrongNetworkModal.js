import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeChain,
  clearNetworkMessage,
} from "../../Redux/Actions/web3.actions";
import PopupModal from "../../Units/PopupModal";
import useStyles from "./styles";

export const WrongNetworkNotification = () => {
  const classes = useStyles();

  const {
    Web3Instance: {
      isNetworkLoading,
      isNetworkLoadingFailed,
      networkErrorMessage,
      validNetworkName,
    },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const handleNetworkChangeRequest = () => {
    dispatch(changeChain("private"));
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (!isNetworkLoading && isNetworkLoadingFailed) openModal();
  }, [isNetworkLoading, isNetworkLoadingFailed]);

  return (
    <PopupModal
      open={isModalOpen}
      onClick={handleNetworkChangeRequest}
      onClose={() => setIsModalOpen(false)}
      head={networkErrorMessage === "WRONG_NETWORK" ? "" : "Error"}
      buttonTitle="Switch network"
      className={classes.modal}
      onExited={() => dispatch(clearNetworkMessage())}
    >
      <Typography className="message">
        {networkErrorMessage === "WRONG_NETWORK"
          ? `Wrong network. Please select Polygon from metamask and try again.`
          : "An Error occured while connecting to the Blockchain network. Please try later."}
      </Typography>
    </PopupModal>
  );
};
