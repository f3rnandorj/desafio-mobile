import React from "react";

import {fireEvent, render, screen, waitFor} from "test-utils";

import {AlertProps, useAlert} from "@services";

import {Alert} from "..";

jest.mock("@services", () => {
  const actual = jest.requireActual("@services");
  return {
    ...actual,
    useAlert: jest.fn(),
  };
});

const mockHideAlert = jest.fn();
const mockOnConfirm = jest.fn();
const mockOnCancel = jest.fn();

const baseAlert: AlertProps = {
  title: "Alerta de teste",
  subTitle: "Subtítulo do alerta",
  acceptMessage: "Sim",
  cancelMessage: "Não",
  isLoading: false,
  icon: {name: "alert"},
  action: {
    onConfirm: mockOnConfirm,
    onCancel: mockOnCancel,
  },
};

function renderComponent() {
  render(<Alert />);

  const titleElement = screen.getByText(baseAlert.title!);
  const subTitleElement = screen.getByText(baseAlert.subTitle);
  const confirmButton = screen.getByTestId("alert-accept-button");
  const cancelButton = screen.getByTestId("alert-cancel-button");
  const confirmText = screen.queryByText(baseAlert.acceptMessage!);
  const cancelText = screen.queryByText(baseAlert.cancelMessage!);

  return {
    titleElement,
    subTitleElement,
    confirmButton,
    cancelButton,
    confirmText,
    cancelText,
  };
}

beforeEach(() => {
  jest.clearAllMocks();
  (useAlert as jest.Mock).mockReturnValue({
    alert: baseAlert,
    hideAlert: mockHideAlert,
  });
});

afterAll(() => {
  jest.resetAllMocks();
});

describe("<Alert />", () => {
  it("should render with title, subtitle, and buttons", () => {
    const {
      titleElement,
      subTitleElement,
      confirmText,
      cancelText,
      confirmButton,
      cancelButton,
    } = renderComponent();

    expect(titleElement).toBeTruthy();
    expect(subTitleElement).toBeTruthy();
    expect(confirmText).toBeTruthy();
    expect(cancelText).toBeTruthy();
    expect(confirmButton).toBeTruthy();
    expect(cancelButton).toBeTruthy();
  });

  it("should call onConfirm when confirm button is pressed", () => {
    const {confirmButton} = renderComponent();

    fireEvent.press(confirmButton);

    expect(mockOnConfirm).toHaveBeenCalled();
  });

  it("should call onCancel and hideAlert when cancel button is pressed", () => {
    const {cancelButton} = renderComponent();

    fireEvent.press(cancelButton);

    expect(mockOnCancel).toHaveBeenCalled();
    expect(mockHideAlert).toHaveBeenCalled();
  });

  it("should hide alert on hardware back press", async () => {
    const {BackHandler} = require("react-native");
    BackHandler.addEventListener = jest.fn((_event, cb) => {
      cb();
      return {remove: jest.fn()};
    });

    renderComponent();

    await waitFor(() => {
      expect(mockHideAlert).toHaveBeenCalled();
    });
  });

  it("should show loading when isLoading is true", () => {
    (useAlert as jest.Mock).mockReturnValue({
      alert: {...baseAlert, isLoading: true},
      hideAlert: mockHideAlert,
    });

    renderComponent();
    expect(screen.getByTestId("loading")).toBeTruthy();
    expect(screen.queryByText("Sim")).toBeNull();
  });

  it("should throw error if no title and no icon are provided", () => {
    (useAlert as jest.Mock).mockReturnValue({
      alert: {
        ...baseAlert,
        title: undefined,
        icon: undefined,
      },
      hideAlert: mockHideAlert,
    });

    expect(() => renderComponent()).toThrow(
      "You must provide a title or an iconName",
    );
  });

  it("should return null if alert is null", () => {
    (useAlert as jest.Mock).mockReturnValue({
      alert: null,
      hideAlert: mockHideAlert,
    });

    render(<Alert />);

    expect(screen.queryByText(/Alerta de teste/i)).toBeFalsy();
  });
});
