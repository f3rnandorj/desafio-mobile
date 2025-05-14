import {Keyboard, Modal, TouchableWithoutFeedback, View} from "react-native";

import {useModal} from "@services";

import {Icon, Text} from "@components";
import {useAppSafeArea, useKeyboardStatus} from "@hooks";

import {Divider, ModalContainer, ModalContent, ModalHeader} from "./styles";

export function BaseModal() {
  const {modal, hideModal} = useModal();
  const {top, bottom} = useAppSafeArea();
  const isKeyboardOpen = useKeyboardStatus();

  if (!modal) {
    return null;
  }

  const {content: Content, style, ...modalProps} = modal;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={hideModal}
      {...modalProps}>
      <TouchableWithoutFeedback
        onPress={isKeyboardOpen ? Keyboard.dismiss : hideModal}>
        <ModalContainer>
          <ModalContent style={{paddingTop: top, paddingBottom: bottom}}>
            <ModalHeader>
              <Text preset="heading3">Title</Text>

              <Icon
                name="ticket-simple"
                size={24}
                color="gray400"
                iconStyle="solid"
                onPress={() => {}}
              />
            </ModalHeader>

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
