import {useContext} from "react";

import {AlertContext} from "./alertProvider";
import {AlertService} from "./alertTypes";

export function useAlert(): AlertService {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error("Alert must be used within a AlertProvider");
  }

  return context;
}
