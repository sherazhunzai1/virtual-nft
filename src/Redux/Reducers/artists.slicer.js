import { createSlice } from "@reduxjs/toolkit";
import {
  getArtists,
  searchArtist,
  sortCreatorsBy,
} from "../Actions/artists.actions";

const initialState = {
  isArtistsLoading: false,
  isArtistsLoadingFailed: false,
  totalPages: 0,
  currentPage: 1,
  creators: [],
  sortOption: "",

  isSearchingData: false,
  isSearchDataFailed: false,
  isSearchDataNotFound: false,
};

const handleFulfillment = (state, action) => {
  const { payload } = action;
  let dataArray = action.payload.Creators;
  if (payload.currentPage !== 1) dataArray = [...state.creators, ...dataArray];
  state.creators = dataArray;
  state.totalPages = action.payload.totalPages;
  state.currentPage = action.payload.currentPage;
};

const artistsSlicer = createSlice({
  name: "artists",
  initialState: initialState,
  extraReducers: {
    [getArtists.pending]: (state, action) => {
      state.isArtistsLoading = true;
      state.isArtistsLoadingFailed = false;
      state.isSearchDataFailed = false;
      state.isSearchDataNotFound = false;
    },
    [getArtists.fulfilled]: (state, action) => {
      state.isArtistsLoading = false;
      handleFulfillment(state, action);
    },
    [getArtists.rejected]: (state, action) => {
      state.isArtistsLoading = false;
      state.isArtistsLoadingFailed = true;
    },

    [searchArtist.pending]: (state, action) => {
      state.isSearchingData = true;
      state.isSearchDataFailed = false;
      state.isSearchDataNotFound = false;
    },
    [searchArtist.fulfilled]: (state, action) => {
      state.isSearchingData = false;
      handleFulfillment(state, action);
    },
    [searchArtist.rejected]: (state, action) => {
      state.isSearchingData = false;

      if (action?.error?.message === "NotFound") {
        state.isSearchDataNotFound = true;
      } else {
        state.isSearchDataFailed = true;
      }
    },

    [sortCreatorsBy.pending]: (state, action) => {
      state.isArtistsLoading = true;
    },
    [sortCreatorsBy.fulfilled]: (state, action) => {
      state.isArtistsLoading = false;
      state.creators = action.payload.creators;
      state.sortOption = action.payload.sortOption;
    },
  },
});

export default artistsSlicer.reducer;
