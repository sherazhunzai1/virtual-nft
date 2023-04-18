import { createSlice } from "@reduxjs/toolkit";
import {
  clearState,
  getMarketAuctionArts,
  getMarketFixPriceArts,
  searchArt,
  sortArtBy,
  sortFixPriceArtBy,
} from "../Actions/market.actions";

const initialState = {
  isMakretDataLoading: false,
  isMakretDataLoadingFailed: false,
  sortOption: "",

  auction_nfts: [],
  currentAuctionPage: 1,
  totalAuctionPages: 1,

  isFixPriceArtsLoading: false,
  isFixPriceArtsLoadingFailed: false,
  fixedPriceArts: [],
  totalPages: 1,
  currentPage: 1,

  isSearchingData: false,
  isSearchDataFailed: false,
  isSearchDataNotFound: false,
};

const handleFulfillment = (state, action) => {
  const { payload } = action;
  let dataArray = action.payload.auction_nfts;
  if (payload.currentAuctionPage !== 1)
    dataArray = [...state.auction_nfts, ...dataArray];
  state.auction_nfts = dataArray;
  state.totalAuctionPages = action.payload.totalAuctionPages;
  state.currentAuctionPage = action.payload.currentAuctionPage;
};

const handleFixPriceArtFecthFulfillment = (state, action) => {
  const { payload } = action;
  let dataArray = action.payload.nfts;
  if (payload.currentPage !== 1)
    dataArray = [...state.fixedPriceArts, ...dataArray];
  state.fixedPriceArts = dataArray;
  state.totalPages = action.payload.totalPages;
  state.currentPage = action.payload.currentPage;
};

const marketSlicer = createSlice({
  name: "market",
  initialState: initialState,
  extraReducers: {
    [getMarketAuctionArts.pending]: (state, action) => {
      state.isMakretDataLoading = true;
      state.isMakretDataLoadingFailed = false;
      state.isSearchDataFailed = false;
      state.isSearchDataNotFound = false;
    },
    [getMarketAuctionArts.fulfilled]: (state, action) => {
      state.isMakretDataLoading = false;
      handleFulfillment(state, action);
    },
    [getMarketAuctionArts.rejected]: (state, action) => {
      state.isMakretDataLoading = false;
      state.isMakretDataLoadingFailed = true;
    },

    /*----------------------------------------------------------------*/

    [getMarketFixPriceArts.pending]: (state, action) => {
      state.isFixPriceArtsLoading = true;
      state.isFixPriceArtsLoadingFailed = false;
    },
    [getMarketFixPriceArts.fulfilled]: (state, action) => {
      state.isFixPriceArtsLoading = false;
      handleFixPriceArtFecthFulfillment(state, action);
    },
    [getMarketFixPriceArts.rejected]: (state, action) => {
      state.isFixPriceArtsLoading = false;
      state.isFixPriceArtsLoadingFailed = true;
    },

    /*----------------------------------------------------------------*/

    [sortArtBy.pending]: (state, action) => {
      state.isMakretDataLoading = true;
    },
    [sortArtBy.fulfilled]: (state, action) => {
      state.isMakretDataLoading = false;
      state.auction_nfts = action.payload.nfts;
      state.sortOption = action.payload.sortOption;
    },

    /*----------------------------------------------------------------*/

    [sortFixPriceArtBy.pending]: (state, action) => {
      state.isFixPriceArtsLoading = true;
    },
    [sortFixPriceArtBy.fulfilled]: (state, action) => {
      state.isFixPriceArtsLoading = false;
      state.fixedPriceArts = action.payload.nfts;
      state.sortOption = action.payload.sortOption;
    },
    /*----------------------------------------------------------------*/

    [searchArt.pending]: (state, action) => {
      state.isSearchingData = true;
      state.isSearchDataFailed = false;
      state.isSearchDataNotFound = false;
      state.fixedPriceArts = [];
    },
    [searchArt.fulfilled]: (state, action) => {
      state.isSearchingData = false;

      handleFixPriceArtFecthFulfillment(state, action);
    },
    [searchArt.rejected]: (state, action) => {
      state.isSearchingData = false;
      if (action?.error?.message === "NotFound") {
        state.isSearchDataNotFound = true;
      } else {
        state.isSearchDataFailed = true;
      }
    },
  },

  [clearState]: (state, action) => {
    state.isMakretDataLoading = false;
    state.isMakretDataLoadingFailed = false;
    state.sortOption = "";

    state.auction_nfts = [];
    state.currentAuctionPage = 1;
    state.totalAuctionPages = 1;

    state.isFixPriceArtsLoading = false;
    state.isFixPriceArtsLoadingFailed = false;
    state.fixedPriceArts = [];
    state.totalPages = 1;
    state.currentPage = 1;

    state.isSearchingData = false;
    state.isSearchDataFailed = false;
    state.isSearchDataNotFound = false;
  },
});

export default marketSlicer.reducer;
