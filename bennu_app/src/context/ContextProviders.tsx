import {AlertProvider, ModalProvider, ToastProvider} from "@services";

interface Props {
  children: React.ReactNode;
}

export function ContextProviders({children}: Props) {
  return (
    <ModalProvider>
      <AlertProvider>
        <ToastProvider>{children}</ToastProvider>
      </AlertProvider>
    </ModalProvider>
  );
}
