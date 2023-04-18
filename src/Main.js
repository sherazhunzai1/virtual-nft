import React from "react";
import Routes from "./Routes";
import {
  useCheckSession,
  useInitilizeContract,
  useInitilizeWeb3,
  useListenMetaMaskChanges,
} from "./Utilites";
import { WrongNetworkNotification } from "./Components/NotificationModals/WrongNetworkModal";
import { AppNotifications } from "./Components/NotificationModals/AppNotifications";

const Main = () => {
  useCheckSession();
  useInitilizeWeb3();
  useInitilizeContract();
  useListenMetaMaskChanges();

  return (
    <>
      <Routes>
        <WrongNetworkNotification />
        <AppNotifications />
      </Routes>
    </>
  );
};

export default Main;
