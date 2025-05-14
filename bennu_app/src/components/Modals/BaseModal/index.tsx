import {
  Keyboard,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import {Icon, Text} from "@components";

import {Divider, ModalContainer, ModalContent, ModalHeader} from "./styles";

interface BaseModalProps extends ModalProps {}

export function BaseModal({children, style, ...modalProps}: BaseModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {}}
      {...modalProps}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ModalContainer>
          <ModalContent>
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

            <View style={style}>{children}</View>
          </ModalContent>
        </ModalContainer>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
