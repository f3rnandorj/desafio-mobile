export interface ToastService {
  toast: ToastProps | null;
  showToast: (toast: ToastProps) => void;
  hideToast: () => void;
}

export type ToastType = "success" | "error";
export type ToastPosition = "top" | "bottom";

export interface ToastProps {
  message?: string;
  type?: ToastType;
  position?: "top" | "bottom";
  duration?: number;
  action?: {
    title?: string;
    onPress?: () => void;
  };
}
