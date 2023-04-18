import React from "react";
import { useStyles } from "./styles";
import { Grid, IconButton, Paper, Typography } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { connect } from "react-redux";

const CreateNft = ({
  validNetworkName,
  networkName,
  isWalletConnected,
  handleMintModalClose,
  openMintModal,
}) => {
  const classes = useStyles();

  return (
    <Modal
      className={classes.modal}
      open={openMintModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openMintModal}>
        <Paper className={classes.innercontainer} elevation={3}>
          <Grid>
            <Grid container justifyContent="flex-end">
              <IconButton
                className={classes.cancelicon}
                onClick={handleMintModalClose}
              >
                <CancelIcon />
              </IconButton>
            </Grid>

            {!isWalletConnected ? (
              <ModalHeading style={{ paddingBottom: 20 }}>
                Please connect your wallet to create a NFT.
              </ModalHeading>
            ) : String(networkName).toLocaleLowerCase() !==
              String(validNetworkName).toLocaleLowerCase() ? (
              <ModalHeading style={{ paddingBottom: 20 }}>
                Wrong Network. Please Change Network To from MetaMask.
              </ModalHeading>
            ) : (
              <>{null}</>
            )}
          </Grid>
        </Paper>
      </Fade>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  const { Wallet, Web3Instance } = state;
  return {
    ...Wallet,
    ...Web3Instance,
  };
};
export default connect(mapStateToProps)(CreateNft);

const ModalHeading = ({ children, style = null }) => {
  const classes = useStyles();
  return (
    <Grid justifyContent="center" container style={style}>
      <Typography color="inherit" className={classes.heading}>
        {children}
      </Typography>
    </Grid>
  );
};
