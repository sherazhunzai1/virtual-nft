import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import Web3 from "web3";

export const initWeb3 = createAsyncThunk("web3/initWeb3", async () => {
  try {
    const PROVIDER = window.ethereum;
    if (PROVIDER) {
      const web3 = new Web3(PROVIDER);

      const networkName = await web3.eth.net.getNetworkType();
      const networkId = await web3.eth.net.getId();

      return {
        web3,
        networkName,
        networkId,
      };
    } else {
      throw new Error("No Provider Found.");
    }
  } catch (err) {
    throw err;
  }
});

export const getNetworkDetails = createAsyncThunk(
  "web3/getNetworkDetails",
  async (_, { getState }) => {
    const {
      Web3Instance: { web3, validNetworkId },
    } = getState();
    // if there is web3 instance
    if (!web3)
      return {
        networkName: null,
        networkId: null,
      };

    const networkName = await web3.eth.net.getNetworkType();

    const networkId = await web3.eth.net.getId();

    if (networkName && networkId) {
      // if network is not mainnet
      if (networkId !== validNetworkId) throw new Error("WRONG_NETWORK");
    }

    return { networkName, networkId };
  }
);

export const clearNetworkMessage = createAction("web3/clearNetworkMessage");

// chain network configs
const networks = {
  main: {
    name: "Ethereum Mainnet",
    chain: "ETH",
    network: "mainnet",
    icon: "ethereum",
    rpc: [
      `https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
      `wss://mainnet.infura.io/ws/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
      "https://api.mycryptoapi.com/eth",
      "https://cloudflare-eth.com",
    ],
    faucets: [],
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    infoURL: "https://ethereum.org",
    shortName: "eth",
    chainId: "0x1",
    networkId: 1,
    slip44: 60,
    ens: { registry: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
    explorers: [
      { name: "etherscan", url: "https://etherscan.io", standard: "EIP3091" },
    ],
  },
  rinkeby: {
    name: "Ethereum Testnet Rinkeby",
    chain: "ETH",
    network: "rinkeby",
    rpc: [
      `https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
      `wss://rinkeby.infura.io/ws/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
    ],
    faucets: ["https://faucet.rinkeby.io"],
    nativeCurrency: { name: "Rinkeby Ether", symbol: "RIN", decimals: 18 },
    infoURL: "https://www.rinkeby.io",
    shortName: "rin",
    chainId: "0x4",
    networkId: 4,
    ens: { registry: "0xe7410170f87102df0055eb195163a03b7f2bff4a" },
    explorers: [
      {
        name: "etherscan-rinkeby",
        url: "https://rinkeby.etherscan.io",
        standard: "EIP3091",
      },
    ],
  },
};

export const changeChain = createAsyncThunk(
  "web3/changeChain",
  async (payload) => {
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");
      console.log("error");
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x13881" }],
      });
    } catch (err) {
      // if chain is not found
    }
  }
);
