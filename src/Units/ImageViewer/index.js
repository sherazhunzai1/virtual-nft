import { useStyles } from "./styles";

const ImageViewer = ({ src, alt }) => {
  const classes = useStyles();
  return (
    <div className={classes.mediaRoot}>
      <div className={classes.mediaInner}>
        <div className={classes.mediaInnerTop} />
        <div className={classes.mediaContainer}>
          <img loading="lazy" src={src} alt={alt} className="media" />
        </div>
      </div>
    </div>
  );
};
export default ImageViewer;
