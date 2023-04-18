import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getFixedPriceArtsFromAPI,
  getHomeAuctionsAPI,
  getHomeFeatureCreatorsAPI,
  getMainAuctionFromAPI,
} from "../../HTTP/APIs";

// action in redux toolkit
export const getMainAuction = createAsyncThunk(
  "Home/getMainAuction",
  async () => {
    let res = await getMainAuctionFromAPI();
    return res.data;
  }
);

export const getHomeAuctions = createAsyncThunk(
  "Home/getHomeAuctions",
  async () => {
    const res = await getHomeAuctionsAPI();

    return res.data;
  }
);

export const getFixedPriceArts = createAsyncThunk(
  "Home/getFixedPriceArts",
  async () => {
    const res = await getFixedPriceArtsFromAPI();
    return res.data;
  }
);

export const getFeatureCreators = createAsyncThunk(
  "Home/getFeatureCreators",
  async () => {
    const res = await getHomeFeatureCreatorsAPI();
    return res.data;
  }
);
