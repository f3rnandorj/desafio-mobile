import React, {createContext, useState} from "react";

import {AlertProps, AlertService} from ".";

export const AlertContext = createContext<AlertService>({
  alert: null,
  showAlert: () => {},
  hideAlert: () => {},
});

export function AlertProvider({children}: React.PropsWithChildren<{}>) {
  const [alert, setAlert] = useState<AlertService["alert"]>(null);

  function showAlert(_alert: AlertProps) {
    setAlert({..._alert});
  }

  function hideAlert() {
    setAlert(null);
  }

  return (
    <AlertContext.Provider value={{alert, showAlert, hideAlert}}>
      {children}
    </AlertContext.Provider>
  );
}
