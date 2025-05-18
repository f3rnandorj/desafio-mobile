import React from "react";

import {fireEvent, render, screen, waitFor} from "test-utils";

import {ToastProps, useToast} from "@services";

import {Toast} from "..";

jest.mock("@services", () => {
  const actual = jest.requireActual("@services");
  return {
    ...actual,
    useToast: jest.fn(),
  };
});

jest.useFakeTimers();

const mockHideToast = jest.fn();

const baseToast: ToastProps = {
  message: "Toast message test",
  type: "success",
  position: "top",
  duration: 3000,
  action: {
    title: "Action",
    onPress: mockHideToast,
  },
};

beforeEach(() => {
  jest.clearAllMocks();
  (useToast as jest.Mock).mockReturnValue({
    toast: baseToast,
    hideToast: mockHideToast,
  });
});

function renderComponent(isInsideModal = false) {
  render(<Toast isInsideModal={isInsideModal} />);

  const toastElement = screen.getByTestId("toast");
  const messageElement = screen.queryByText(baseToast.message!);
  const actionButton = screen.queryByText(baseToast.action!.title!);

  return {
    toastElement,
    messageElement,
    actionButton,
  };
}

describe("<Toast />", () => {
  it("should render with message and action button", () => {
    const {messageElement, actionButton} = renderComponent();

    expect(messageElement).toBeTruthy();
    expect(actionButton).toBeTruthy();
  });

  it("should call action onPress when action button is pressed", () => {
    const {actionButton} = renderComponent();

    fireEvent.press(actionButton!);

    expect(mockHideToast).toHaveBeenCalled();
  });

  it("should call hideToast when action button is pressed and no onPress provided", () => {
    const {actionButton} = renderComponent();

    fireEvent.press(actionButton!);

    expect(mockHideToast).toHaveBeenCalled();
  });

  it("should automatically hide toast after duration", async () => {
    renderComponent();

    jest.advanceTimersByTime(baseToast.duration!);

    await waitFor(() => {
      expect(mockHideToast).toHaveBeenCalled();
    });
  });

  it("should show success icon for success toast type", () => {
    renderComponent();

    const iconElement = screen.getByTestId("icon-check-circle");
    expect(iconElement).toBeTruthy();
  });

  it("should show error icon for error toast type", () => {
    (useToast as jest.Mock).mockReturnValue({
      toast: {...baseToast, type: "error"},
      hideToast: mockHideToast,
    });

    renderComponent();

    const iconElement = screen.getByTestId("icon-alpha-x-circle");
    expect(iconElement).toBeTruthy();
  });

  it("should position toast at the top when position is top", () => {
    const {toastElement} = renderComponent();

    expect(toastElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          top: 50,
        }),
      ]),
    );
  });

  it("should position toast at the bottom when position is bottom", () => {
    (useToast as jest.Mock).mockReturnValue({
      toast: {...baseToast, position: "bottom"},
      hideToast: mockHideToast,
    });

    const {toastElement} = renderComponent();

    expect(toastElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          bottom: 50,
        }),
      ]),
    );
  });

  it("should use default values when not provided", () => {
    (useToast as jest.Mock).mockReturnValue({
      toast: {message: "Simple message"},
      hideToast: mockHideToast,
    });

    renderComponent();

    expect(screen.getByText("OK")).toBeTruthy();

    const iconElement = screen.getByTestId("icon-check-circle");
    expect(iconElement).toBeTruthy();
  });

  it("should return null if toast is null", () => {
    (useToast as jest.Mock).mockReturnValue({
      toast: null,
      hideToast: mockHideToast,
    });

    render(<Toast isInsideModal={false} />);

    expect(screen.queryByText(baseToast.message!)).toBeFalsy();
  });
});
