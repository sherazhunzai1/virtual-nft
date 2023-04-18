import { createSlice } from "@reduxjs/toolkit";

import {
  cancelFixPriceSale,
  createFixPriceSale,
  purchaseNFT,
  resetState,
} from "../Actions/nftSale.actions";

const initialState = {
  isSaleCreating: false,
  isSaleCreated: false,
  isSaleCreationFailed: false,
  saleItemDetails: {
    artId: "",
    creator_username: "",
    art_name: "",
  },
  /* ------------- */
  isPurchasing: false,
  isNftPurchased: false,
  isPurchasingFailed: false,
  purchaseNFTMessage: null,
  purchasedArtId: {
    artId: "",
    creator_username: "",
    art_name: "",
  },
  /* ------------- */
  cancellingSale: false,
  cancellingSaleFailed: false,
  cancelSaleMessage: null,
};

const nftSaleSlice = createSlice({
  name: "nftSale",
  initialState: initialState,
  extraReducers: {
    [createFixPriceSale.pending]: (state, action) => {
      state.isSaleCreating = true;
      state.isSaleCreationFailed = false;
    },
    [createFixPriceSale.fulfilled]: (state, action) => {
      state.isSaleCreating = false;
      state.isSaleCreated = true;
      state.saleItemDetails = { ...action.payload };
    },
    [createFixPriceSale.rejected]: (state, action) => {
      state.isSaleCreating = false;
      state.isSaleCreationFailed = true;
      state.saleMessage = "";
    },
    /*--------------------------------------------------------*/
    [purchaseNFT.pending]: (state, action) => {
      state.isPurchasing = true;
      state.isPurchasingFailed = false;
    },
    [purchaseNFT.fulfilled]: (state, action) => {
      state.isPurchasing = false;
      state.isNftPurchased = true;
      state.purchaseNFTMessage = "";
      state.purchasedArtId = { ...action.payload };
    },
    [purchaseNFT.rejected]: (state, action) => {
      state.isPurchasing = false;
      state.isPurchasingFailed = true;
      state.purchaseNFTMessage = "";
    },
    /*--------------------------------------------------------*/
    [cancelFixPriceSale.pending]: (state, action) => {
      state.cancellingSale = true;
      state.cancellingSaleFailed = false;
    },
    [cancelFixPriceSale.fulfilled]: (state, action) => {
      state.cancellingSale = false;
      state.cancelSaleMessage = "";
    },
    [cancelFixPriceSale.rejected]: (state, action) => {
      state.cancellingSale = false;
      state.cancellingSaleFailed = true;
      state.cancelSaleMessage = "";
    },

    [resetState]: (state, action) => {
      state.isSaleCreating = false;
      state.isSaleCreated = false;
      state.isSaleCreationFailed = false;
      state.saleMessage = null;
      state.isPurchasing = false;
      state.isNftPurchased = false;
      state.isPurchasingFailed = false;
      state.purchaseNFTMessage = null;
      state.cancellingSale = false;
      state.cancellingSaleFailed = false;
      state.cancelSaleMessage = null;
      state.purchasedArtId = {};
      state.saleItemDetails = {};
    },
  },
});

export default nftSaleSlice.reducer;
