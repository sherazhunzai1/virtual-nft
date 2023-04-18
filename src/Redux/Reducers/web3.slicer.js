import { createSlice } from "@reduxjs/toolkit";
import {
  clearNetworkMessage,
  getNetworkDetails,
  initWeb3,
} from "../Actions/web3.actions";

const initialState = {
  validNetworkId: 80001,
  validNetworkName: "private",

  isWeb3Init: false,
  isWeb3initilizing: false,
  isWeb3initFailed: false,
  web3: null,
  message: null,

  isNetworkLoading: false,
  isVaildNetwork: true,
  isNetworkLoadingFailed: false,
  networkId: null,
  networkName: null,
  networkErrorMessage: null,
};

const web3Slicer = createSlice({
  name: "Web3",
  initialState: initialState,
  extraReducers: {
    [initWeb3.pending]: (state, action) => {
      state.isWeb3Init = false;
      state.isWeb3initFailed = false;
      state.isWeb3initilizing = true;
    },
    [initWeb3.fulfilled]: (state, action) => {
      state.isWeb3Init = true;
      state.isWeb3initilizing = false;
      state.web3 = action.payload.web3;
      state.networkName = action.payload.networkName;
      state.networkId = action.payload.networkId;
    },

    [getNetworkDetails.pending]: (state, action) => {
      state.isNetworkLoading = true;
      state.networkName = null;
      state.networkId = null;
    },
    [getNetworkDetails.fulfilled]: (state, action) => {
      state.isNetworkLoading = false;
      state.isVaildNetwork = true;
      state.networkName = action.payload.networkName;
      state.networkId = action.payload.networkId;
    },
    [getNetworkDetails.rejected]: (state, action) => {
      state.isNetworkLoading = false;
      state.isNetworkLoadingFailed = true;
      state.networkName = null;
      state.networkId = null;
      state.networkErrorMessage = action.error.message;
    },

    [initWeb3.rejected]: (state, action) => {
      state.isWeb3Init = false;
      state.isWeb3initilizing = false;
      state.isWeb3initFailed = true;
      state.networkName = null;
      state.networkId = null;
    },

    [clearNetworkMessage]: (state, action) => {
      state.networkName = null;
      state.networkId = null;
      state.networkErrorMessage = null;
      state.isNetworkLoadingFailed = false;
    },
  },
});

export default web3Slicer.reducer;
