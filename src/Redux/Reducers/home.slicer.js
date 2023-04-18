import { createSlice } from "@reduxjs/toolkit";
import {
  getFeatureCreators,
  getFixedPriceArts,
  getHomeAuctions,
  getMainAuction,
} from "../Actions/home.actions";

const initialState = {
  isMainAuctionLoading: false,
  isMainAuctionLoadingFailed: false,
  mainAuctionArt: [],
  /* ---------------*/

  isAuctionsLoading: false,
  isAuctionsLoadingFailed: false,
  homeAuctions: {
    liveAuction: [],
    totalLiveAuction: 0,
    totalPages: 0,
    currentPage: 1,
  },
  /* ---------------*/
  isFixPriceArtsLoading: false,
  isFixPriceArtsLoadingFailed: false,
  homeFixPriceArts: {
    fixedPriceArts: [],
    totalFixedPriceArts: 0,
    totalPages: 0,
    currentPage: 1,
  },

  /* ---------------*/
  isfeaturedCreatorsLoading: false,
  isfeaturedCreatorsLoadingFailed: false,
  homeFeaturedCreators: {
    featuredCreators: [],
    totalfeaturedCreators: 6,
  },
};
const homeSlicer = createSlice({
  name: "home",
  initialState: initialState,
  extraReducers: {
    [getMainAuction.pending]: (state, action) => {
      state.isMainAuctionLoading = true;
      state.isMainAuctionLoadingFailed = false;
    },
    [getMainAuction.fulfilled]: (state, action) => {
      state.isMainAuctionLoading = false;
      state.mainAuctionArt = action.payload.mainAuctionArt;
    },
    [getMainAuction.rejected]: (state, action) => {
      state.isMainAuctionLoading = false;
      state.isMainAuctionLoadingFailed = true;
    },

    /* ---------------------------------------------------------*/
    [getFixedPriceArts.pending]: (state, action) => {
      state.isFixPriceArtsLoading = true;
      state.isFixPriceArtsLoadingFailed = false;
    },
    [getFixedPriceArts.fulfilled]: (state, action) => {
      state.isFixPriceArtsLoading = false;
      state.homeFixPriceArts = {
        ...action.payload,
      };
    },
    [getFixedPriceArts.rejected]: (state, action) => {
      state.isFixPriceArtsLoading = false;
      state.isFixPriceArtsLoadingFailed = true;
    },
    /* ---------------------------------------------------------*/
    [getHomeAuctions.pending]: (state, action) => {
      state.isAuctionsLoading = true;
      state.isAuctionsLoadingFailed = false;
    },
    [getHomeAuctions.fulfilled]: (state, action) => {
      state.isAuctionsLoading = false;
      state.homeAuctions = {
        ...action.payload,
      };
    },
    [getHomeAuctions.rejected]: (state, action) => {
      state.isAuctionsLoading = false;
      state.isAuctionsLoadingFailed = true;
    },
    /* ---------------------------------------------------------*/
    [getFeatureCreators.pending]: (state, action) => {
      state.isfeaturedCreatorsLoading = true;
      state.isfeaturedCreatorsLoadingFailed = false;
    },
    [getFeatureCreators.fulfilled]: (state, action) => {
      state.isfeaturedCreatorsLoading = false;
      state.homeFeaturedCreators = {
        ...action.payload,
      };
    },
    [getFeatureCreators.rejected]: (state, action) => {
      state.isfeaturedCreatorsLoading = false;
      state.isfeaturedCreatorsLoadingFailed = true;
    },
  },
});

export default homeSlicer.reducer;
