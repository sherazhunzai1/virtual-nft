import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  editProfile,
  getProfileArts,
  getUserProfileData,
  fetchUserActivityAPI,
  updateBidStatusAPI,
} from "../../HTTP/APIs";
import { callActionWithDelay } from "../../Utilites";

export const updateProfileInfo = createAsyncThunk(
  "artistProfile/updateProfileInfo",
  async (payload, { dispatch }) => {
    try {
      const res = await editProfile(payload);
      callActionWithDelay(dispatch, resetProfileState);
      return res.data;
    } catch (err) {
      callActionWithDelay(dispatch, resetProfileState);

      throw err;
    }
  }
);

export const resetProfileState = createAction(
  "artistProfile/resetProfileState"
);

export const fetchUserProfileDetails = createAsyncThunk(
  "artistProfile/fetchUserProfileDetails",
  async (payload) => {
    try {
      const res = await getUserProfileData(payload);
      return res.data;
    } catch (err) {
      if (err.response.status === 404) throw new Error("NotFound");
      throw err;
    }
  }
);

export const fetchUserArts = createAsyncThunk(
  "artistProfile/fetchUserArts",
  async (payload) => {
    const res = await getProfileArts(payload);
    return res.data;
  }
);

export const fetchUserActivity = createAsyncThunk(
  "artistProfile/fetchUserActivity",
  async (payload) => {
    const res = await fetchUserActivityAPI(payload);
    return res.data;
  }
);

export const withdrawAuctionBid = createAsyncThunk(
  "artistProfile/withdrawAuctionBid",
  async ({ auctionId, txHash, username }, { dispatch, getState }) => {
    const {
      Auth: {
        user: { walletAddress },
      },
      Contract: { marketContract },
    } = getState();

    const res = await marketContract.methods
      .withdrawLostAuctionBid(auctionId)
      .send({ from: walletAddress });
    dispatch(updateBidStatus({ txHash, username }));
    return res;
  }
);

export const updateBidStatus = createAsyncThunk(
  "artistProfile/withdrawAuctionBid",
  async ({ txHash, username }) => {
    const res = await updateBidStatusAPI({ txHash, username });
    return res.data;
  }
);
