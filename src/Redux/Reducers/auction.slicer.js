import { createSlice } from "@reduxjs/toolkit";

import {
  createAnAuction,
  placeBid,
  resetState,
  settleAuction,
  withdrawAuctionBid,
} from "../Actions/auction.actions";

const initialState = {
  isAuctionCreating: false,
  isAuctionCreated: false,
  isAuctionCreationFailed: false,
  auctionItemData: {
    artId: "",
    creator_username: "",
    art_name: "",
  },
  /* ------------- */
  isPlacingBid: false,
  isBidPlaced: false,
  isPlacingBidFailed: false,
  placeBidData: {
    artId: "",
    creator_username: "",
    art_name: "",
  },
  /* ------------- */
  isSettlingAuction: false,
  isAuctionSettled: false,
  isSettlingAuctionFailed: false,
  settleAuctionMessage: null,
  /* ------------- */
  widthDrawingBid: false,
  isBidWithDrawed: false,
  widthDrawingBidFailed: false,
  widthDrawBidMessage: null,
};

const auctionSlice = createSlice({
  name: "auction",
  initialState: initialState,

  extraReducers: {
    [createAnAuction.pending]: (state, action) => {
      state.isAuctionCreating = true;
      state.isAuctionCreationFailed = false;
      state.isAuctionCreated = false;
    },
    [createAnAuction.fulfilled]: (state, action) => {
      state.isAuctionCreating = false;
      state.isAuctionCreated = true;
      state.auctionItemData = { ...action.payload };
    },
    [createAnAuction.rejected]: (state, action) => {
      state.isAuctionCreating = false;
      state.isAuctionCreationFailed = true;
    },
    /* ---------------------------------------------------------------- */
    [placeBid.pending]: (state, action) => {
      state.isPlacingBid = true;
      state.isPlacingBidFailed = false;
    },
    [placeBid.fulfilled]: (state, action) => {
      state.isPlacingBid = false;
      state.isBidPlaced = true;
      state.placeBidData = action.payload;
    },
    [placeBid.rejected]: (state, action) => {
      state.isPlacingBid = false;
      state.isPlacingBidFailed = true;
      state.placeBidMessage = "";
    },
    /* ---------------------------------------------------------------- */
    [settleAuction.pending]: (state, action) => {
      state.isSettlingAuction = true;
      state.isSettlingAuctionFailed = false;
      state.settleAuctionMessage = null;
    },
    [settleAuction.fulfilled]: (state, action) => {
      state.isSettlingAuction = false;
      state.isAuctionSettled = true;

      // state.settleAuctionMessage = false;
    },
    [settleAuction.rejected]: (state, action) => {
      state.isSettlingAuction = false;
      state.isSettlingAuctionFailed = true;
      // state.settleAuctionMessage = false;
    },
    /* ---------------------------------------------------------------- */

    [withdrawAuctionBid.pending]: (state, action) => {
      state.widthDrawingBid = true;
      state.widthDrawingBidFailed = false;
    },
    [withdrawAuctionBid.fulfilled]: (state, action) => {
      state.widthDrawingBid = false;
      state.widthDrawBidMessage = "";
    },
    [withdrawAuctionBid.rejected]: (state, action) => {
      state.widthDrawingBid = false;
      state.widthDrawingBidFailed = true;
      state.widthDrawBidMessage = "";
    },
    /* ---------------------------------------------------------------- */

    [resetState]: (state, action) => {
      state.isAuctionCreating = false;
      state.isAuctionCreated = false;
      state.isAuctionCreationFailed = false;
      state.auctionItemData = {};
      /* ------------- */
      state.isPlacingBid = false;
      state.isBidPlaced = false;
      state.isPlacingBidFailed = false;
      state.placeBidData = {};
      /* ------------- */
      state.isSettlingAuction = false;
      state.isAuctionSettled = false;
      state.isSettlingAuctionFailed = false;
      state.settleAuctionMessage = null;
      /* ------------- */
      state.widthDrawingBid = false;
      state.isBidWithDrawed = false;
      state.widthDrawingBidFailed = false;
      state.widthDrawBidMessage = null;
    },
  },
});

export default auctionSlice.reducer;
