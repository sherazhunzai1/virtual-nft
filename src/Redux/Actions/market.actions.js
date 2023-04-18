import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  filterNftsAPI,
  getMarketAuctionArtsAPI,
  getMarketFixPriceArtsAPI,
  searchArtAPI,
} from "../../HTTP/APIs";
import { sortNftsByOption } from "../../Utilites";

export const getMarketAuctionArts = createAsyncThunk(
  "market/getMarketArts",
  async (payload) => {
    let page = 1;
    if (payload) page = payload;
    const res = await getMarketAuctionArtsAPI(page);
    return res.data;
  }
);

export const getMarketFixPriceArts = createAsyncThunk(
  "market/getMarketFixPriceArts",
  async (payload) => {
    let page = 1;
    if (payload) page = payload;
    const res = await getMarketFixPriceArtsAPI(page);
    return res.data;
  }
);

export const sortArtBy = createAsyncThunk(
  "market/sortArtBy",
  (payload, { getState }) => {
    const {
      Market: { auction_nfts },
    } = getState();
    return {
      nfts: sortNftsByOption(auction_nfts, payload),
      sortOption: payload,
    };
  }
);

export const sortFixPriceArtBy = createAsyncThunk(
  "market/sortFixPriceArtBy",
  (payload, { getState }) => {
    const {
      Market: { fixedPriceArts },
    } = getState();
    return {
      nfts: sortNftsByOption(fixedPriceArts, payload),
      sortOption: payload,
    };
  }
);
export const searchArt = createAsyncThunk(
  "market/searchArt",
  async ({ pageNo, artName }) => {
    try {
      const res = await searchArtAPI(pageNo, artName);
      return res.data;
    } catch (err) {
      if (err.response.status === 404) throw new Error("NotFound");
      throw err;
    }
  }
);

export const filterNfts = createAsyncThunk(
  "market/filterNfts",
  async (payload) => {
    try {
      const res = await filterNftsAPI(payload);

      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

export const clearState = createAction("market/clearState");
