import { CircularProgress } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SnackbarProvider, useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { resetSaveNFTDetailsToDB } from "../../Redux/Actions/mint.actions";

export const AppNotifications = () => {
  return (
    <SnackbarProvider>
      <Root />
    </SnackbarProvider>
  );
};

const Root = () => {
  useMintStatus();
  useCreateSaleStatus();
  usePurchaseStatus();
  useCreateAuctionStatus();
  usePlaceBidStatus();
  useSettleAuctionStatus();
  useWithdrawingBidStatus();

  return <></>;
};

const useMintStatus = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const {
    Auction: { isAuctionCreated },
    NftSale: { isSaleCreated },
    Mint: {
      isNFTMinting,
      isNFTMintingSuccess,
      isNFTMintingFailed,
      userDetails: { nftTitle, username, isOnSale, isAuction },
      NftDetails: { nftId },
      isDataReadFromDb,
    },
  } = useSelector((state) => state);
  const history = useHistory();
  const loadingTost = (key) => (
    <>
      <CircularProgress sizes={10} />
    </>
  );

  const saleRef = useRef(false);

  const [values, setValue] = useState({});
  const handleNavigation = (title, id, createrName, fk) => {
    if (id) {
      const titleStrip = String(title)
        .trim()
        .replace(/[^a-zA-Z0-9 ]/g, "");
      const uri = `${titleStrip} ${id}`.split(" ").join("-");
      const path = `/@${createrName}/${uri}`;
      history.push(path);
      setValue({});
      dispatch(resetSaveNFTDetailsToDB());
      saleRef.current = false;
    }
  };

  useEffect(() => {
    if (isOnSale) {
      setValue({ nftTitle, nftId, username, isAuction });
    }
    if (values.isAuction && isAuctionCreated)
      handleNavigation(values.nftTitle, values.nftId, values.username);

    if (!values.isAuction && isSaleCreated)
      handleNavigation(values.nftTitle, values.nftId, values.username);
  }, [isAuction, isOnSale, isSaleCreated, isAuctionCreated, nftId]);

  useEffect(() => {
    let key = null;

    if (isOnSale) saleRef.current = isOnSale;

    if (isNFTMinting)
      key = enqueueSnackbar("minting is in progress.", {
        persist: true,
        action: loadingTost,
      });

    if (isNFTMintingSuccess) {
      key = enqueueSnackbar("NFT minted Successfully.", {
        variant: "success",
        persist: true,
      });
    }

    if (isNFTMintingFailed)
      key = enqueueSnackbar("An Error occurred while minting.", {
        variant: "error",
        persist: true,
      });

    if (!saleRef.current && isDataReadFromDb && nftId) {
      handleNavigation("NFT-art", nftId, "krama-creator");
    }

    return () => {
      closeSnackbar(key);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isNFTMinting,
    isNFTMintingSuccess,
    isNFTMintingFailed,
    isOnSale,
    dispatch,
    enqueueSnackbar,
    closeSnackbar,
    isDataReadFromDb,
    nftTitle,
    nftId,
    username,
    history,
  ]);
};

const usePurchaseStatus = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const {
    NftSale: {
      isPurchasing,
      isNftPurchased,
      isPurchasingFailed,
      purchasedArtId: { artId, creator_username, art_name },
    },
  } = useSelector((state) => state);
  const loadingTost = (key) => (
    <>
      <CircularProgress sizes={10} />
    </>
  );
  const history = useHistory();

  useEffect(() => {
    let key = null;
    const handleNavigation = (title, id, createrName) => {
      if (id) {
        const titleStrip = String(title)
          .trim()
          .replace(/[^a-zA-Z0-9 ]/g, "");
        const uri = `${titleStrip} ${id}`.split(" ").join("-");
        const path = `/@${createrName}/${uri}`;
        history.push(path);
      }
    };
    if (isPurchasing)
      key = enqueueSnackbar("Purchasing NFT is in progress.", {
        persist: true,
        action: loadingTost,
      });

    if (isNftPurchased) {
      handleNavigation(art_name, artId, creator_username);
      key = enqueueSnackbar("Successfully Purchased NFT.", {
        variant: "success",
        persist: true,
      });
    }

    if (isPurchasingFailed)
      key = enqueueSnackbar("An Error occurred while purchasing NFT.", {
        variant: "error",
        persist: true,
      });
    return () => {
      closeSnackbar(key);
    };
  }, [
    isPurchasing,
    isNftPurchased,
    isPurchasingFailed,
    art_name,
    artId,
    history,
    creator_username,
    dispatch,
    enqueueSnackbar,
    closeSnackbar,
  ]);
};

const useCreateSaleStatus = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const {
    NftSale: {
      isSaleCreating,
      isSaleCreated,
      isSaleCreationFailed,
      saleItemDetails: { art_name, creator_username, artId },
    },
  } = useSelector((state) => state);
  const history = useHistory();
  const loadingTost = (key) => (
    <>
      <CircularProgress sizes={10} />
    </>
  );

  useEffect(() => {
    const handleNavigation = (title, id, createrName) => {
      if (id) {
        const titleStrip = String(title)
          .trim()
          .replace(/[^a-zA-Z0-9 ]/g, "");
        const uri = `${titleStrip} ${id}`.split(" ").join("-");
        const path = `/@${createrName}/${uri}`;
        history.push(path);
      }
    };
    let key = null;
    if (isSaleCreating)
      key = enqueueSnackbar("Creating Sale is in progress.", {
        persist: true,
        action: loadingTost,
      });

    if (isSaleCreated) {
      handleNavigation(art_name, artId, creator_username);
      key = enqueueSnackbar("Successfully Created Sale.", {
        variant: "success",
        persist: true,
      });
    }

    if (isSaleCreationFailed)
      key = enqueueSnackbar("An Error occurred while creating Sale.", {
        variant: "error",
        persist: true,
      });

    return () => {
      closeSnackbar(key);
    };
  }, [
    isSaleCreating,
    isSaleCreated,
    isSaleCreationFailed,
    dispatch,
    art_name,
    artId,
    history,
    creator_username,
    enqueueSnackbar,
    closeSnackbar,
  ]);
};

const useCreateAuctionStatus = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const {
    Auction: {
      isAuctionCreating,
      isAuctionCreated,
      isAuctionCreationFailed,
      auctionItemData: { artId, creator_username, art_name },
    },
  } = useSelector((state) => state);

  const history = useHistory();
  const loadingTost = (key) => (
    <>
      <CircularProgress sizes={10} />
    </>
  );

  useEffect(() => {
    const handleNavigation = (title, id, createrName) => {
      if (id) {
        const titleStrip = String(title)
          .trim()
          .replace(/[^a-zA-Z0-9 ]/g, "");
        const uri = `${titleStrip} ${id}`.split(" ").join("-");
        const path = `/@${createrName}/${uri}`;
        history.push(path);
      }
    };
    let key = null;
    if (isAuctionCreating)
      key = enqueueSnackbar("Creating Auction is in progress.", {
        persist: true,
        action: loadingTost,
      });

    if (isAuctionCreated) {
      handleNavigation(art_name, artId, creator_username);
      key = enqueueSnackbar("Successfully Created Auction.", {
        variant: "success",
        persist: true,
      });
    }

    if (isAuctionCreationFailed)
      key = enqueueSnackbar("An Error occurred while Creating Auction.", {
        variant: "error",
        persist: true,
      });

    return () => {
      closeSnackbar(key);
    };
  }, [
    isAuctionCreating,
    isAuctionCreated,
    isAuctionCreationFailed,
    art_name,
    artId,
    history,
    creator_username,
    dispatch,
    enqueueSnackbar,
    closeSnackbar,
  ]);
};

const usePlaceBidStatus = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const {
    Auction: {
      isPlacingBid,
      isBidPlaced,
      isPlacingBidFailed,
      placeBidData: { artId, creator_username, art_name },
    },
  } = useSelector((state) => state);
  const history = useHistory();
  const loadingTost = (key) => (
    <>
      <CircularProgress sizes={10} />
    </>
  );

  useEffect(() => {
    const handleNavigation = (title, id, createrName) => {
      if (id) {
        const titleStrip = String(title)
          .trim()
          .replace(/[^a-zA-Z0-9 ]/g, "");
        const uri = `${titleStrip} ${id}`.split(" ").join("-");
        const path = `/@${createrName}/${uri}`;
        history.push(path);
      }
    };
    let key = null;
    if (isPlacingBid)
      key = enqueueSnackbar("Placing Bid is in progress.", {
        persist: true,
        action: loadingTost,
      });

    if (isBidPlaced) {
      handleNavigation(art_name, artId, creator_username);
      key = enqueueSnackbar("Successfully Placed Bid.", {
        variant: "success",
        persist: true,
      });
    }
    if (isPlacingBidFailed)
      key = enqueueSnackbar("An Error occurred while Placing Bid.", {
        variant: "error",
        persist: true,
      });

    return () => {
      closeSnackbar(key);
    };
  }, [
    isPlacingBid,
    isBidPlaced,
    isPlacingBidFailed,
    art_name,
    artId,
    history,
    creator_username,
    dispatch,
    enqueueSnackbar,
    closeSnackbar,
  ]);
};

const useSettleAuctionStatus = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const {
    Auction: { isSettlingAuction, isAuctionSettled, isSettlingAuctionFailed },
  } = useSelector((state) => state);

  const loadingTost = (key) => (
    <>
      <CircularProgress sizes={10} />
    </>
  );

  useEffect(() => {
    let key = null;
    if (isSettlingAuction)
      key = enqueueSnackbar("Settling Auction is in progress.", {
        persist: true,
        action: loadingTost,
      });

    if (isAuctionSettled)
      key = enqueueSnackbar("Successfully settled Auction.", {
        variant: "success",
        persist: true,
      });

    if (isSettlingAuctionFailed)
      key = enqueueSnackbar("An Error occurred while Settling Auction.", {
        variant: "error",
        persist: true,
      });

    return () => {
      closeSnackbar(key);
    };
  }, [
    isSettlingAuction,
    isAuctionSettled,
    isSettlingAuctionFailed,
    dispatch,
    enqueueSnackbar,
    closeSnackbar,
  ]);
};

const useWithdrawingBidStatus = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const {
    Auction: { widthDrawingBid, isBidWithDrawed, widthDrawingBidFailed },
  } = useSelector((state) => state);

  const loadingTost = (key) => (
    <>
      <CircularProgress sizes={10} />
    </>
  );

  useEffect(() => {
    let key = null;
    if (widthDrawingBid)
      key = enqueueSnackbar("withdrawing Bid is in progress.", {
        persist: true,
        action: loadingTost,
      });

    if (isBidWithDrawed)
      key = enqueueSnackbar("Successfully withdrew Bid.", {
        variant: "success",
        persist: true,
      });

    if (widthDrawingBidFailed)
      key = enqueueSnackbar("An Error occurred while withdrawing Bid.", {
        variant: "error",
        persist: true,
      });

    return () => {
      closeSnackbar(key);
    };
  }, [
    widthDrawingBid,
    isBidWithDrawed,
    widthDrawingBidFailed,

    dispatch,
    enqueueSnackbar,
    closeSnackbar,
  ]);
};
