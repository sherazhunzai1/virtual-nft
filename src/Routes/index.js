import React, { Suspense, lazy } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Header from "../Sections/Header";
import Footer from "../Sections/Footer";
import { CircularProgress } from "@material-ui/core";
import ESProjectai from "../Pages/EsProjectai";

const Home = lazy(() => import("../Pages/Home"));
const Market = lazy(() => import("../Pages/Market"));
const Artwork = lazy(() => import("../Pages/Artwork"));
const Profile = lazy(() => import("../Pages/Profile"));
const Mint = lazy(() => import("../Pages/Mint"));
const Artist = lazy(() => import("../Pages/Artists"));
const FAQ = lazy(() => import("../Pages/FAQ"));
const Terms = lazy(() => import("../Pages/Terms"));
const AboutUs = lazy(() => import("../Pages/About"));
const Help = lazy(() => import("../Pages/Help"));
const EditProfile = lazy(() => import("../Pages/EditProfile"));
const NftSaleForm = lazy(() => import("../Pages/NftSaleForm"));
const PlaceBid = lazy(() => import("../Pages/PlaceBid"));
const PurschaseNft = lazy(() => import("../Pages/PurchaseNft"));

const Routes = ({ children }) => {
  return (
    <Router>
      <Header />
      {children}
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact component={Home} />
          <Route path="/market" exact component={Market} />
          <Route path="/artist" exact component={Artist} />
          <Route path="/mint" exact component={Mint} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/help" exact component={Help} />
          <Route path="/faq" exact component={FAQ} />
          <Route path="/terms" exact component={Terms} />
          <Route path="/editprofile" exact component={EditProfile} />
          <Route path="/sell-nft/:artParams" exact component={NftSaleForm} />
          <Route path="/place-bid/:artParams" exact component={PlaceBid} />
          <Route
            path="/purchase-nft/:artParams"
            exact
            component={PurschaseNft}
          />
          <Route path="/es-projektai" exact component={ESProjectai} />
          <Route path="/*/:artParams" exact component={Artwork} />
          <Route path="/*" exact component={Profile} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default Routes;
