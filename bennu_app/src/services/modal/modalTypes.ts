import {ModalProps as RNModalProps} from "react-native";

export interface ModalService {
  modal: ModalProps | null;
  showModal: (modal: ModalProps) => void;
  hideModal: () => void;
}

export interface ModalProps extends Omit<RNModalProps, "children"> {
  /**
   * O valor deve ser um número decimal entre 0 e 1.
   *
   * Exemplos:
   * - `0.5` representa 50% da altura da tela
   * - `0.75` representa 75% da altura da tela
   * - `1` representa 100% da altura da tela
   */
  heightPercentage?: number;
  content: () => React.JSX.Element;
  title?: string;
  headerRight?: React.ReactNode;
}
