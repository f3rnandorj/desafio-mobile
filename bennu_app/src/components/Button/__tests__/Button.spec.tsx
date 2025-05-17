import {render, fireEvent, screen} from "test-utils";

import {Button, ButtonProps} from "..";

function renderComponent(props?: Partial<ButtonProps>) {
  render(<Button title="Button Title" testID={"button"} {...props} />);

  const titleElement = screen.queryByText(/button title/i);
  const loadingElement = screen.queryByTestId("loading");
  const buttonElement = screen.getByTestId("button");

  return {
    titleElement,
    loadingElement,
    buttonElement,
  };
}

describe("<Button />", () => {
  it("calls the onPress function when it is pressed", () => {
    const mockedOnPress = jest.fn();
    const {buttonElement, loadingElement} = renderComponent({
      onPress: mockedOnPress,
    });

    fireEvent.press(buttonElement);

    expect(mockedOnPress).toHaveBeenCalled();
    expect(loadingElement).toBeFalsy();
  });

  it("renders correctly with default props", () => {
    const {buttonElement, titleElement} = renderComponent();

    expect(buttonElement).toBeTruthy();
    expect(titleElement).toBeTruthy();
    expect(buttonElement.props.disabled).toBeFalsy();
  });

  it("renders in disabled state when disabled prop is true", () => {
    const {buttonElement} = renderComponent({
      disabled: true,
    });

    expect(buttonElement.props.accessibilityState.disabled).toBeTruthy();
  });

  it("shows loading indicator when isLoading is true", () => {
    const {loadingElement, titleElement} = renderComponent({
      isLoading: true,
    });

    expect(loadingElement).toBeTruthy();
    expect(titleElement).toBeFalsy();
  });

  it("disables the button when isLoading is true", () => {
    const {buttonElement} = renderComponent({
      isLoading: true,
    });

    expect(buttonElement.props.accessibilityState.disabled).toBeTruthy();
  });

  it("doesn't call onPress when disabled", () => {
    const mockedOnPress = jest.fn();
    const {buttonElement} = renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    });

    fireEvent.press(buttonElement);

    expect(mockedOnPress).toHaveBeenCalledTimes(0);
  });

  it("doesn't call onPress when loading", () => {
    const mockedOnPress = jest.fn();
    const {buttonElement} = renderComponent({
      onPress: mockedOnPress,
      isLoading: true,
    });

    fireEvent.press(buttonElement);

    expect(mockedOnPress).not.toHaveBeenCalled();
  });
});
