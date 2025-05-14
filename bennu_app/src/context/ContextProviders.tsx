import {ModalProvider} from "@services";

interface Props {
  children: React.ReactNode;
}

export function ContextProviders({children}: Props) {
  return <ModalProvider>{children}</ModalProvider>;
}
