import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import cn from "classnames";
import AuthenticationModal from "../../Components/AuthenticationModal";
import SearchAppBar from "../../Units/SearchBar";
import PrimaryButton from "../../Units/Buttons/PrimaryButton";
import UserIconMenu from "../../Units/UserIconMenu";
import MobileMenu from "../../Units/MobileMenu";
import ConnectWalletModal from "../../Units/ConnecWalletDropDown";
import CreateNft from "../../Units/CreateNft";

import { useStyles } from "./styles";
import Logo from "../../Assets/PNGs/logo.png";

const Header = ({
  isWalletConnected,
  user: { username, img: userProfilePic },
  isSignInSuccess,

  networkName,
  validNetworkName,
}) => {
  const classes = useStyles();
  const [openMintModal, setOpenMintModal] = React.useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = React.useState(false);

  const handleWalletModalOpen = () => {
    setIsWalletModalOpen(true);
  };
  const handleWalletModalClose = () => {
    setIsWalletModalOpen(false);
  };
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const handleRegisterModalOpen = () => {
    setIsRegisterModalOpen(true);
  };
  const handleRegisterModalClose = () => {
    setIsRegisterModalOpen(false);
  };
  const [isMintModalOpen, setIsMintModalOpen] = React.useState(false);
  const handleMintModalClose = () => {
    setIsMintModalOpen(false);
  };

  const history = useHistory();
  const handleMintModalOpen = () => {
    if (
      !isWalletConnected ||
      String(networkName).toLocaleLowerCase() !==
        String(validNetworkName).toLocaleLowerCase()
    )
      setIsMintModalOpen(true);
    else {
      history.push("/mint");
    }
  };
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item lg={3} md={12} className={classes.brandCont}>
          <div className={classes.brandContInner}>
            <Link to="/home">
              <img src={Logo} alt="" className={classes.brandImg} />
            </Link>
            <SearchAppBar />
          </div>
          <div className={classes.mobMenu}>
            <MobileMenu
              isAuth={isSignInSuccess}
              setIsRegisterModalOpen={setIsRegisterModalOpen}
              userImg={userProfilePic}
              username={username}
              openMintModal={openMintModal}
              setOpenMintModal={setOpenMintModal}
              handleConnectWallet={handleWalletModalOpen}
            />
          </div>
        </Grid>
        <Grid item lg={5} md={12} className={classes.linkCont}>
          <Link to="/market" className={classes.linkWrap}>
            Market
          </Link>
          <Link to="/artist" className={classes.linkWrap}>
            Artists
          </Link>
          <Link className={classes.linkWrap} to="/es-projektai">
            ES projektai
          </Link>
          <Link to="/about" className={classes.linkWrap}>
            About Us
          </Link>
          {/* <a className={classes.linkWrap} href="#" target="_blank">
            Blog
          </a> */}
          <Link to="/faq" className={classes.linkWrap}>
            FAQs
          </Link>
        </Grid>
        <Grid
          item
          lg={4}
          md={12}
          sm={12}
          xs={12}
          justifyContent={isSignInSuccess ? "flex-end" : "space-around"}
          className={classes.btnCont}
        >
          {!isSignInSuccess ? (
            <React.Fragment>
              <div
                onClick={handleRegisterModalOpen}
                className={`${classes.linkWrap} ${classes.register}`}
              >
                Register/Login
              </div>

              <PrimaryButton
                secondary
                sm
                title="Create NFT"
                className={classes.navButton}
              />

              <PrimaryButton
                primary
                sm
                title="Connect Wallet"
                className={classes.navButton}
                onClick={handleWalletModalOpen}
              />
              <AuthenticationModal
                isRegisterModalOpen={isRegisterModalOpen}
                handleRegisterModalClose={handleRegisterModalClose}
              />
            </React.Fragment>
          ) : (
            <>
              <PrimaryButton
                secondary
                sm
                title="Create NFT"
                className={cn(classes.headerButton, classes.navButton)}
                onClick={handleMintModalOpen}
              />
              {!isWalletConnected && (
                <PrimaryButton
                  primary
                  sm
                  title="Connect Wallet"
                  className={classes.navButton}
                  onClick={handleWalletModalOpen}
                />
              )}
              <UserIconMenu
                userImg={userProfilePic}
                username={username}
                handleMintModalOpen={handleMintModalOpen}
              />
              <CreateNft
                handleMintModalOpen={handleMintModalOpen}
                handleMintModalClose={handleMintModalClose}
                openMintModal={isMintModalOpen}
              />
            </>
          )}
        </Grid>
      </Grid>

      <ConnectWalletModal
        open={isWalletModalOpen}
        isSignInSuccess={isSignInSuccess}
        handleCloseModal={handleWalletModalClose}
        handleRegisterModalOpen={handleRegisterModalOpen}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  const { Auth, Wallet, Web3Instance } = state;
  return { ...Wallet, ...Auth, ...Web3Instance };
};
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
