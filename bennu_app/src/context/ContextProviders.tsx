import {AlertProvider, ModalProvider} from "@services";

interface Props {
  children: React.ReactNode;
}

export function ContextProviders({children}: Props) {
  return (
    <ModalProvider>
      <AlertProvider>{children}</AlertProvider>
    </ModalProvider>
  );
}
