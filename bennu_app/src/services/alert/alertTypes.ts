import {IconProps} from "@components";

export interface AlertService {
  alert: AlertProps | null;
  showAlert: (alert: AlertProps) => void;
  hideAlert: () => void;
}

export interface AlertProps {
  title?: string | undefined;
  icon?: IconProps;
  subTitle: string;
  acceptMessage?: string;
  cancelMessage?: string;
  isLoading?: boolean;
  action: {
    onConfirm: () => void;
    onCancel?: () => void;
  };
}
