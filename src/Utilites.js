import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUserSessionAction } from "./Redux/Actions/auth.actions";
import {
  grantRoleMarket,
  grantRoleNft,
  initContract,
  revokeRoleMarket,
  revokeRolenft,
} from "./Redux/Actions/contract.actions";
import {
  getFeatureCreators,
  getFixedPriceArts,
  getHomeAuctions,
  getMainAuction,
} from "./Redux/Actions/home.actions";
import {
  connectWallet,
  getWalletAccounts,
} from "./Redux/Actions/wallet.action";
import { getNetworkDetails, initWeb3 } from "./Redux/Actions/web3.actions";

export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
export default useScrollToTop;

export const useInitilizeWeb3 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await dispatch(initWeb3());
      await dispatch(getNetworkDetails());
      await dispatch(getWalletAccounts());
    })();
  }, [dispatch]);
};

export const useInitilizeContract = () => {
  const { web3, isVaildNetwork, networkName } = useSelector(
    (state) => state.Web3Instance
  );
  const dispatch = useDispatch();
  useEffect(() => {
    web3 && isVaildNetwork && dispatch(initContract());
  }, [web3, isVaildNetwork, networkName, dispatch]);
};

export const WalletAddressFormatter = (address) => {
  if (address) {
    return `${address.slice(0, 5)}...${address.slice(
      address.length - 5,
      address.length
    )}`;
  }
  return "";
};

export function callActionWithDelay(dispatch, action, delay = 2500) {
  if (dispatch && action)
    setTimeout(() => {
      dispatch(action());
    }, [delay]);
}

export const useFetchHomePageData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMainAuction());
    dispatch(getHomeAuctions());
    dispatch(getFixedPriceArts());
    dispatch(getFeatureCreators());
  }, [dispatch]);
};

export const useCheckSession = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSessionAction());
  }, [dispatch]);
};

export const useListenMetaMaskChanges = () => {
  const dispatch = useDispatch();

  const {
    Web3Instance: { web3 },
  } = useSelector((state) => state);

  useEffect(() => {
    // listen to network change in meta mask
    web3 &&
      window.ethereum &&
      window.ethereum.on("chainChanged", function (e) {
        dispatch(getNetworkDetails());
      });
    // listen to account change in meta mask
    web3 &&
      window.ethereum &&
      window.ethereum.on("accountsChanged", function () {
        dispatch(connectWallet({ web3 }));
      });
  }, [dispatch, web3]);
};

export const sortNftsByOption = (arts = [], option) => {
  const items = [...arts];
  switch (option) {
    case "Recently Listed":
      return items.sort((a, b) => {
        return new Date(a.createdAt) - new Date(b.createdAt).getTime();
      });

    case "Oldest Listings":
      return items.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt);
      });
    case "Price: high to low":
      return items.sort((a, b) => b.art_price - a.art_price);

    case "Price: Low to high":
      return items.sort((a, b) => a.art_price - b.art_price);

    case "Most viewed":
      return items.sort((a, b) => b.views - a.views);
    default:
      return items;
  }
};

export const sortArtistsByOption = (arts = [], option) => {
  const items = [...arts];

  switch (option) {
    case "Newest":
      return items.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt);
      });

    case "Alphabetic":
      return items.sort((a, b) => {
        if (a.username < b.username) {
          return -1;
        }
        if (a.username > b.username) {
          return 1;
        }
        return 0;
      });

    default:
      return items;
  }
};

/**
 * @dev reads the content of file asynchronously and returns a buffer
 * @param file to read asyn as a buffer
 * @returns buffer content
 */
export function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsArrayBuffer(file);
  });
}

export function threeToTwoDecimal(number) {
  if (!number) return number;
  number = String(Number(number).toFixed(3)).split(".");
  let decimal = number[1].split("");
  decimal[2] = decimal[2] === 0 ? "" : decimal[2];
  number[1] = decimal.join("");
  return number.join(".");
}

/**
 * @dev takes javascript Date Time object as argument and returns string 'December 1, 2021, 5:01 AM'
 * @param date is the Date Time object in javascript
 * @returns {string} formate Date
 */

export function formateDate(date = Date.now()) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date(date);

  return today.toLocaleDateString("en-US", options);
}

/**
 * @dev takes javascript milliseconds and returns days, hours, minutes, seconds
 * @param milliseconds is the number of milliseconds
 * @returns {object}   day, hour, minute, seconds
 */

export function convertMS(milliseconds) {
  let day, hour, minute, seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;
  return {
    day: day,
    hour: hour,
    minute: minute,
  };
}

export function Temp() {
  // remove it later

  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleGrantRole = () => {
    dispatch(grantRoleMarket(input));
  };
  const handleRevokeRole = () => {
    dispatch(revokeRoleMarket(input));
  };

  const handleRevokeRoleNft = () => {
    dispatch(revokeRolenft(input));
  };

  const handleGrantRoleNft = () => {
    dispatch(grantRoleNft(input));
  };
  // const [init, setInit] = useState("");

  // const handleInitlize = () => {
  //   dispatch(initilize(init));
  // };

  return (
    <>
      <h1 style={{ color: "red", marginTop: 30 }}>
        for contract integration only
      </h1>
      {/* <h1>----------------------------------------------------------------</h1>
      <input
        placeholder="contract address"
        type="text"
        value={init}
        onChange={(e) => {
          setInit(e.target.value);
        }}
        style={{ color: "red", padding: 10, marginBottom: 30 }}
      />
      <button style={{ padding: 10, color: "red" }} onClick={handleInitlize}>
        initilize Contract
      </button> */}

      <h1>----------------------------------------------------------------</h1>
      <input
        placeholder=" address"
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        style={{
          color: "black",
          padding: 10,
          marginBottom: 10,
          minWidth: "45ch",
        }}
      />
      <br />

      <button style={{ padding: 10, color: "green" }} onClick={handleGrantRole}>
        Grant Artist role
      </button>

      <button style={{ padding: 10, color: "red" }} onClick={handleRevokeRole}>
        revoke Artist role
      </button>

      <br />
      <span style={{ padding: 10 }} />
      <br />
      <button
        style={{ padding: 10, color: "green" }}
        onClick={handleGrantRoleNft}
      >
        Grant market place role
      </button>
      <button
        style={{ padding: 10, color: "red" }}
        onClick={handleRevokeRoleNft}
      >
        Revoke market place role
      </button>
    </>
  );
}

export function useFullscreenStatus(elRef) {
  const [isFullscreen, setIsFullscreen] = useState(
    document[getBrowserFullscreenElementProp()] != null
  );

  const setFullscreen = () => {
    if (elRef.current == null) return;

    elRef.current
      .requestFullscreen()
      .then(() => {
        setIsFullscreen(document[getBrowserFullscreenElementProp()] != null);
      })
      .catch(() => {
        setIsFullscreen(false);
      });
  };

  useLayoutEffect(() => {
    document.onfullscreenchange = () =>
      setIsFullscreen(document[getBrowserFullscreenElementProp()] != null);

    return () => (document.onfullscreenchange = undefined);
  });

  return [isFullscreen, setFullscreen];
}

function getBrowserFullscreenElementProp() {
  if (typeof document.fullscreenElement !== "undefined") {
    return "fullscreenElement";
  } else if (typeof document.mozFullScreenElement !== "undefined") {
    return "mozFullScreenElement";
  } else if (typeof document.msFullscreenElement !== "undefined") {
    return "msFullscreenElement";
  } else if (typeof document.webkitFullscreenElement !== "undefined") {
    return "webkitFullscreenElement";
  } else {
    throw new Error("fullscreenElement is not supported by this browser");
  }
}
