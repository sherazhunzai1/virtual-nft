import { createSlice } from "@reduxjs/toolkit";
import {
  clearMintState,
  getIsApproveForAll,
  hasRole,
  mintNFT,
  resetSaveNFTDetailsToDB,
  saveNFTDetailsToDB,
  setApprovedForAll,
} from "../Actions/mint.actions";

const initialState = {
  userDetails: { nftTitle: null, username: null, isOnSale: null },
  isNFTMinting: false,
  isNFTMintingSuccess: false,
  isNFTMintingFailed: false,

  isApprovedForAll: false,
  isApprovedForAllLoading: false,
  isApprovedForAllLoadingFailed: false,

  NftDetails: {
    nftId: null,
  },
  isSaleCreatingDone: false,
  isDataReadFromDb: false,
  isNftDetailsLoading: false,
  isNftDetailsLoadingFailed: false,

  isApprovingForAll: false,
  isApprovingForAllFailure: false,

  isCheckingArtistStatus: false,
  isArtistStatusCheckingFailed: false,
  isAllowToMint: false,
};

const mintSlice = createSlice({
  name: "mint",
  initialState: initialState,

  extraReducers: {
    [mintNFT.pending]: (state, action) => {
      state.isNFTMinting = true;
      state.isNFTMintingSuccess = false;
      state.isNFTMintingFailed = false;
    },
    [mintNFT.fulfilled]: (state, action) => {
      state.userDetails = { ...action.payload };
      state.isNFTMinting = false;
      state.isNFTMintingSuccess = true;
    },
    [mintNFT.rejected]: (state, action) => {
      state.isNFTMinting = false;
      state.isNFTMintingFailed = true;
    },

    [clearMintState]: (state, action) => {
      state.isNFTMinting = false;
      state.isNFTMintingSuccess = false;
      state.isNFTMintingFailed = false;
      state.userDetails = {};
    },

    [getIsApproveForAll.pending]: (state, action) => {
      state.isApprovedForAllLoading = true;
      state.isApprovedForAllLoadingFailed = false;
    },
    [getIsApproveForAll.fulfilled]: (state, action) => {
      state.isApprovedForAllLoading = false;
      state.isApprovedForAll = action.payload;
    },
    [getIsApproveForAll.pending]: (state, action) => {
      state.isApprovedForAllLoading = false;
      state.isApprovedForAllLoadingFailed = false;
    },

    [setApprovedForAll.pending]: (state, action) => {
      state.isApprovingForAll = true;
      state.isApprovingForAllFailure = false;
    },
    [setApprovedForAll.fulfilled]: (state, action) => {
      state.isApprovingForAll = false;
      state.isApprovedForAll = action.payload;
    },
    [setApprovedForAll.rejected]: (state, action) => {
      state.isApprovingForAll = false;
      state.isApprovingForAllFailure = true;
    },

    [hasRole.pending]: (state, action) => {
      state.isCheckingArtistStatus = true;
      state.isArtistStatusCheckingFailed = false;
      state.isAllowToMint = false;
    },
    [hasRole.fulfilled]: (state, action) => {
      state.isCheckingArtistStatus = false;
      state.isAllowToMint = action.payload;
    },
    [hasRole.rejected]: (state, action) => {
      state.isCheckingArtistStatus = false;
      state.isArtistStatusCheckingFailed = true;
    },

    [saveNFTDetailsToDB.pending]: (state) => {
      state.isNftDetailsLoading = true;
      state.isNftDetailsLoadingFailed = false;
    },
    [saveNFTDetailsToDB.fulfilled]: (state, action) => {
      state.NftDetails = { ...action.payload };
      state.isDataReadFromDb = true;
      state.isNftDetailsLoading = false;
      state.isNftDetailsLoadingFailed = false;
    },
    [saveNFTDetailsToDB.rejected]: (state) => {
      state.isNftDetailsLoading = false;
      state.isNftDetailsLoadingFailed = true;
    },
    [resetSaveNFTDetailsToDB]: (state) => {
      state.NftDetails = {};
      state.isDataReadFromDb = false;
      state.isNftDetailsLoading = false;
      state.isNftDetailsLoadingFailed = false;
    },
  },
});

export default mintSlice.reducer;
