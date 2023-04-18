import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  CircularProgress,
  ClickAwayListener,
  Divider,
  Grow,
  makeStyles,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import profileicon from "../../Assets/PNGs/profileicon.png";
import exiticon from "../../Assets/PNGs/exiticon.png";
import minticon from "../../Assets/PNGs/minticon.png";
import defaultProfilePic from "../../Assets/PNGs/userimg.jpg";
import { WalletAddressFormatter } from "../../Utilites";
import { connect } from "react-redux";
import { disconnectWallet } from "../../Redux/Actions/wallet.action";
import { PROFILE_BASE_URL } from "../../HTTP/config";

const UserIconMenu = ({
  userImg,
  username,
  walletAddress,
  disconnectWallet,
  handleMintModalOpen,
  isSessionLoading,
}) => {
  const classes = useStyles();

  const isComponentMount = useRef(null);
  useEffect(() => {
    isComponentMount.current = true;

    return () => {
      isComponentMount.current = false;
    };
  }, []);
  const handleSignOut = (e) => {
    handleClose(e);
    disconnectWallet();
  };
  const handleMint = (e) => {
    handleClose(e);
    handleMintModalOpen();
  };

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    if (isComponentMount.current) setOpen(false);
  };

  const profileURL = userImg
    ? userImg.includes(PROFILE_BASE_URL)
      ? userImg
      : `${PROFILE_BASE_URL}/${userImg}`
    : defaultProfilePic;
  const renderMenu = (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      transition
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList autoFocusItem={open} id="user-menu">
                <Link to={`/@${username}`} className={classes.link}>
                  <MenuItem onClick={handleClose}>
                    <img
                      src={profileicon}
                      className={classes.img}
                      alt="profile"
                    />
                    Profile
                  </MenuItem>
                </Link>
                <MenuItem onClick={handleMint}>
                  <img src={minticon} className={classes.img} alt="mint" /> Mint
                </MenuItem>
                <Divider light />
                <MenuItem onClick={handleSignOut}>
                  <img src={exiticon} className={classes.img} alt="sign out" />
                  Sign Out
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );

  return (
    <React.Fragment>
      {isSessionLoading ? (
        <div className={classes.progressBar}>
          <CircularProgress />
        </div>
      ) : (
        <div
          onClick={handleToggle}
          ref={anchorRef}
          className={classes.userContainer}
        >
          <Typography variant="h6" component="h2" className={"username"}>
            {username || WalletAddressFormatter(walletAddress)}
          </Typography>
          <Avatar alt="" src={profileURL} className={classes.avatar} />
        </div>
      )}
      {renderMenu}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  const { Auth, Wallet } = state;
  return {
    ...Wallet,
    ...Auth,
  };
};
const mapDispatchToProps = { disconnectWallet };
export default connect(mapStateToProps, mapDispatchToProps)(UserIconMenu);

const useStyles = makeStyles((theme) => ({
  progressBar: {
    padding: "0 10px",
  },
  menu: {
    "& .MuiPaper-root": {
      marginTop: "55px",
      left: "auto !important",
      right: 20,
      maxWidth: "fit-content",
    },
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  img: {
    marginRight: "20px",
  },
  userContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "none",
    border: "none",

    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#B7524B",
      cursor: "pointer",
    },

    "& .username": {
      paddingRight: theme.spacing(1),
      marginLeft: theme.spacing(2.5),

      fontFamily: "Lato, sans-serif",
    },
  },
  avatar: {
    border: "5px solid #231F20",
  },
}));
