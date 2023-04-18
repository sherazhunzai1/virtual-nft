import { createSlice } from "@reduxjs/toolkit";
import { getNftDetails } from "../Actions/nftArt.actions";

const initialState = {
  isArtDataLoading: false,
  isArtDataLoadingFailed: false,
  isArtNotFound: false,
  isArtFound: false,
  artDetails: {
    art_name: "",
    art_img: "",
    art_price: "",
    end_date: "",
    isAuction: "",
  },
};

const nftArt = createSlice({
  name: "nftArt",
  initialState: initialState,
  extraReducers: {
    [getNftDetails.pending]: (state, action) => {
      state.isArtDataLoading = true;
      state.isArtDataLoadingFailed = false;
      state.isArtNotFound = false;
      state.isArtFound = false;
    },
    [getNftDetails.fulfilled]: (state, action) => {
      state.isArtDataLoading = false;
      state.isArtFound = true;

      state.artDetails = {
        ...action.payload.artDetails,
      };
    },
    [getNftDetails.rejected]: (state, action) => {
      state.isArtDataLoading = false;
      if (action?.error?.message === "NotFound") {
        state.isArtNotFound = true;
      } else {
        state.isArtDataLoadingFailed = true;
      }
    },
  },
});

export default nftArt.reducer;
