import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { checkUserWalletConnection } from "../../HTTP/APIs";
import { callActionWithDelay } from "../../Utilites";

export const connectWallet = createAsyncThunk(
  "Wallet/ConnectWallet",
  async (_, { dispatch, getState }) => {
    try {
      const {
        Auth: {
          user: { userId },
        },
        Web3Instance: { web3 },
      } = getState();

      if (!window.ethereum) throw new Error("no web3 instance");
      const addresses = await web3.eth.requestAccounts();
      const address = addresses[0];
      await web3.eth.personal.sign(
        web3.utils.fromUtf8(
          "Please sign this message to connect to Virtual Nft."
        ),
        address
      );

      await checkUserWalletConnection(address, userId);

      dispatch(getWalletBalance({ web3, walletAddress: address }));

      return { walletAddress: address };
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      callActionWithDelay(dispatch, resetWallet, 6000);
      throw new Error(message);
    }
  }
);

export const getWalletAccounts = createAsyncThunk(
  "Wallet/getWalletAccounts",
  async (_, { dispatch, getState }) => {
    try {
      const {
        Auth: {
          user: { userId },
        },
        Web3Instance: { web3 },
      } = getState();

      if (!window.ethereum) throw new Error("no web3 instance");
      const addresses = await web3.eth.getAccounts();
      const address = addresses[0];

      await checkUserWalletConnection(address, userId);

      dispatch(getWalletBalance({ web3, walletAddress: address }));

      return { walletAddress: address };
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      callActionWithDelay(dispatch, resetWallet, 6000);
      throw new Error(message);
    }
  }
);

export const getWalletBalance = createAsyncThunk(
  "Wallet/getWalletBalance",
  async ({ web3, walletAddress }) => {
    try {
      const balance = await web3.eth.getBalance(walletAddress);
      const balanceInEth = web3.utils.fromWei(balance, "ether");
      return {
        balance: balanceInEth,
      };
    } catch (error) {
      throw error;
    }
  }
);
export const disconnectWallet = createAction("Wallet/DisconnectWallet");
export const resetWallet = createAction("Wallet/ResetWallet");
