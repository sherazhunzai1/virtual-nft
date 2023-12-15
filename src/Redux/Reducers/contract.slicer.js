import { createSlice } from "@reduxjs/toolkit";
import { initContract } from "../Actions/contract.actions";

const initialState = {
  isContractInitilizing: false,
  isContractInitialized: false,
  isContractInitializedFailed: false,

  nftContractadAddress: "0x9C0722eC3Da336d8793d84904577eb929762691a",
  nftContract: null,

  marketContractAddress: "0xD7D6236Ba52198c4f4a3C361cD718704Ad44b4B5",
  marketContract: null,
};

const mintSlice = createSlice({
  name: "contract",
  initialState: initialState,

  extraReducers: {
    [initContract.pending]: (state, action) => {
      state.isContractInitilizing = false;
      state.isContractInitialized = false;
      state.isContractInitializedFailed = false;
    },
    [initContract.fulfilled]: (state, action) => {
      state.isContractInitialized = true;
      state.isContractInitilizing = false;
      state.marketContract = action.payload.marketContract;
      state.nftContract = action.payload.nftContract;
    },
    [initContract.rejected]: (state, action) => {
      state.isContractInitilizing = false;
      state.isContractInitializedFailed = true;
    },
  },
});

export default mintSlice.reducer;
