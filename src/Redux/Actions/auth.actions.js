import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  checkUserSession,
  getLoggedInFromApi,
  postSignUpAPI,
} from "../../HTTP/APIs";
import { callActionWithDelay } from "../../Utilites";

export const postSignup = createAsyncThunk(
  "Auth/postSignUp",
  async (payload, { dispatch }) => {
    try {
      const res = await postSignUpAPI(payload);
      callActionWithDelay(dispatch, resetPostSignupState);

      return res;
    } catch (error) {
      const message = error?.response?.data?.message;
      let newError = (message && new Error(message)) || error;
      callActionWithDelay(dispatch, resetPostSignupState);
      throw newError;
    }
  }
);
export const resetPostSignupState = createAction("Auth/resetPostSignupState");

export const getLoggedIn = createAsyncThunk(
  "Auth/getLoggedIn",
  async (payload, { dispatch }) => {
    try {
      const res = await getLoggedInFromApi(payload);

      return { user: res.data };
    } catch (error) {
      const message = error?.response?.data?.message;
      let newError = (message && new Error(message)) || error;
      callActionWithDelay(dispatch, clearSigninState);
      throw newError;
    }
  }
);
export const clearSigninState = createAction("Auth/clearErrorMessage");

export const checkUserSessionAction = createAsyncThunk(
  "Auth/checkUserSession",
  async () => {
    const token = sessionStorage.getItem("boaxnftusertoken");
    const res = await checkUserSession(token);
    if (res.status === 204) throw new Error("Session is not valid");
    return { user: res.data };
  }
);
