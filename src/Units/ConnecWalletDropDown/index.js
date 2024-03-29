import React, { useEffect } from "react";
import {
  CircularProgress,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import metaMaksImg from "../../Assets/PNGs/btn1.png";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { connectWallet } from "../../Redux/Actions/wallet.action";
import { changeChain } from "../../Redux/Actions/web3.actions";
import { useStyles } from "./styles";
import { connect, useDispatch } from "react-redux";
import { getLoggedIn } from "../../Redux/Actions/auth.actions";

const ConnectWalletModal = ({
  open = false,
  isSignInSuccess,
  handleCloseModal = () => {},
  handleRegisterModalOpen = () => {},

  isWalletConnecting,
  isWalletConnected,
  isWalletConnectingFailed,
  message,
  web3,
  networkName,
  validNetworkName,

  connectWallet,
  changeChain,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const handleConnectWallet = async () => {
    if (web3 && String(networkName).toLocaleLowerCase() === String(validNetworkName).toLocaleLowerCase()) {
      connectWallet({ web3 });

    }
  };
  const handleRegisterButtonClick = () => {
    handleRegisterModalOpen();
    handleCloseModal();
  };
  useEffect(() => {
    if (isWalletConnected) {
      // const payload = new FormData();
      // payload.append("wallet", "0x10a521997bcC3090D8511dA685B3aB6f1255E7f3");
      // dispatch(getLoggedIn(payload));
      handleCloseModal();
    }
  }, [isWalletConnected, handleCloseModal, dispatch]);
  
  return (
    <div className={classes.root}>
      <Modal
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className={classes.innercontainer} elevation={3}>
            <div className={classes.cancelicon}>
              <IconButton onClick={handleCloseModal}>
                <CancelIcon />
              </IconButton>
            </div>
            {String(networkName).toLocaleLowerCase() !== String(validNetworkName).toLocaleLowerCase() ? (
  <div className={classes.messageContainer}>
    <Typography className="message" style={{ marginTop: 24 }}>
      Please Change Network To {validNetworkName} from MetaMask.
    </Typography>

    <button
      onClick={() => changeChain()}
      className={classes.connectWalletButton}
    >
      Switch Network
    </button>
  </div>
) : isWalletConnecting || isWalletConnected ? (
  <div className={classes.messageContainer}>
    <Typography className="message">
      {isWalletConnected
        ? "Your Wallet is already connected"
        : " Please Sign the Message to verify your account."}
    </Typography>
    {!isWalletConnected && (
      <CircularProgress size={35} variant="indeterminate" />
    )}
  </div>
) : isWalletConnectingFailed ? (
  <div className={classes.messageContainer}>
    {!window.ethereum ? (
      <Typography className="message">
        No Web3 Provider Found. You cannot connect the wallet.
      </Typography>
    ) : (
      <Typography className="message">
        Please connect to your MetaMask wallet.
      </Typography>
    )}
  </div>
) : (
  <ConnectWalletModalInner
    handleCloseModal={handleCloseModal}
    handleConnectWallet={handleConnectWallet}
  />
)}


          </Paper>
        </Fade>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { Web3Instance, Wallet } = state;
  return {
    ...Web3Instance,
    ...Wallet,
  };
};
const mapDispatchToProps = { connectWallet, changeChain };

export default connect(mapStateToProps, mapDispatchToProps)(ConnectWalletModal);

const ConnectWalletModalInner = ({ handleCloseModal, handleConnectWallet }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.grid}>
      <Grid item xs={12}>
        <Typography className={classes.topheading}>
          Connect your Wallet.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.secondheading}>
          By connecting your wallet, you agree to our Terms of Service and our
          Privacy Policy.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <button className={classes.button} onClick={handleConnectWallet}>
          <img
            src={metaMaksImg}
            className={classes.image}
            alt="meta Maks img"
          />
        </button>
      </Grid>
    </Grid>
  );
};
