import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { postFixPriceSaleAPI, savePurchaseToDBAPI } from "../../HTTP/APIs";
/**
 * @dev action to create fix price sell
 * @param  tokenId is the id of token
 * @param  priceInWei is the amount to bid on nft
 */
export const createFixPriceSale = createAsyncThunk(
  "nftSale/createFixPriceSale",
  async (
    { tokenId, priceInWei, artId, creator_username, art_name },
    { dispatch, getState }
  ) => {
    let {
      Contract: { marketContract },
      Wallet: { walletAddress },
      Web3Instance: { web3 },
    } = getState();

    try {
      const res = await marketContract.methods
        .createFixPriceSale(tokenId, priceInWei)
        .send({ from: walletAddress });

      const txHash = res.transactionHash;
      const createFixPriceSaleRes = res.events.SetForFixPriceSale.returnValues;

      const { _tokenId, _amount, _owner, fixPriceSaleId } =
        createFixPriceSaleRes;

      const price = web3.utils.fromWei(_amount, "ether");

      let fd = new FormData();
      fd.append("transactionHash", txHash);
      fd.append("saleId", fixPriceSaleId);
      fd.append("owner", _owner);
      fd.append("price", price);
      fd.append("tokenId", _tokenId);

      dispatch(postFixPriceSale(fd));

      setTimeout(() => {
        dispatch(resetState());
      }, 2000);
      return { art_name, creator_username, artId };
    } catch (error) {
      setTimeout(() => {
        dispatch(resetState());
      }, 2000);
      throw error;
    }
  }
);

/**
 * @dev action to create fix price sell
 * @param  saleId is id of the valid sale
 * @param  priceInWei is the amount to bid on nft
 */
export const purchaseNFT = createAsyncThunk(
  "nftSale/purchaseNFT",
  async (
    { saleId, price, artId, creator_username, art_name },
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
        .purchaseNFT(saleId)
        .send({ from: walletAddress, value: priceInWei });

      const txHash = res.transactionHash;
      const purchaseNFTRes = res.events.PurchasedNFT.returnValues;

      const { _fixPriceSaleId, _seller, _buyer, _tokenId, _amount } =
        purchaseNFTRes;
      const priceInEth = web3.utils.fromWei(_amount, "ether");

      let fd = new FormData();
      fd.append("transactionHash", txHash);
      fd.append("transferFrom", _seller);
      fd.append("transferTo", _buyer);
      fd.append("saleId", _fixPriceSaleId);
      fd.append("tokenId", _tokenId);
      fd.append("amount", priceInEth);

      dispatch(savePurchaseToDB(fd));
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
 * @dev to cancel the fix price sale of the  NFT
 * @param saleId id of sale
 */
export const cancelFixPriceSale = createAsyncThunk(
  "nftSale/cancelFixPriceSale",
  async ({ saleId }, { dispatch, getState }) => {
    let {
      // Auth: {
      //   user: { userId },
      // },
      Contract: { marketContract },
      Wallet: { walletAddress },
    } = getState();

    try {
      const res = await marketContract.methods
        .cancelFixPriceSale(saleId)
        .send({ from: walletAddress });
      const cancelFixPriceSaleRes = res.events.SaleCanceled.returnValues;
      return cancelFixPriceSaleRes;
    } catch (error) {
      throw error;
    }
  }
);

export const postFixPriceSale = createAsyncThunk(
  "nftSale/postFixPriceSale",
  async (payload) => {
    const res = await postFixPriceSaleAPI(payload);
    return res;
  }
);

export const savePurchaseToDB = createAsyncThunk(
  "nftSale/savePurchaseToDB",
  async (payload) => {
    const res = await savePurchaseToDBAPI(payload);
    return res;
  }
);

export const resetState = createAction("nftSale/resetState");
