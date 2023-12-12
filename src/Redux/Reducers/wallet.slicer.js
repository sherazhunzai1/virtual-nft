import { createSlice } from "@reduxjs/toolkit";
import {
  connectWallet,
  disconnectWallet,
  getWalletAccounts,
  getWalletBalance,
  resetWallet,
} from "../Actions/wallet.action";
import { checkUserSessionAction } from "../Actions/auth.actions";

const initialState = {
  isWalletConnected: false,
  isWalletConnectingFailed: false,
  isWalletConnecting: false,
  walletAddress: null,
  message: "",

  walletBalance: null,
  walletBalanceLoading: false,
  walletBalanceLoadingFailed: false,


  isSessionLoading: false,
  isSessionLoadingFailed: false,
};

const authSuccess = (state, action) => {
  localStorage.setItem("boaxnftusertoken", action.payload?.walletAddress);
  state.isWalletConnecting = false;
  state.isWalletConnected = true;
  state.walletAddress = action.payload.walletAddress;
};
const walletSlicer = createSlice({
  name: "wallet",
  initialState: initialState,
  
  extraReducers: {
    [connectWallet.pending]: (state, action) => {
      state.isWalletConnecting = true;
      state.isWalletConnected = false;
      state.isWalletConnectingFailed = false;
    },
    [connectWallet.fulfilled]: (state, action) => {  
      state.isWalletConnecting = false;
      state.isWalletConnected = true;
      state.walletAddress = action.payload.walletAddress;
      authSuccess(state, action);

    },
    [connectWallet.rejected]: (state, action) => {
      state.isWalletConnecting = false;
      state.isWalletConnectingFailed = true;
      state.isWalletConnected = false;
      state.walletAddress = null;
      state.message = action.error.message;
    },
    [checkUserSessionAction.fulfilled]: (state, action) => {
      authSuccess(state, action);
      state.isSessionLoading = false;
    },
    [checkUserSessionAction.rejected]: (state, action) => {
      state.isSessionLoading = false;
      state.isSessionLoadingFailed = true;
    },
    [disconnectWallet]: (state, action) => {
      state.isWalletConnected = false;
      state.walletAddress = null;
    },
    [resetWallet]: (state, action) => {
      state.isWalletConnected = false;
      state.walletAddress = null;
      state.isWalletConnectingFailed = false;
      state.message = "";
    },
    [getWalletAccounts.pending]: (state, action) => {
      state.isWalletConnecting = true;
      state.isWalletConnected = false;
      state.isWalletConnectingFailed = false;
    },
    [getWalletAccounts.fulfilled]: (state, action) => {
     
      state.isWalletConnecting = false;
      state.isWalletConnected = true;
      state.walletAddress = action.payload.walletAddress;
      authSuccess(state, action);
    },
    [getWalletAccounts.rejected]: (state, action) => {
      state.isWalletConnecting = false;
      state.isWalletConnectingFailed = true;
      state.isWalletConnected = false;
      state.walletAddress = null;
      state.message = action.error.message;
    },
    [getWalletBalance.pending]: (state, action) => {
      state.walletBalanceLoading = true;
      state.walletBalanceLoadingFailed = false;
    },
    [getWalletBalance.fulfilled]: (state, action) => {
      state.walletBalanceLoading = false;
      state.walletBalance = action.payload.balance;
    },
    [getWalletBalance.rejected]: (state, action) => {
      state.walletBalanceLoading = false;
      state.walletBalanceLoadingFailed = true;
    },
    [disconnectWallet]: (state, action) => {
      state.isWalletConnecting = false;
      state.isWalletConnected = false;
      state.isWalletConnectingFailed = false;
     
      state.walletAddress = null;
      localStorage.clear();
    },
  },
});
export default walletSlicer.reducer;
