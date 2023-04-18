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
import { connect } from "react-redux";

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

  const handleConnectWallet = () => {
    web3 &&
      String(networkName).toLocaleLowerCase() ===
        String(validNetworkName).toLocaleLowerCase() &&
      connectWallet({ web3 });
  };
  const handleRegisterButtonClick = () => {
    handleRegisterModalOpen();
    handleCloseModal();
  };
  useEffect(() => {
    if (isWalletConnected) handleCloseModal();
  }, [isWalletConnected, handleCloseModal]);
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
            {!isSignInSuccess ? (
              <div style={{ padding: 20 }}>
                <Typography className="message">
                  Please Login first to connect your wallet.
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 20,
                  }}
                >
                  <button
                    onClick={handleRegisterButtonClick}
                    className={classes.connectWalletButton}
                  >
                    Register/Login
                  </button>
                </div>
              </div>
            ) : String(networkName).toLocaleLowerCase() !==
              String(validNetworkName).toLocaleLowerCase() ? (
              <div className={classes.messageContainer}>
                <Typography className="message" style={{ marginTop: 24 }}>
                  . Please Change Network To {validNetworkName}
                  &nbsp; from MetaMask.
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
                    No Web3 Provider Found. You cannot connect wallet.
                  </Typography>
                ) : (
                  <Typography className="message">
                    Please connect to the registered MetaMask wallet when you
                    created your account with Krama.
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
