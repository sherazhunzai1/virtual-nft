import { createSlice } from "@reduxjs/toolkit";
import {
  checkUserSessionAction,
  clearSigninState,
  getLoggedIn,
  postSignup,
  resetPostSignupState,
} from "../Actions/auth.actions";
import { disconnectWallet } from "../Actions/wallet.action";

const initialState = {
  isPostingSignUp: false,
  isPostingSignUpSuccess: false,
  isPostingSignUpFailed: false,
  signupMessage: "",

  user: {
    userId: null,
    username: null,
    email: null,
    img: null,
    walletAddress: null,
    userType: null,
  },
  isSignInLoading: false,
  isSignInSuccess: false,
  isSignInFailed: false,
  signinMessage: "",

  isSessionLoading: false,
  isSessionLoadingFailed: false,
};

const authSuccess = (state, action) => {
  localStorage.setItem("boaxnftusertoken", action.payload?.user?.token);
  state.isSignInLoading = false;
  state.isSignInSuccess = true;
  state.user = action.payload.user;
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialState,

  extraReducers: {
    [postSignup.pending]: (state, action) => {
      state.isPostingSignUp = true;
      state.isPostingSignUpSuccess = false;
      state.isPostingSignUpFailed = false;
    },
    [postSignup.fulfilled]: (state, action) => {
      state.isPostingSignUp = false;
      state.isPostingSignUpSuccess = true;
      state.signupMessage = action.payload?.data?.message;
    },
    [postSignup.rejected]: (state, action) => {
      state.isPostingSignUp = false;
      state.isPostingSignUpFailed = true;
      state.signupMessage = action.error.message;
    },
    [resetPostSignupState]: (state, action) => {
      state.isPostingSignUp = false;
      state.isPostingSignUpSuccess = false;
      state.isPostingSignUpFailed = false;
      state.signupMessage = "";
    },
    [getLoggedIn.pending]: (state, action) => {
      state.isSignInLoading = true;
      state.isSignInSuccess = false;
      state.isSignInFailed = false;
    },
    [getLoggedIn.fulfilled]: authSuccess,
    [getLoggedIn.rejected]: (state, action) => {
      state.isSignInLoading = false;
      state.isSignInFailed = true;
      state.signinMessage = action.error.message;
    },

    [checkUserSessionAction.rejected]: (state, action) => {
      state.isSessionLoading = true;
      state.isSessionLoadingFailed = false;
    },
    [checkUserSessionAction.fulfilled]: (state, action) => {
      authSuccess(state, action);
      state.isSessionLoading = false;
    },
    [checkUserSessionAction.rejected]: (state, action) => {
      state.isSessionLoading = false;
      state.isSessionLoadingFailed = true;
    },

    [clearSigninState]: (state, action) => {
      state.isSignInLoading = false;
      state.isSignInFailed = false;
      state.signinMessage = "";
    },

    [disconnectWallet]: (state, action) => {
      state.isSignInLoading = false;
      state.isSignInSuccess = false;
      state.isSignInFailed = false;
      state.signinMessage = "";
      state.user = {
        userId: null,
        username: null,
        email: null,
        img: null,
        walletAddress: null,
        userType: null,
      };
      localStorage.clear();
    },
  },
});

export default AuthSlice.reducer;
