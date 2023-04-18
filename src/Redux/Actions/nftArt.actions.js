import { createAsyncThunk } from "@reduxjs/toolkit";
import { getArtById } from "../../HTTP/APIs";

export const getNftDetails = createAsyncThunk(
  "nftArt/getNftDetails",
  async (payload) => {
    const res = await getArtById(payload);
    return res.data;
  }
);
