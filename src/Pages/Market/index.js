import React, { useEffect, useRef, useState } from "react";
import { Grid, Tabs, Typography } from "@material-ui/core";
import Filters from "../../Components/Filters";
import FilterMobile from "../../Components/Filters/MobileView";
import NFTCardsList from "../../Components/NFTCardsList";
import SearchAppBar from "../../Units/SearchBar";
import SortNFTsByDropdown from "../../Units/SortByDropdown";
import PrimaryButton from "../../Units/Buttons/PrimaryButton";
import FabBtn from "../../Units/FloatingBtn";
import MarketBanner from "../../Assets/PNGs/auctionBack.png";
import Loading from "../../Units/Loading";
import ArtNotFound from "../../Units/ArtNotFound";
import { a11yProps, LinkTab, TabPanel } from "../../Units/ProfileUnits";
import { useStyles } from "./styles";
import { sortOptions } from "./constants";
import {
  getMarketAuctionArts,
  getMarketFixPriceArts,
  searchArt,
  sortArtBy,
  sortFixPriceArtBy,
  clearState,
} from "../../Redux/Actions/market.actions";
import { useScrollToTop } from "../../Utilites";
import { connect, useDispatch, useSelector } from "react-redux";
import NoCollection from "../../Units/NoCollections";

const Market = ({
  currentPage,
  totalPages,
  getMarketAuctionArts,
  searchArt,
  sortArtBy,
  sortFixPriceArtBy,
  clearState,
}) => {
  const classes = useStyles();
  useScrollToTop();

  useEffect(() => {
    return () => {
      clearState();
    };
  }, [clearState]);
  const [sortOption, setSortOption] = useState("");

  const [tabValue, setTabValue] = useState(0);
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const [filterOn, setFilterOn] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const hasSearched = useRef(false);

  useEffect(() => {
    (async () => {
      if (hasSearched.current && !inputValue) {
        if (tabValue === 0) {
          await getMarketAuctionArts();
          if (sortOption) sortArtBy(sortOption);
        } else if (tabValue === 1) {
        }
      }
    })();
  }, [inputValue, sortOption, getMarketAuctionArts, sortArtBy, tabValue]);

  const handleLoadMoreSearch = async (artName) => {
    if (currentPage === 1) {
      await searchArt({ pageNo: null, artName });
      if (sortOption) sortArtBy(sortOption);
    } else if (currentPage < totalPages) {
      await searchArt({ pageNo: currentPage + 1, artName });
      if (sortOption) sortArtBy(sortOption);
    }
  };
  const handleSearch = (term) => {
    handleLoadMoreSearch(term);
    hasSearched.current = true;
    setTabValue(2);
  };

  return (
    <div className={classes.root}>
      <FilterMobile filterOn={filterOn} setFilterOn={setFilterOn} />
      <FabBtn setFilterOn={setFilterOn} />

      <div
        className={classes.coverPic}
        style={{ backgroundImage: `url('${MarketBanner}')` }}
      >
        <div className="page__title__container">
          <Typography variant="h2" className="title">
            Market
          </Typography>
        </div>
      </div>

      <div className={classes.mainContainer}>
        <Grid container>
          <Grid
            item
            lg={3}
            md={4}
            sm={12}
            xs={12}
            className={classes.filterWrap}
          >
            <Filters />
          </Grid>
          <Grid item lg={9} md={8} xs={12}>
            <Grid container spacing={2}>
              <Grid item sm={8} xs={12}>
                <SearchAppBar
                  handleSearch={handleSearch}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  className={classes.search}
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <SortNFTsByDropdown
                  item={sortOptions}
                  selectedOption={sortOption}
                  handleSelectOptionChange={setSortOption}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <div className={classes.collectionWrap}>
                  <div className="tabs">
                    <Tabs
                      variant="fullWidth"
                      value={tabValue}
                      onChange={handleChange}
                      aria-label="nav tabs example"
                      className={classes.tabs}
                    >
                      <LinkTab
                        label="On Auction"
                        href="/auction"
                        {...a11yProps(0)}
                      />
                      <LinkTab
                        label="Fixed Price"
                        href="/fixed-price-sales"
                        {...a11yProps(1)}
                      />
                      <LinkTab
                        style={{ display: "none" }}
                        label=""
                        href="/search"
                        {...a11yProps(2)}
                      />
                    </Tabs>
                  </div>
                  <TabPanel value={tabValue} index={0}>
                    <AuctionTab
                      sortOption={sortOption}
                      inputValue={inputValue}
                    />
                  </TabPanel>
                  <TabPanel value={tabValue} index={1}>
                    <FixPriceArtsTab
                      sortOption={sortOption}
                      inputValue={inputValue}
                    />
                  </TabPanel>

                  <TabPanel value={tabValue} index={2}>
                    <SearchedArtsTab
                      sortOption={sortOption}
                      inputValue={inputValue}
                    />
                  </TabPanel>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { Market } = state;

  return {
    ...Market,
  };
};

const mapDispatchToProps = {
  getMarketAuctionArts,
  searchArt,
  sortArtBy,
  sortFixPriceArtBy,
  clearState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);

const AuctionTab = ({ sortOption, inputValue }) => {
  const {
    Market: {
      auction_nfts,
      currentAuctionPage,
      totalAuctionPages,
      isMakretDataLoading,
      isMakretDataLoadingFailed,
    },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleLoadArts = async (args) => {
    if (auction_nfts.length === 0) dispatch(getMarketAuctionArts());
    else if (
      Boolean(args?.loadMore) &&
      currentAuctionPage < totalAuctionPages
    ) {
      await dispatch(getMarketAuctionArts(currentAuctionPage + 1));
      if (sortOption) dispatch(sortArtBy(sortOption));
    }
  };

  useEffect(() => {
    handleLoadArts();
  }, []);

  const initialRender = useRef(true);
  useEffect(() => {
    if (!initialRender.current) dispatch(sortArtBy(sortOption));
    else initialRender.current = false;
  }, [dispatch, sortOption]);
  return (
    <>
      {auction_nfts.length === 0 ? (
        <NoCollection market />
      ) : (
        <MarketCards
          nfts={auction_nfts}
          isArtsLoading={isMakretDataLoading}
          isSearchDataFailed={isMakretDataLoadingFailed}
          isSearchDataNotFound={isMakretDataLoadingFailed}
        />
      )}

      <LoadMoreButton
        isLoading={isMakretDataLoading}
        currentPage={currentAuctionPage}
        totalPages={totalAuctionPages}
        handleLoadMore={handleLoadArts}
        dataArray={auction_nfts}
        inputValue={inputValue}
      />
    </>
  );
};

const FixPriceArtsTab = ({ sortOption, inputValue }) => {
  const {
    Market: {
      fixedPriceArts,

      isFixPriceArtsLoading,
      isFixPriceArtsLoadingFailed,
      totalPages,
      currentPage,
    },
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  const handleLoadArts = async (args) => {
    if (fixedPriceArts.length === 0) dispatch(getMarketFixPriceArts());
    else if (Boolean(args?.loadMore) && currentPage < totalPages) {
      await dispatch(getMarketFixPriceArts(currentPage + 1));
      if (sortOption) dispatch(sortFixPriceArtBy(sortOption));
    }
  };

  useEffect(() => {
    handleLoadArts();
  }, []);

  const initialRender = useRef(true);
  useEffect(() => {
    if (!initialRender.current) dispatch(sortFixPriceArtBy(sortOption));
    else initialRender.current = false;
  }, [dispatch, sortOption]);
  return (
    <>
      {fixedPriceArts.length === 0 ? (
        <NoCollection market />
      ) : (
        <MarketCards
          nfts={fixedPriceArts}
          isArtsLoading={isFixPriceArtsLoading}
          isSearchDataFailed={isFixPriceArtsLoadingFailed}
          isSearchDataNotFound={isFixPriceArtsLoadingFailed}
        />
      )}

      <LoadMoreButton
        isLoading={isFixPriceArtsLoading}
        currentPage={currentPage}
        totalPages={totalPages}
        handleLoadMore={handleLoadArts}
        dataArray={fixedPriceArts}
        inputValue={inputValue}
      />
    </>
  );
};

const SearchedArtsTab = ({ sortOption, inputValue }) => {
  const {
    Market: {
      isSearchingData,
      isSearchDataFailed,
      isSearchDataNotFound,
      fixedPriceArts,
      totalPages,
      currentPage,
    },
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  const handleLoadArts = async () => {
    if (fixedPriceArts.length === 0) dispatch(getMarketFixPriceArts());
    else if (currentPage < totalPages) {
      await dispatch(getMarketFixPriceArts(currentPage + 1));
      if (sortOption) dispatch(sortFixPriceArtBy(sortOption));
    }
  };

  useEffect(() => {
    handleLoadArts();
  }, []);

  const initialRender = useRef(true);
  useEffect(() => {
    if (!initialRender.current) dispatch(sortFixPriceArtBy(sortOption));
    else initialRender.current = false;
  }, [dispatch, sortOption]);
  return (
    <>
      <MarketCards
        nfts={fixedPriceArts}
        isArtsLoading={isSearchingData}
        isSearchDataFailed={isSearchDataFailed}
        isSearchDataNotFound={isSearchDataNotFound}
      />

      <LoadMoreButton
        isLoading={isSearchingData}
        currentPage={currentPage}
        totalPages={totalPages}
        handleLoadMore={handleLoadArts}
        dataArray={fixedPriceArts}
        inputValue={inputValue}
      />
    </>
  );
};

// makert page units

const MarketCards = ({
  nfts = [],
  isArtsLoading,
  isSearchDataFailed,
  isSearchDataNotFound,
  handleClear = () => {},
  NotFoundComponent = true,
}) => {
  const classes = useStyles();
  return (
    <>
      {isSearchDataNotFound ? (
        NotFoundComponent ? (
          <NotFoundComponent />
        ) : (
          <ArtNotFound handleClear={handleClear} />
        )
      ) : isSearchDataFailed ? (
        <p>An error occurred</p>
      ) : (
        <div className={classes.cardsContainer}>
          <NFTCardsList arts={nfts} className={classes.cardsGrid} />
        </div>
      )}
    </>
  );
};

const LoadMoreButton = ({
  isLoading,
  currentPage,
  totalPages,
  handleLoadMore = () => {},
  dataArray = [],
  inputValue,
}) => {
  const classes = useStyles();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        !isLoading &&
        currentPage < totalPages &&
        dataArray.length &&
        !Boolean(inputValue) && (
          <div className={classes.loadMoreButtonContainer}>
            <PrimaryButton
              borderSec
              className="button"
              title="Load More"
              onClick={() => {
                handleLoadMore({ loadMore: true });
              }}
            />
          </div>
        )
      )}
    </>
  );
};
