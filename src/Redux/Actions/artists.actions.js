import { createAsyncThunk } from "@reduxjs/toolkit";
import { getArtistsAPI, searchArtistAPI } from "../../HTTP/APIs";
import { sortArtistsByOption } from "../../Utilites";

export const getArtists = createAsyncThunk(
  "artists/getArtists",
  async (payload) => {
    let page = 1;
    if (payload) page = payload;
    const res = await getArtistsAPI(page);
    return res.data;
  }
);

export const searchArtist = createAsyncThunk(
  "artists/searchArtist",
  async ({ pageNo, username }) => {
    try {
      let page = 1;
      if (pageNo) page = pageNo;
      const res = await searchArtistAPI(page, username);
      return res.data;
    } catch (err) {
      if (err.response.status === 404) throw new Error("NotFound");
      throw err;
    }
  }
);

export const sortCreatorsBy = createAsyncThunk(
  "artists/sortArtBy",
  (payload, { getState }) => {
    const {
      Artists: { creators },
    } = getState();
    return {
      creators: sortArtistsByOption(creators, payload),
      sortOption: payload,
    };
  }
);
