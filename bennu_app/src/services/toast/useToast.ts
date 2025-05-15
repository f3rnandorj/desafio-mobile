import {useContext} from "react";

import {ToastContext} from "./toastProvider";
import {ToastService} from "./toastTypes";

export function useToast(): ToastService {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("Toast must be used within a ToastProvider");
  }

  return context;
}
