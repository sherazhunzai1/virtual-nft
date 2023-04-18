import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { postNFTDetailsAPI } from "../../HTTP/APIs";

import { uploadMetadataToIPFS, uploadNftToIPFS } from "../../ipfs";
import { readFileAsync } from "../../Utilites";
import { createAnAuction } from "./auction.actions";
import { createFixPriceSale } from "./nftSale.actions";

// token id
// https://etherscan.io/token/0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405?a=101552

// tx
// https://rinkeby.etherscan.io/tx/0x41b2682b234f0e3edb0bac7b050cf8887d7e6469b529aae2fbe1ee0d660fc6d8

export const mintNFT = createAsyncThunk(
  "Mint/mintnft",
  async (
    {
      nftTitle,
      description,
      imageFile,
      isOnSale,
      isAuction,
      days,
      hours,
      nftPrice,
    },
    { dispatch, getState }
  ) => {
    try {
      let {
        Auth: {
          user: { userId, username },
        },
        Contract: { marketContract },
        Wallet: { walletAddress },
        Web3Instance: { web3 },
      } = getState();

      const fileBuffer = await readFileAsync(imageFile);
      let imgBffr = await Buffer(fileBuffer);
      const imageURI = await uploadNftToIPFS(imageFile.name, imgBffr);

      const matadataURI = await uploadMetadataToIPFS({
        nftTitle,
        description,
        imageURI,
      });

      const res = await marketContract.methods
        .mint(matadataURI)
        .send({ from: walletAddress });

      const txHash = res.transactionHash;
      const nftTokenId = res.events.Mint.returnValues.tokenId;

      let fd = new FormData();
      fd.append("transactionHash", txHash);
      fd.append("artworkName", nftTitle);
      fd.append("description", description);
      fd.append("metadataUri", matadataURI);
      fd.append("imageUri", imageURI);
      fd.append("creatorId", userId);
      fd.append("tockenId", nftTokenId);
      fd.append("sale", isOnSale);
      fd.append("isAuction", isAuction);

      dispatch(saveNFTDetailsToDB(fd));

      setTimeout(() => {
        dispatch(clearMintState());
      }, 2000);

      if (isOnSale) {
        const priceInWei = web3.utils.toWei(nftPrice.toString(), "ether");

        if (isAuction) {
          const _endTimeInSeconds = (Number(days) * 24 + Number(hours)) * 3600;
          dispatch(
            createAnAuction({
              tokenId: nftTokenId,
              priceInWei,
              _endTimeInSeconds,
            })
          );
        } else {
          dispatch(createFixPriceSale({ tokenId: nftTokenId, priceInWei }));
        }
      }

      return { nftTitle, username, isOnSale, isAuction };
    } catch (error) {
      setTimeout(() => {
        dispatch(clearMintState());
      }, 2000);

      throw error;
    }
  }
);

export const saveNFTDetailsToDB = createAsyncThunk(
  "mint/saveNFTDetailsToDB",
  async (payload) => {
    try {
      const res = await postNFTDetailsAPI(payload);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

export const clearMintState = createAction("mint/clearMintState");

export const getIsApproveForAll = createAsyncThunk(
  "mint/getIsApproveForAll",
  async (payload, { getState }) => {
    const {
      Wallet: { walletAddress },
      Contract: { nftContract, marketContractAddress },
    } = getState();

    try {
      const res = await nftContract.methods
        .isApprovedForAll(walletAddress, marketContractAddress)
        .call();
      return res;
    } catch (error) {
      throw error;
    }
  }
);

export const setApprovedForAll = createAsyncThunk(
  "mint/setApprovedForAll",
  async ({ isApprove }, { getState }) => {
    const {
      Wallet: { walletAddress },
      Contract: { nftContract, marketContractAddress },
    } = getState();

    const res = await nftContract.methods
      .setApprovalForAll(marketContractAddress, isApprove)
      .send({ from: walletAddress });

    return res.events.ApprovalForAll.returnValues.approved;
  }
);

export const hasRole = createAsyncThunk(
  "mint/hasRole",
  async ({ role, address }, { getState }) => {
    const {
      Contract: { marketContract },
    } = getState();
    try {
      const res = await marketContract.methods.hasRole(role, address).call();

      return res;
    } catch (error) {
      throw error;
    }
  }
);
export const resetSaveNFTDetailsToDB = createAction(
  "mint/resetSaveNFTDetailsToDB"
);
