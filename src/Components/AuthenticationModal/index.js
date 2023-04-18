import React, { useState } from "react";
import {
  Backdrop,
  Fade,
  Grid,
  IconButton,
  Modal,
  Paper,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import {
  SignInForm,
  SignUpForm,
  ResetPassword,
} from "../../Units/RegisterForm";
import { useStyles } from "./styles";
import signInCover from "../../Assets/PNGs/nftCover.jpg";

const AuthenticationModal = (props) => {
  const { isRegisterModalOpen, handleRegisterModalClose } = props;
  const classes = useStyles();
  const [currentForm, setCurrentForm] = useState("signin");

  const handleDontHaveAccount = () => {
    setCurrentForm("signup");
  };
  const handleAlreadyHaveAccount = () => {
    setCurrentForm("signin");
  };
  const handleResetPassword = () => {
    setCurrentForm("resetPass");
  };

  const handleModalClose = () => {
    handleRegisterModalClose();
    handleAlreadyHaveAccount();
  };

  return (
    <Modal
      open={isRegisterModalOpen}
      onClose={handleModalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isRegisterModalOpen}>
        <Paper className={classes.modalRoot}>
          <Grid container>
            <Grid
              item
              lg={6}
              md={7}
              sm={12}
              xs={12}
              className={classes.formWrap}
            >
              {currentForm === "signin" ? (
                <>
                  <SignInForm
                    handleResetPassword={handleResetPassword}
                    handleModalClose={handleModalClose}
                  />
                  <div className={classes.changeLink}>
                    <p>
                      Don't have an account?
                      <button
                        onClick={handleDontHaveAccount}
                        className={classes.click}
                      >
                        Click here
                      </button>
                    </p>
                  </div>
                </>
              ) : currentForm === "signup" ? (
                <>
                  <SignUpForm handleBack={handleAlreadyHaveAccount} />
                  <div className={classes.changeLink}>
                    <p>
                      Already have an account?
                      <button
                        onClick={handleAlreadyHaveAccount}
                        className={classes.click}
                      >
                        Click here
                      </button>
                    </p>
                  </div>
                </>
              ) : (
                <ResetPassword onSignInClick={handleAlreadyHaveAccount} />
              )}
            </Grid>
            <Grid
              item
              lg={6}
              md={5}
              className={classes.sideImg}
              style={{ backgroundImage: `url(${signInCover})` }}
            >
              <div className={classes.cancelIcon}>
                <IconButton
                  className={classes.closeButton}
                  onClick={handleModalClose}
                >
                  <CancelIcon />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default AuthenticationModal;
