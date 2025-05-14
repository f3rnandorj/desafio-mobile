import {
  Keyboard,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import {useModal} from "@services";

import {Text} from "@components";
import {useAppSafeArea, useKeyboardStatus} from "@hooks";

import {Divider, ModalContainer, ModalContent, ModalHeader} from "./styles";

export function BaseModal() {
  const {modal, hideModal} = useModal();
  const {top, bottom} = useAppSafeArea();
  const isKeyboardOpen = useKeyboardStatus();

  if (!modal) {
    return null;
  }

  const {
    content: Content,
    style,
    heightPercentage,
    title,
    ...modalProps
  } = modal;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={hideModal}
      {...modalProps}>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        disabled={!isKeyboardOpen}>
        <ModalContainer>
          <Pressable
            style={{flex: 1}}
            onPress={isKeyboardOpen ? Keyboard.dismiss : hideModal}
          />

          <ModalContent
            heightPercentage={heightPercentage || 0.5}
            style={{paddingBottom: bottom}}>
            {title && (
              <ModalHeader style={{paddingTop: top}}>
                <Text preset="heading2">{title}</Text>
              </ModalHeader>
            )}

            <Divider />

            <View style={style}>
              <Content />
            </View>
          </ModalContent>
        </ModalContainer>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
