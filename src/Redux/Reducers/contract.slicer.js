import { createSlice } from "@reduxjs/toolkit";
import { initContract } from "../Actions/contract.actions";

const initialState = {
  isContractInitilizing: false,
  isContractInitialized: false,
  isContractInitializedFailed: false,

  nftContractadAddress: "0x2328356677151335A18E3CeA6fD74D43b350f783",
  nftContract: null,

  marketContractAddress: "0x699BBd3A1299EEecFFbF59CE822cDd77a722732b",
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
