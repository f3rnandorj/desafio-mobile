import {Alert, Toast} from "@components";
import {useModal} from "@services";

interface Props {
  isInsideModal?: boolean;
}

export function GlobalServiceComponents({isInsideModal = false}: Props) {
  const {modal} = useModal();

  if (isInsideModal && modal) {
    return (
      <>
        <Alert />
        <Toast isInsideModal={isInsideModal} />
      </>
    );
  }

  if (!isInsideModal && !modal) {
    return (
      <>
        <Alert />
        <Toast isInsideModal={isInsideModal} />
      </>
    );
  }

  return null;
}
