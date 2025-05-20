import React, {useEffect} from "react";
import {BackHandler} from "react-native";

import {useAlert} from "@services";

import {Icon} from "../Icon";
import {Loading} from "../Loading";

import {
  AcceptButton,
  AcceptButtonText,
  ButtonsContainer,
  CancelButton,
  CancelButtonText,
  Container,
  Content,
  SubTitle,
  Title,
} from "./styles";

export function Alert() {
  const {alert, hideAlert} = useAlert();

  const onConfirm = () => {
    alert?.action.onConfirm();
  };

  const onCancel = () => {
    if (alert?.action?.onCancel) {
      alert?.action.onCancel();
      hideAlert();
    } else {
      hideAlert();
    }
  };

  useEffect(() => {
    const backAction = () => {
      hideAlert();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction,
    );

    return () => backHandler.remove();
  }, [hideAlert]);

  if (!alert) {
    return null;
  }

  if (!alert?.title && !alert?.icon?.name) {
    throw new Error("You must provide a title or an iconName");
  }

  return (
    <Container>
      <Content>
        {alert?.icon && <Icon {...alert.icon} size={40} />}
        {alert.title && <Title preset="heading2">{alert.title}</Title>}
        <SubTitle>{alert?.subTitle}</SubTitle>
        <ButtonsContainer>
          <AcceptButton
            testID="alert-accept-button"
            onPress={onConfirm}
            disabled={alert.isLoading}>
            {alert.isLoading ? (
              <Loading size="small" color="primary" />
            ) : (
              <AcceptButtonText bold color="primary">
                {alert.acceptMessage || "Confirmar"}{" "}
              </AcceptButtonText>
            )}
          </AcceptButton>

          <CancelButton testID="alert-cancel-button" onPress={onCancel}>
            <CancelButtonText>
              {alert.cancelMessage || "Cancelar"}
            </CancelButtonText>
          </CancelButton>
        </ButtonsContainer>
      </Content>
    </Container>
  );
}
