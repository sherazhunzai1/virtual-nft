import { KramaClient } from "./config";

export const postSignUpAPI = async (payload) => {
  try {
    const res = await KramaClient.post("/api/Creators/signup", payload);
    return res;
  } catch (error) {
    throw error;
  }
};

export const checkUsernameOnApi = async (payload) => {
  try {
    const res = await KramaClient.get("/api/Creators/username", {
      params: {
        username: payload,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const checkEmailOnApi = async (payload) => {
  try {
    const res = await KramaClient.get("/api/Creators/email", {
      params: {
        email: payload,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
export const checkWalletAddressOnApi = async (payload) => {
  try {
    const res = await KramaClient.get("/api/Creators/WalletExist", {
      params: {
        walletAddress: payload,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
export const getLoggedInFromApi = async (payload) => {
  try {
    const res = await KramaClient.post("/api/Creators/login", payload);
    return res;
  } catch (error) {
    throw error;
  }
};

export const checkUserSession = async (payload) => {
  let fd = new FormData();
  fd.append("Authorization", payload);
  const res = await KramaClient.post("/api/Creators/check_session.php", fd);
  return res;
};

export const checkUserWalletConnection = async (walletAddress, userId) => {
  let payload = new FormData();
  payload.append("walletAddress", walletAddress);
  payload.append("userId", userId);
  try {
    const res = await KramaClient.post("/api/Creators/walletLogin", payload);
    return res;
  } catch (error) {
    throw error;
  }
};
// home

export const getMainAuctionFromAPI = async () => {
  try {
    const res = await KramaClient.get("/api/homepage/MainAuction");
    return res;
  } catch (e) {
    throw e;
  }
};

export const getHomeAuctionsAPI = async () => {
  try {
    const res = await KramaClient.get("/api/artworks/liveAuctions");
    return res;
  } catch (error) {
    throw error;
  }
};
export const getFixedPriceArtsFromAPI = async () => {
  try {
    const res = await KramaClient.get("/api/artworks/fixedPrice");
    return res;
  } catch (error) {
    throw error;
  }
};

export const getHomeFeatureCreatorsAPI = async () => {
  try {
    const res = await KramaClient.get("/api/homepage/featureCreators");
    return res;
  } catch (error) {
    throw error;
  }
};
// edit profile
export const editCoverPicture = async (payload) => {
  try {
    const res = await KramaClient.post("/api/Creators/updateCover", payload);
    return res;
  } catch (error) {
    throw error;
  }
};

export const editProfilePicture = async (payload) => {
  try {
    const res = await KramaClient.post(
      "/api/Creators/updateProfilePic",
      payload
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const editProfile = async (payload) => {
  try {
    const res = await KramaClient.post("/api/Creators/updateProfile", payload);
    return res;
  } catch (error) {
    throw error;
  }
};

export const getUserProfileData = async (payload) => {
  try {
    const res = await KramaClient.get("/api/Creators/Profile", {
      params: {
        username: payload,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchUserActivityAPI = async (payload) => {
  const res = await KramaClient.get("/api/activity/useractivity", {
    params: {
      username: payload,
    },
  });
  return res;
};

export const getProfileArts = async (payload) => {
  try {
    const res = await KramaClient.get("/api/Creators/CreatorArts", {
      params: {
        username: payload,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

// mint

export const postNFTDetailsAPI = async (payload) => {
  try {
    const res = await KramaClient.post("/api/Creators/mint", payload);
    return res;
  } catch (error) {
    throw error;
  }
};

// auction
export const postAuctionToAPI = async (payload) => {
  try {
    const res = await KramaClient.post("/api/Creators/auction", payload);
    return res;
  } catch (error) {
    throw error;
  }
};

//  fix sale
export const postFixPriceSaleAPI = async (payload) => {
  try {
    const res = await KramaClient.post("/api/Creators/fixedprice", payload);
    return res;
  } catch (error) {
    throw error;
  }
};
// artwork

export const getArtById = async (payload) => {
  try {
    const res = await KramaClient.get("/api/artworks/singleNft", {
      params: { id: payload },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getArtHistoryById = async (payload) => {
  try {
    const res = await KramaClient.get("/api/artworks/history", {
      params: { id: payload },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

// market

export const getMarketAuctionArtsAPI = async (payload) => {
  try {
    const res = await KramaClient.get("/api/artworks/market", {
      params: { pageno: payload },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
export const getMarketFixPriceArtsAPI = async (payload) => {
  try {
    const res = await KramaClient.get("/api/artworks/check", {
      params: {
        pageno: payload,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const searchArtAPI = async (pageno, artName) => {
  try {
    const res = await KramaClient.get("/api/search/nftsearch", {
      params: {
        search: artName,
        pageno: pageno,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

// artists

export const getArtistsAPI = async (payload) => {
  try {
    const res = await KramaClient.get("/api/Creators/Creators", {
      params: { pageno: payload },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const searchArtistAPI = async (pageno, username) => {
  try {
    const res = await KramaClient.get("/api/search/searchCreator", {
      params: {
        pageno: pageno,
        search: username,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

//  auction

export const saveAuctionToDBAPI = async (payload) => {
  try {
    const res = await KramaClient.post("/api/artworks/addBid", payload);
    return res;
  } catch (error) {
    throw error;
  }
};

export const saveAuctionSettleToDBAPI = async (payload) => {
  try {
    const res = await KramaClient.post(
      "/api/artworks/auctionTransfer",
      payload
    );
    return res;
  } catch (error) {
    throw error;
  }
};

// purchase nft
export const savePurchaseToDBAPI = async (payload) => {
  try {
    const res = await KramaClient.post("/api/artworks/directTransfer", payload);
    return res;
  } catch (error) {
    throw error;
  }
};
export const updateBidStatusAPI = async ({ txHash, username }) => {
  try {
    const res = await KramaClient.get("/api/Creators/refund", {
      params: {
        txHash,
        username,
      },
    });

    return res;
  } catch (error) {
    throw error;
  }
};

export const subscriptionRequest = async (payload) => {
  try {
    const res = await KramaClient.get("/api/subscribe/subscribe.php", {
      params: {
        email: payload,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
// collect fund
export const filterNftsAPI = async ({
  listings,
  bidding,
  views,
  purchase,
  price,
}) => {
  try {
    const res = await KramaClient.get("/api/Filters/Filters.php", {
      params: {
        listing: listings,
        Bidding: bidding,
        views: views,
        Purchase: purchase,
        price: price,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
