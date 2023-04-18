import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Card from "../../NFTCard";
import { useStyles } from "./style";
// import { checkSession } from "../../../Redux/Actions/Session";
import UserSettings from "../userSettings";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function SimpleTabs({
  createdArts = [],
  collectedArts = [],
  creatorName,
  bio,
  userData,
  isUserLogin,
}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [showSettings, setShowSettings] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    if (isUserLogin && userData.username === creatorName) {
      setShowSettings(true);
    } else {
      setShowSettings(false);
      setValue(0);
    }
  }, [userData, isUserLogin]);

  return (
    <div className={classes.root}>
      <div className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor="primary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Collections" {...a11yProps(0)} />
          {showSettings && <Tab label="Settings" {...a11yProps(1)} />}
          {/* <Tab label="Created" {...a11yProps(2)} /> */}
        </Tabs>
      </div>
      {/* <TabPanel value={value} index={2}>
        <div className={classes.container}>
          <div className={classes.gridContainer}>
            <div className={classes.innerGrid}>
              {createdArts.map(
                ({ product_name, image, img, art_price, end_date }, index) => {
                  return (
                    <div key={index} className={classes.gridItem}>
                      <Card
                        key={"card" + { index }}
                        title={product_name}
                        image={image}
                        createrName={creatorName}
                        createrImg={img}
                        artPrice={art_price}
                        endTime={end_date}
                        isCard={true}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </TabPanel> */}

      {/* Collected Tab  */}

      <TabPanel value={value} index={0}>
        <div className={classes.container}>
          <div className={classes.gridContainer}>
            <div className={classes.innerGrid}>
              {collectedArts.map(
                (
                  { art_name, art_img, creator_img, art_price, end_date },
                  index
                ) => {
                  return (
                    <div key={index + "collected"} className={classes.gridItem}>
                      <Card
                        key={"collectedCard" + { index }}
                        title={art_name}
                        image={art_img}
                        createrName={creatorName}
                        createrImg={creator_img}
                        artPrice={art_price}
                        endTime={end_date}
                        isCard={true}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </TabPanel>

      {showSettings && (
        <TabPanel value={value} index={1}>
          <div className={classes.container}>
            <div className={classes.gridContainer}>
              <UserSettings userData={userData} bio={bio} />
            </div>
          </div>
        </TabPanel>
      )}
    </div>
  );
}

export default SimpleTabs;
