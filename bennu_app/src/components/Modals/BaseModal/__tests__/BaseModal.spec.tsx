import React from "react";
import {Keyboard, View} from "react-native";

import {fireEvent, render, screen} from "test-utils";

import {Text} from "@components";
import {useAppSafeArea, useKeyboardStatus} from "@hooks";
import {ModalProps, useModal} from "@services";

import {BaseModal} from "..";

jest.mock("@services", () => {
  const actual = jest.requireActual("@services");
  return {
    ...actual,
    useModal: jest.fn(),
  };
});

jest.mock("@hooks", () => {
  const actual = jest.requireActual("@hooks");
  return {
    ...actual,
    useAppSafeArea: jest.fn(),
    useKeyboardStatus: jest.fn(),
  };
});

const mockHideModal = jest.fn();
function MockContent() {
  return (
    <View testID="mock-content">
      <Text>Modal Content</Text>
    </View>
  );
}

const baseModal: ModalProps = {
  content: MockContent,
  title: "Test Modal",
  heightPercentage: 0.5,
};

function renderComponent() {
  render(<BaseModal />);

  const modalElement = screen.getByTestId("base-modal");
  const titleElement = screen.getByText(baseModal.title!);
  const contentElement = screen.getByTestId("mock-content");
  const touchableWithoutFeedback = screen.getByTestId(
    "modal-touchable-without-feedback",
  );

  return {modalElement, titleElement, contentElement, touchableWithoutFeedback};
}

beforeEach(() => {
  jest.clearAllMocks();
  (useModal as jest.Mock).mockReturnValue({
    modal: baseModal,
    hideModal: mockHideModal,
  });
  (useAppSafeArea as jest.Mock).mockReturnValue({
    top: 10,
    bottom: 10,
  });
  (useKeyboardStatus as jest.Mock).mockReturnValue(false);
});

afterAll(() => {
  jest.resetAllMocks();
});

describe("<BaseModal />", () => {
  it("should render with title and content", () => {
    const {contentElement, titleElement} = renderComponent();

    expect(titleElement).toBeTruthy();
    expect(contentElement).toBeTruthy();
  });

  it("should not render anything when modal is null", () => {
    (useModal as jest.Mock).mockReturnValue({
      modal: null,
      hideModal: mockHideModal,
    });

    render(<BaseModal />);
    expect(screen.queryByText(/Test Modal/i)).toBeFalsy();
  });

  it("should call Keyboard.dismiss when TouchableWithoutFeedback is pressed", () => {
    const dismissSpy = jest.spyOn(Keyboard, "dismiss");

    const {touchableWithoutFeedback} = renderComponent();

    fireEvent.press(touchableWithoutFeedback);

    expect(dismissSpy).toHaveBeenCalled();
  });
});
