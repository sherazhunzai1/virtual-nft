import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import CreatorsCardsList from "../../Components/CreatorsCardsList";
import SearchAppBar from "../../Units/SearchBar";
import ArtistDropSec from "../../Units/SortByDropdown";
import PrimaryButton from "../../Units/Buttons/PrimaryButton";
import ArtistBanner from "../../Assets/PNGs/auctionBack.png";
import { useStyles } from "./styles";
import { sortOptions } from "./constants";
import { useScrollToTop } from "../../Utilites";
import {
  getArtists,
  searchArtist,
  sortCreatorsBy,
} from "../../Redux/Actions/artists.actions";

const Artist = ({
  creators,
  currentPage,
  totalPages,
  isArtistsLoading,
  isSearchingData,
  isSearchDataFailed,
  isSearchDataNotFound,
  getArtists,
  searchArtist,
  sortCreatorsBy,
}) => {
  const classes = useStyles();
  useScrollToTop();

  const handleLoadArtists = async () => {
    if (creators.length === 0) getArtists();
    else if (currentPage < totalPages) {
      await getArtists(currentPage + 1);
      if (sortOption) sortCreatorsBy(sortOption);
    }
  };

  const handleLoadMoreSearch = async (username) => {
    if (currentPage === 1) {
      await searchArtist({ pageNo: null, username });
      if (sortOption) sortCreatorsBy(sortOption);
    } else if (currentPage < totalPages) {
      await searchArtist({ pageNo: currentPage + 1, username });
      if (sortOption) sortCreatorsBy(sortOption);
    }
  };

  useEffect(() => {
    handleLoadArtists();
  }, []);

  const [sortOption, setSortOption] = useState("");

  const initialRender = useRef(true);
  useEffect(() => {
    if (!initialRender.current) sortCreatorsBy(sortOption);
    else initialRender.current = false;
  }, [sortOption, sortCreatorsBy]);

  const [inputValue, setInputValue] = useState("");

  const hasSearched = useRef(false);

  useEffect(() => {
    (async () => {
      if (hasSearched.current && !inputValue) {
        await getArtists();
        if (sortOption) sortCreatorsBy(sortOption);
      }
    })();
  }, [inputValue, getArtists]);

  const handleSearch = (username) => {
    handleLoadMoreSearch(username);
    hasSearched.current = true;
  };

  return (
    <div className={classes.root}>
      <div className={classes.mrkRoot}>
        <div
          className={classes.coverPic}
          style={{ backgroundImage: `url('${ArtistBanner}')` }}
        >
          <div className="page__title__container">
            <Typography variant="h2" className="title">
              Artists
            </Typography>
          </div>
        </div>
        <Grid container className={classes.mainContainer}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item md={8} sm={8} xs={12}>
                <SearchAppBar
                  handleSearch={handleSearch}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  className={classes.search}
                />
              </Grid>
              <Grid item md={4} sm={4} xs={12}>
                <ArtistDropSec
                  item={sortOptions}
                  selectedOption={sortOption}
                  handleSelectOptionChange={setSortOption}
                />
              </Grid>
            </Grid>
            <ArtistsCards
              artists={creators}
              isDataLoading={isSearchingData}
              isSearchDataFailed={isSearchDataFailed}
              isSearchDataNotFound={isSearchDataNotFound}
            />

            {isArtistsLoading ? (
              <p>Loading...</p>
            ) : (
              currentPage < totalPages &&
              creators.length &&
              !Boolean(inputValue) && (
                <div className={classes.loadMoreButtonContainer}>
                  <PrimaryButton
                    borderSec
                    className="button"
                    title="Load More"
                    onClick={
                      inputValue ? handleLoadMoreSearch : handleLoadArtists
                    }
                  />
                </div>
              )
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { Artists } = state;

  return {
    ...Artists,
  };
};

const mapDispatchToProps = {
  getArtists,
  searchArtist,
  sortCreatorsBy,
};
export default connect(mapStateToProps, mapDispatchToProps)(Artist);

const ArtistsCards = ({
  artists = [],
  isDataLoading,
  isSearchDataFailed,
  isSearchDataNotFound,
}) => {
  const classes = useStyles();
  return (
    <>
      {isDataLoading ? (
        <p>Loading...</p>
      ) : isSearchDataNotFound ? (
        <p>Searched data not found</p>
      ) : isSearchDataFailed ? (
        <p>An error occurred</p>
      ) : (
        <div className={classes.cardsContainer}>
          <CreatorsCardsList creators={artists} className={classes.cardsGrid} />
        </div>
      )}
    </>
  );
};
