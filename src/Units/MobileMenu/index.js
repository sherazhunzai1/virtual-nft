import React, { useState } from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import { connect } from "react-redux";

import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import InfoIcon from "@material-ui/icons/Info";
import BookIcon from "@material-ui/icons/Book";
import HomeIcon from "@material-ui/icons/Home";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import MenuIcon from "@material-ui/icons/Menu";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import HelpIcon from "@material-ui/icons/Help";
import { AsteriskIcon, SignOutIcon, WalletIcon } from "../../Units/SvgIcons";
import CreateNft from "../CreateNft";
import { useStyles } from "./styles";
import { WalletAddressFormatter } from "../../Utilites";
import { disconnectWallet } from "../../Redux/Actions/wallet.action";

const MobileMenu = ({
  username = "",
  userImg,
  isAuth,
  isWalletConnected,
  networkName,
  validNetworkName,
  setIsRegisterModalOpen,
  handleConnectWallet,
  disconnectWallet,
  walletAddress,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [menuState, setMenuState] = useState({ right: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMenuState({ ...menuState, [anchor]: open });
  };

  const [isMintModalOpen, setIsMintModalOpen] = React.useState(false);
  const handleMintModalClose = () => {
    setIsMintModalOpen(false);
  };

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
  const handleSignOut = () => {
    disconnectWallet();
  };

  const mobileNav = (anchor) => (
    <div
      className={cn(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <NavLink
          to="/home"
          activeClassName={classes.active}
          className={classes.mobileViewLink}
        >
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText className={classes.linkTitle} primary={"Home"} />
          </ListItem>
        </NavLink>

        <NavLink
          to="/market"
          activeClassName={classes.active}
          className={classes.mobileViewLink}
        >
          <ListItem button>
            <ListItemIcon>
              <StorefrontIcon />
            </ListItemIcon>
            <ListItemText className={classes.linkTitle} primary={"Market"} />
          </ListItem>
        </NavLink>

        <NavLink
          to="/artist"
          activeClassName={classes.active}
          className={classes.mobileViewLink}
        >
          <ListItem button>
            <ListItemIcon>
              <ArtTrackIcon />
            </ListItemIcon>
            <ListItemText className={classes.linkTitle} primary={"Artists"} />
          </ListItem>
        </NavLink>
        <a
          href="https://www.blog.krama.io/"
          target="_blank"
          rel="noreferrer"
          className={classes.mobileViewLink}
        >
          <ListItem button>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText className={classes.linkTitle} primary={"FSA"} />
          </ListItem>
        </a>

        <NavLink
          to="/about"
          activeClassName={classes.active}
          className={classes.mobileViewLink}
        >
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText className={classes.linkTitle} primary={"About Us"} />
          </ListItem>
        </NavLink>
        <a
          href="https://www.blog.krama.io/"
          target="_blank"
          rel="noreferrer"
          className={classes.mobileViewLink}
        >
          <ListItem button>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText className={classes.linkTitle} primary={"Blog"} />
          </ListItem>
        </a>
        <NavLink
          to="/faq"
          activeClassName={classes.active}
          className={classes.mobileViewLink}
        >
          <ListItem button>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText className={classes.linkTitle} primary={"FAQs"} />
          </ListItem>
        </NavLink>
      </List>

      <Divider />
      {!isAuth ? (
        <List>
          <ListItem button onClick={() => setIsRegisterModalOpen(true)}>
            <ListItemIcon>
              <VpnKeyIcon />
            </ListItemIcon>
            <ListItemText
              className={classes.linkTitle}
              primary={"Register/Login"}
            />
          </ListItem>
          <ListItem button onClick={handleConnectWallet}>
            <ListItemIcon>
              <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText
              className={classes.linkTitle}
              primary={"Connect Wallet"}
            />
          </ListItem>
        </List>
      ) : (
        <List>
          <ListItem
            button
            onClick={() => {
              history.push(`/${username}`);
            }}
          >
            <ListItemIcon>
              <img
                src={userImg}
                className={classes.userMobileIcon}
                alt="user icon"
              />
            </ListItemIcon>

            <ListItemText
              className={classes.linkTitle}
              primary={WalletAddressFormatter(walletAddress) || username}
            />
          </ListItem>
          <ListItem button onClick={handleMintModalOpen}>
            <ListItemIcon>
              <AsteriskIcon />
            </ListItemIcon>
            <ListItemText className={classes.linkTitle} primary={"Mint"} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <WalletIcon />
            </ListItemIcon>
            <ListItemText className={classes.linkTitle} primary={"Wallet"} />
          </ListItem>
          <ListItem button onClick={handleSignOut}>
            <ListItemIcon>
              <SignOutIcon />
            </ListItemIcon>
            <ListItemText className={classes.linkTitle} primary={"Sign Out"} />
          </ListItem>
        </List>
      )}
    </div>
  );
  return (
    <>
      <div className={classes.hideMenu}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="#0A1A72"
          onClick={toggleDrawer("right", true)}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor={"right"}
          open={menuState["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {mobileNav("right")}
        </Drawer>
      </div>

      <CreateNft
        handleMintModalOpen={handleMintModalOpen}
        handleMintModalClose={handleMintModalClose}
        openMintModal={isMintModalOpen}
      />
    </>
  );
};

const mapDispatchToProps = { disconnectWallet };
const mapStateToProps = (state) => {
  const { Wallet, Web3Instance } = state;
  return {
    ...Web3Instance,
    ...Wallet,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);
