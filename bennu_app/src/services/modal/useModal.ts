import {useContext} from "react";

import {ModalContext} from "./modalProvider";
import {ModalService} from "./modalTypes";

export function useModal(): ModalService {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("Modal must be used within a ModalProvider");
  }

  return context;
}
