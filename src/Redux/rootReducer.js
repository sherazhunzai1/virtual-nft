import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./Reducers/auth.slicer";
import WalletReducer from "./Reducers/wallet.slicer";
import Web3Reducer from "./Reducers/web3.slicer";
import HomeReducer from "./Reducers/home.slicer";
import ContractReducer from "./Reducers/contract.slicer";
import ArtistProfileReducer from "./Reducers/artistProfile.slicer";
import MintReducer from "./Reducers/mint.slicer";
import ArtworkReducer from "./Reducers/artwork.slicer";
import MarketReducer from "./Reducers/market.slicer";
import ArtistsReducer from "./Reducers/artists.slicer";
import AuctionReducer from "./Reducers/auction.slicer";
import NftSaleReducer from "./Reducers/nftSale.slicer";
import NftArtReducer from "./Reducers/nftArt.slicer";

const rootReducer = combineReducers({
  Auth: AuthReducer,
  Auction: AuctionReducer,
  Artists: ArtistsReducer,
  ArtistProfile: ArtistProfileReducer,
  Artwork: ArtworkReducer,
  Contract: ContractReducer,
  Home: HomeReducer,
  Market: MarketReducer,
  NftSale: NftSaleReducer,
  Mint: MintReducer,
  Wallet: WalletReducer,
  Web3Instance: Web3Reducer,

  NftArt: NftArtReducer,
});
export default rootReducer;
