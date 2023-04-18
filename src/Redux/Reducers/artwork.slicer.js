import { createSlice } from "@reduxjs/toolkit";
import {
  getArtDetails,
  getArtHistory,
  resetState,
} from "../Actions/artwork.actions";

const initialState = {
  isArtDataLoading: false,
  isArtDataLoadingFailed: false,
  isArtNotFound: false,
  artDetails: {},

  /* ------------- */
  isHistoryLoading: false,
  isHistoryLoadingFailed: false,
  transactionsHistory: [],
};

const artworkSlice = createSlice({
  name: "artworkSlice",

  initialState: initialState,

  extraReducers: {
    [getArtDetails.pending]: (state, action) => {
      state.isArtDataLoading = true;
      state.isArtDataLoadingFailed = false;
      state.isArtNotFound = false;
      state.artDetails = {};
    },
    [getArtDetails.fulfilled]: (state, action) => {
      state.isArtDataLoading = false;
      state.artDetails = {
        ...action.payload.artDetails,
      };
    },
    [getArtDetails.rejected]: (state, action) => {
      state.isArtDataLoading = false;
      if (action?.error?.message === "NotFound") {
        state.isArtNotFound = true;
      } else {
        state.isArtDataLoadingFailed = true;
      }
    },

    [getArtHistory.pending]: (state, action) => {
      state.isHistoryLoading = true;
      state.isHistoryLoadingFailed = false;
      state.history = [];
    },
    [getArtHistory.fulfilled]: (state, action) => {
      state.isHistoryLoading = false;
      state.transactionsHistory = action.payload.transactionHistory;
    },
    [getArtHistory.rejected]: (state, action) => {
      state.isHistoryLoading = false;
      state.isHistoryLoadingFailed = true;
    },
    [resetState]: (state) => {
      state.isArtDataLoading = false;
      state.artDetails = null;
    },
  },
});

export default artworkSlice.reducer;
