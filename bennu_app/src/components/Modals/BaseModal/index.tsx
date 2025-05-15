import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
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
      transparent
      visible
      onRequestClose={hideModal}
      {...modalProps}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ModalContainer>
            <Pressable
              style={{flex: 1}}
              onPress={isKeyboardOpen ? Keyboard.dismiss : hideModal}
            />

            <ModalContent
              heightPercentage={heightPercentage}
              style={{paddingBottom: bottom + 20}}>
              <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{flexGrow: 1}}>
                {title && (
                  <ModalHeader style={{paddingTop: top}}>
                    <Text preset="heading2">{title}</Text>
                  </ModalHeader>
                )}

                <Divider />

                <View style={style}>
                  <Content />
                </View>
              </ScrollView>
            </ModalContent>
          </ModalContainer>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
}
