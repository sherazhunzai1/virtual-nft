import { createAsyncThunk } from "@reduxjs/toolkit";
import marketABI from "../../Assets/ABIs/market.abi.json";
import nftABI from "../../Assets/ABIs/nft.abi.json";

export const initContract = createAsyncThunk(
  "contract/initContract",
  async (_, { getState }) => {
    const {
      Contract: { marketContractAddress, nftContractadAddress },
      Web3Instance: { web3 },
    } = getState();

    let marketContract = null,
      nftContract = null;
    if (web3) {
      marketContract = new web3.eth.Contract(marketABI, marketContractAddress);
      nftContract = new web3.eth.Contract(nftABI, nftContractadAddress);
    }

    return { marketContract, nftContract };
  }
);

// for test

export const grantRoleMarket = createAsyncThunk(
  "contract/grantRoleMarket",
  async (payload, { getState }) => {
    const {
      Wallet: { walletAddress },
      Contract: { marketContract },
    } = getState();
    try {
      await marketContract.methods
        .grantRole(
          "0x877a78dc988c0ec5f58453b44888a55eb39755c3d5ed8d8ea990912aa3ef29c6",
          payload
        )
        .send({
          from: walletAddress,
        });
    } catch (error) {
      throw error;
    }
  }
);

export const revokeRoleMarket = createAsyncThunk(
  "contract/revokeRoleMarket",
  async (payload, { getState }) => {
    const {
      Wallet: { walletAddress },
      Contract: { marketContract },
    } = getState();
    try {
      const res = await marketContract.methods
        .revokeRole(
          "0x877a78dc988c0ec5f58453b44888a55eb39755c3d5ed8d8ea990912aa3ef29c6",
          payload
        )
        .send({
          from: walletAddress,
        });
      return res;
    } catch (error) {
      throw error;
    }
  }
);

export const grantRoleNft = createAsyncThunk(
  "contract/grantRoleNft",
  async (payload, { getState }) => {
    const {
      Wallet: { walletAddress },
      Contract: { nftContract },
    } = getState();
    try {
      const res = await nftContract.methods
        .grantRole(
          "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6",
          payload
        )
        .send({
          from: walletAddress,
        });
      return res;
    } catch (error) {
      throw error;
    }
  }
);

export const revokeRolenft = createAsyncThunk(
  "contract/revokeRolenft",
  async (payload, { getState }) => {
    const {
      Wallet: { walletAddress },
      Contract: { nftContract },
    } = getState();
    try {
      const res = await nftContract.methods
        .revokeRole(
          "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6",
          payload
        )
        .send({
          from: walletAddress,
        });

      return res;
    } catch (error) {
      throw error;
    }
  }
);
