import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { getArtById, getArtHistoryById } from "../../HTTP/APIs";

export const getArtDetails = createAsyncThunk(
  "artwork/getArtDetails",
  async (payload) => {
    try {
      const res = await getArtById(payload);
      return res.data;
    } catch (err) {
      if (err.response.status === 404) throw new Error("NotFound");
      throw err;
    }
  }
);

export const getArtHistory = createAsyncThunk(
  "artwork/getArtHistory",
  async (payload) => {
    const res = await getArtHistoryById(payload);

    return res.data;
  }
);
export const resetState = createAction("artwork/resetState");
