import { createSlice } from "@reduxjs/toolkit";
import {
  updateProfileInfo,
  resetProfileState,
  fetchUserProfileDetails,
  fetchUserArts,
  fetchUserActivity,
  updateBidStatus,
} from "../Actions/artistProfile.actions";

const initialState = {
  isProfileUpdating: false,
  isProfileUpdated: false,
  isProfileUpdatingFailed: false,

  isUserDataLoading: false,
  isUserDataLoadingFailed: false,
  isUserNotFound: false,
  user: {},

  isUserArtsLoading: false,
  isUserArtsLoadingFailed: false,
  userArts: {
    createdArts: [],
    collectedArts: [],
  },

  isActivityLoading: false,
  isActivityLoadingFailed: false,
  activities: [],
};

const artistProfileSlice = createSlice({
  name: "artistProfile",

  initialState: initialState,

  extraReducers: {
    [updateProfileInfo.pending]: (state, action) => {
      state.isProfileUpdating = true;
      state.isProfileUpdatingFailed = false;
      state.isProfileUpdated = false;
    },
    [updateProfileInfo.fulfilled]: (state, action) => {
      state.isProfileUpdating = false;
      state.isProfileUpdated = true;
      state.user = {
        ...action.payload,
      };
    },
    [updateProfileInfo.rejected]: (state, action) => {
      state.isProfileUpdating = false;
      state.isProfileUpdatingFailed = true;
    },
    [resetProfileState]: (state, action) => {
      state.isProfileUpdated = false;
      state.isProfileUpdatingFailed = false;
    },

    [fetchUserProfileDetails.pending]: (state, action) => {
      state.isUserDataLoading = true;
      state.isUserDataLoadingFailed = false;
      state.isUserNotFound = false;
      state.user = {};
    },
    [fetchUserProfileDetails.fulfilled]: (state, action) => {
      state.isUserDataLoading = false;
      state.user = {
        ...action.payload,
      };
    },
    [fetchUserProfileDetails.rejected]: (state, action) => {
      state.isUserDataLoading = false;
      if (action?.error?.message === "NotFound") {
        state.isUserNotFound = true;
      } else {
        state.isUserDataLoadingFailed = true;
      }
    },

    [fetchUserArts.pending]: (state, action) => {
      state.isUserArtsLoading = true;
      state.isUserArtsLoadingFailed = false;
      state.userArts = {
        createdArts: [],
        collectedArts: [],
      };
    },

    [fetchUserArts.fulfilled]: (state, action) => {
      state.isUserArtsLoading = false;
      state.userArts = {
        ...action.payload,
      };
    },

    [fetchUserArts.rejected]: (state, action) => {
      state.isUserArtsLoading = false;
      state.isUserArtsLoadingFailed = true;
    },

    [fetchUserActivity.pending]: (state, action) => {
      state.isActivityLoading = true;
      state.isActivityLoadingFailed = false;
      state.activities = [];
    },
    [fetchUserActivity.fulfilled]: (state, action) => {
      state.isActivityLoading = false;
      state.activities = action.payload.UserActivity;
    },
    [fetchUserActivity.rejected]: (state, action) => {
      state.isActivityLoading = false;
      state.isActivityLoadingFailed = false;
    },

    [updateBidStatus.fulfilled]: (state, action) => {
      state.activities = action.payload.UserActivity;
    },
  },
});

export default artistProfileSlice.reducer;
