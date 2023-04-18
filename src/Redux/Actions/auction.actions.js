import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  postAuctionToAPI,
  saveAuctionSettleToDBAPI,
  saveAuctionToDBAPI,
} from "../../HTTP/APIs";

// 0x137b9F2D7710e8a8e5930CCC5E617b13042AeED4
// old contract address with money

/**
 * @dev action to create auction
 * @param  tokenId is the id of token
 * @param  priceInWei is the amount to bid on nft
 * @param  _endTimeInSeconds number of seconds for the auction to be valid
 */
export const createAnAuction = createAsyncThunk(
  "auction/createAnAuction",
  async (
    {
      tokenId,
      priceInWei,
      _endTimeInSeconds,
      artId,
      creator_username,
      art_name,
    },
    { dispatch, getState }
  ) => {
    let {
      Contract: { marketContract },
      Wallet: { walletAddress },
      Web3Instance: { web3 },
    } = getState();

    try {
      const res = await marketContract.methods
        .createAuction(tokenId, priceInWei, _endTimeInSeconds)
        .send({ from: walletAddress });

      const txHash = res.transactionHash;
      const auctionResData = res.events.AuctionCreated.returnValues;

      const {
        _auctionId,
        _reservePrice,
        _endTimeInSeconds: endTime,
        _owner,
        _tokenId,
      } = auctionResData;
      const reservePriceInEther = web3.utils.fromWei(_reservePrice, "ether");

      let fd = new FormData();
      fd.append("owner", _owner);
      fd.append("transactionHash", txHash);
      fd.append("auctionId", _auctionId);
      fd.append("reservePrice", reservePriceInEther);
      fd.append("endTimeInSeconds", endTime);
      fd.append("tokenId", _tokenId);
      dispatch(postAuction(fd));

      setTimeout(() => {
        dispatch(resetState());
      }, 5000);
      return { artId, creator_username, art_name };
    } catch (error) {
      setTimeout(() => {
        dispatch(resetState());
      }, 2000);
      throw error;
    }
  }
);

/**
 * @dev action to settle auction after completion
 * @param  auctionId is the id of auction
 * @param  price is the amount to bid on nft
 */
export const placeBid = createAsyncThunk(
  "auction/placeBid",
  async (
    { auctionId, price, artId, creator_username, art_name },
    { dispatch, getState }
  ) => {
    let {
      Contract: { marketContract },
      Wallet: { walletAddress },
      Web3Instance: { web3 },
    } = getState();

    try {
      const priceInWei = web3.utils.toWei(price.toString(), "ether");
      const res = await marketContract.methods
        .placeBid(auctionId)
        .send({ from: walletAddress, value: priceInWei });

      const txHash = res.transactionHash;
      const placeBidResData = res.events.PlacedBid.returnValues;

      const { _bidder, _bid } = placeBidResData;
      const bidInEth = web3.utils.fromWei(_bid, "ether");

      let fd = new FormData();
      fd.append("transactionHash", txHash);
      fd.append("auctionId", auctionId);
      fd.append("bidderId", _bidder);
      fd.append("price", bidInEth);
      dispatch(saveAuctionToDB(fd));
      setTimeout(() => {
        dispatch(resetState());
      }, 2000);
      return { artId, creator_username, art_name };
    } catch (error) {
      setTimeout(() => {
        dispatch(resetState());
      }, 2000);
      throw error;
    }
  }
);

/**
 * @dev action to settle auction after completion
 * @param  auctionId is the id of auction from which user want to withdraw bid
 */
export const settleAuction = createAsyncThunk(
  "auction/settleAuction",
  async (payload, { dispatch, getState }) => {
    let {
      Contract: { marketContract },
      Wallet: { walletAddress },
      Web3Instance: { web3 },
    } = getState();

    try {
      const res = await marketContract.methods
        .settleAuction(Number(payload))
        .send({ from: walletAddress });

      const txHash = res.transactionHash;

      const settleAuctionResData = res.events.AuctionSettled.returnValues;
      const { _finalHighestBid, _owner, _winner, _auctionId, _tokenId } =
        settleAuctionResData;
      const amountInEth = web3.utils.fromWei(_finalHighestBid, "ether");

      let fd = new FormData();
      fd.append("transactionHash", txHash);
      fd.append("transferFrom", _owner);
      fd.append("transferTo", _winner);
      fd.append("auctionId", _auctionId);
      fd.append("amount", amountInEth);
      fd.append("tokenId", _tokenId);

      dispatch(saveAuctionSettleToDB(fd));

      setTimeout(() => {
        dispatch(resetState());
      }, 2000);
      return settleAuctionResData;
    } catch (error) {
      setTimeout(() => {
        dispatch(resetState());
      }, 2000);
      throw error;
    }
  }
);

/**
 * @dev action to withdraw auction bid on the completion of the auction
 * @param {Object} auctionId is the id of auction from which user want to withdraw bid
 */
export const withdrawAuctionBid = createAsyncThunk(
  "auction/withdrawAuctionBid",
  async ({ auctionId }, { dispatch, getState }) => {
    let {
      // Auth: {
      //   user: { userId },
      // },
      Contract: { marketContract },
      Wallet: { walletAddress },
    } = getState();

    try {
      const res = await marketContract.methods
        .withdrawLostAuctionBid(auctionId)
        .send({ from: walletAddress });

      const withdrawAuctionBidResData =
        res.events.WithdrewAuctionBid.returnValues;

      setTimeout(() => {
        dispatch(resetState());
      }, 2000);

      return withdrawAuctionBidResData;
    } catch (error) {
      setTimeout(() => {
        dispatch(resetState());
      }, 2000);
      throw error;
    }
  }
);

export const postAuction = createAsyncThunk(
  "auction/postAuction",
  async (payload) => {
    const res = await postAuctionToAPI(payload);
    return res;
  }
);

const saveAuctionToDB = createAsyncThunk(
  "auction/saveAuctionToDB",
  async (payload) => {
    const res = await saveAuctionToDBAPI(payload);
    return res;
  }
);

const saveAuctionSettleToDB = createAsyncThunk(
  "auction/saveAuctionSettleToDB",
  async (payload) => {
    const res = await saveAuctionSettleToDBAPI(payload);
    return res;
  }
);

export const resetState = createAction("auction/resetState");
