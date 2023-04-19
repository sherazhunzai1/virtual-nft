import React from "react";
import {
  Backdrop,
  Checkbox,
  CircularProgress,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import RegisterInput from "../InputField/Register";
import PrimaryButton from "../Buttons/PrimaryButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useStyles } from "./styles";
import cn from "classnames";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { postSignup, getLoggedIn } from "../../Redux/Actions/auth.actions";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import {
  checkEmailOnApi,
  checkUsernameOnApi,
  checkWalletAddressOnApi,
} from "../../HTTP/APIs";

export const SignUpForm = ({ handleBack }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const validationSchema = yup.object({
    fullname: yup.string("").required("Full Name is required"),
    email: yup
      .string("")
      .required("Email is required.")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
        "Invalid Email. Please check it again."
      ),
    username: yup
      .string("")
      .required("Username is required.")
      .matches(
        /^[a-zA-Z0-9_]{3,15}$/,
        "username can only have alphanumeric and _."
      ),
    password: yup
      .string("")
      .required("Password is required")
      .min(7, "Password must be at least 7 characters"),
    walletAddress: yup
      .string("")
      .required("Wallet address is Required")
      .matches(
        "0x[0-9a-fA-F]{40}",
        "Your Wallet address is incorrect. Please check it."
      ),
  });
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      username: "",
      password: "",
      walletAddress: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      let formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("username", values.username);
      formData.append("fullName", values.fullname);
      formData.append("wallet_addresss", values.walletAddress);
      if (!(username && email && walletAddress)) {
        await dispatch(postSignup(formData));
        formik.resetForm();
      }
    },
  });

  const [{ username, email, walletAddress }, setCheckForm] = React.useState({
    username: false,
    email: false,
    walletAddress: false,
  });

  const handleFormChange = async (e) => {
    if (e.target.name === "username") {
      const username = e.target.value;
      try {
        const { data } = await checkUsernameOnApi(username);

        setCheckForm((p) => ({ ...p, username: data?.usernameExist }));
      } catch (error) {
        setCheckForm((p) => ({ ...p, username: false }));
      }
    } else if (e.target.name === "email") {
      const email = e.target.value;

      try {
        const { data } = await checkEmailOnApi(email);
        setCheckForm((p) => ({ ...p, email: data?.emailExist }));
      } catch (error) {
        setCheckForm((p) => ({ ...p, email: false }));
      }
    } else if (e.target.name === "walletAddress") {
      const walletAddress = e.target.value;

      try {
        const { data } = await checkWalletAddressOnApi(walletAddress);
        setCheckForm((p) => ({ ...p, walletAddress: data?.walletExist }));
      } catch (error) {
        setCheckForm((p) => ({ ...p, walletAddress: false }));
      }
    }
  };

  const {
    signupMessage,
    isPostingSignUpSuccess,
    isPostingSignUpFailed,
    isPostingSignUp,
  } = useSelector((state) => state.Auth);
  const messageClass = cn({
    success: isPostingSignUpSuccess && !isPostingSignUpFailed,
    error: !isPostingSignUpSuccess && isPostingSignUpFailed,
  });

  const getWalletAddress = () => {
    // Check if Metamask is installed
    if (typeof window.ethereum !== "undefined") {
      console.log("Metamask is installed!");

      // Get the user's wallet address
      window.ethereum
        .request({ method: "eth_accounts" })
        .then((accounts) => {
          if (accounts.length > 0) {
            const walletAddress = accounts[0];

            formik.setFieldValue("walletAddress", walletAddress);
          } else {
            console.log("No accounts found");
          }
        })
        .catch((error) => {
          console.error("Failed to get accounts:", error);
        });
    } else {
      console.log("Metamask is not installed");
    }
  };
  return (
    <>
      <div className={classes.formInner}>
        <div className={classes.formHeads}>
          <IconButton onClick={handleBack} className={classes.arrowBack}>
            <ArrowBackIcon fontSize="small" />
          </IconButton>
          <h1 className={classes.formHead}>Register</h1>
          <h3 className={classes.formPhrase}>
            {signupMessage ? (
              <span className={messageClass}>{signupMessage}</span>
            ) : (
              "Don't have an Account?"
            )}
          </h3>
        </div>
        <form onSubmit={formik.handleSubmit} onChange={handleFormChange}>
          <div className={classes.inputs}>
            <RegisterInput
              autoComplete="off"
              type="text"
              label="Full Name"
              onChange={formik.handleChange}
              name="fullname"
              value={formik.values.fullname}
              helperText={formik.touched.fullname && formik.errors.fullname}
              error={formik.touched.fullname && Boolean(formik.errors.fullname)}
            />

            <RegisterInput
              autoComplete="off"
              type="text"
              label="Username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="username"
              value={formik.values.username}
              helperText={
                (formik.touched.username && formik.errors.username) ||
                (formik.values.username &&
                  username &&
                  "Username already exists.")
              }
              error={
                (formik.touched.username && Boolean(formik.errors.username)) ||
                username
              }
            />
            <RegisterInput
              autoComplete="off"
              fullWidth
              label="Wallet Address (EOA)"
              type="text"
              name="walletAddress"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <AccountBalanceWalletIcon onClick={getWalletAddress} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={formik.values.walletAddress}
              helperText={
                (formik.touched.walletAddress && formik.errors.walletAddress) ||
                (formik.values.walletAddress &&
                  walletAddress &&
                  "Wallet Address already exists")
              }
              error={
                (formik.touched.walletAddress &&
                  Boolean(formik.errors.walletAddress)) ||
                walletAddress
              }
              onChange={formik.handleChange}
            />
            <RegisterInput
              autoComplete="off"
              type="Email"
              label="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email"
              value={formik.values.email}
              helperText={
                (formik.touched.email && formik.errors.email) ||
                (formik.values.email && email && "Email already exists.")
              }
              error={
                (formik.touched.email && Boolean(formik.errors.email)) || email
              }
            />

            <RegisterInput
              autoComplete="off"
              type="password"
              label="Password"
              onChange={formik.handleChange}
              name="password"
              value={formik.values.password}
              helperText={formik.touched.password && formik.errors.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
            />
          </div>
          <div className={classes.btnWrap}>
            <PrimaryButton
              type="submit"
              primary
              className="btn"
              title="Sign Up"
            />
          </div>
        </form>
      </div>

      {isPostingSignUp && (
        <Backdrop className={classes.backdrop} open={isPostingSignUp}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};

export const SignInForm = ({ handleResetPassword, handleModalClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    email: yup
      .string("")
      .required("Email is required.")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
        "Invalid Email. Please check it again."
      ),

    password: yup.string("").required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      let formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);
      const res = await dispatch(getLoggedIn(formData));
      if (res.type !== "Auth/getLoggedIn/rejected") {
        formik.resetForm();
        handleModalClose();
      }
    },
  });
  const { isSignInLoading, isSignInFailed, signinMessage } = useSelector(
    (state) => state.Auth
  );
  const messageClass = cn({
    error: isSignInFailed,
  });
  return (
    <>
      <div className={classes.formInner}>
        <div className={classes.formHeads}>
          <h1 className={classes.formHead}>Sign In</h1>
          <h3 className={classes.formPhrase}>
            {signinMessage ? (
              <span className={messageClass}>{signinMessage}</span>
            ) : (
              "Welcome we missed you!"
            )}
          </h3>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className={classes.inputs}>
            <RegisterInput
              autoComplete="off"
              type="Email"
              label="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email"
              value={formik.values.email}
              helperText={formik.touched.email && formik.errors.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
            />
            <RegisterInput
              autoComplete="off"
              type="password"
              label="Password"
              onChange={formik.handleChange}
              name="password"
              value={formik.values.password}
              helperText={formik.touched.password && formik.errors.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
            />
            <div className={classes.checkForgot}>
              <div className={classes.remember}>
                <Checkbox color="primary" />
                Remember me
              </div>
              <span onClick={handleResetPassword}>Forgot Password?</span>
            </div>
          </div>

          <div className={classes.btnWrap}>
            <PrimaryButton
              type="submit"
              className="btn"
              secondary
              title="Sign In"
            />
          </div>
        </form>
      </div>

      {isSignInLoading && (
        <Backdrop className={classes.backdrop} open={isSignInLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};

export const ResetPassword = ({ onSignInClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.formInner}>
      <div className={classes.formHeads}>
        <IconButton onClick={onSignInClick} className={classes.arrowBack}>
          <ArrowBackIcon fontSize="small" />
        </IconButton>
        <h1 className={classes.formHead}>Forgot Password</h1>
        <h3 className={classes.formPhrase}>
          Enter the email address associated with your account.
        </h3>
      </div>
      <div className={classes.inputs}>
        <RegisterInput type="Email" label="Email" />
      </div>
      <div className={classes.btnWrap}>
        <PrimaryButton primary title="Submit" className="btn" />
        <PrimaryButton
          secondary
          title="Sign In"
          className="btn"
          onClick={onSignInClick}
          ClassName={classes.forgotsign}
        />
      </div>
    </div>
  );
};
