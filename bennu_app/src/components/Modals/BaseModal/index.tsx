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

import {GestureHandlerRootView} from "react-native-gesture-handler";

import {Text} from "@components";
import {GlobalServiceComponents} from "@context";
import {useAppSafeArea, useKeyboardStatus} from "@hooks";
import {useModal} from "@services";

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
      testID="base-modal"
      animationType="slide"
      transparent
      visible
      onRequestClose={hideModal}
      {...modalProps}>
      <GestureHandlerRootView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{flex: 1}}>
          <TouchableWithoutFeedback
            testID="modal-touchable-without-feedback"
            onPress={Keyboard.dismiss}>
            <ModalContainer testID="modal-container">
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

        <GlobalServiceComponents isInsideModal />
      </GestureHandlerRootView>
    </Modal>
  );
}
