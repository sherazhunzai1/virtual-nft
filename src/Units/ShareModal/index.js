import { Dialog, IconButton, Typography } from "@material-ui/core";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Cancel from "@material-ui/icons/Cancel";
import { useStyles } from "./styles";
import { CopyIcon } from "../SvgIcons";
const ShareModal = ({
  open,
  onExited = () => {},
  onClose = () => {},
  url = "",
}) => {
  const classes = useStyles();
  const handleUrl = () => {
    navigator.clipboard.writeText(url);
  };
  return (
    <Dialog
      fullWidth={true}
      keepMounted
      open={open}
      TransitionProps={{
        onExited,
      }}
      className={classes.outerContainer}
    >
      <div className={classes.container}>
        <div className={classes.cancelContainer}>
          <button onClick={onClose} className={classes.cancelButton}>
            <Cancel />
          </button>
        </div>
        <div className={classes.headingWrapper}>
          <Typography variant="h6" className={classes.heading}>
            Share to...
          </Typography>
        </div>
        <div className={classes.shareButtons}>
          <div>
            <FacebookShareButton url={url}>
              <Facebook />
            </FacebookShareButton>
            <Typography variant="body1">Facebook</Typography>
          </div>
          <div>
            <TwitterShareButton url={url}>
              <Twitter />
            </TwitterShareButton>
            <Typography variant="body1">Twitter</Typography>
          </div>
          <div>
            <IconButton className={classes.iconButton} onClick={handleUrl}>
              <CopyIcon />
            </IconButton>

            <Typography variant="body1">Copy link</Typography>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ShareModal;
