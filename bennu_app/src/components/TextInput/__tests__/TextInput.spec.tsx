import {render, fireEvent, screen} from "test-utils";

import {TextInput, TextInputProps} from "..";

function renderComponent(props?: Partial<TextInputProps>) {
  render(<TextInput {...props} />);

  const inputElement = screen.getByTestId("text-input");
  const labelElement = props?.label ? screen.queryByText(props.label) : null;
  const errorMessageElement = props?.errorMessage
    ? screen.queryByText(props.errorMessage)
    : null;
  const leftIconElement = props?.leftIcon
    ? screen.queryByTestId(`icon-${props.leftIcon.name}`)
    : null;
  const rightIconElement = props?.rightIcon
    ? screen.queryByTestId(`icon-${props.rightIcon.name}`)
    : null;

  return {
    inputElement,
    labelElement,
    errorMessageElement,
    leftIconElement,
    rightIconElement,
  };
}

describe("<TextInput />", () => {
  it("renders correctly with default props", () => {
    const {inputElement} = renderComponent();

    expect(inputElement).toBeTruthy();
    expect(inputElement.props.placeholder).toBe("Add a new task...");
  });

  it("renders with a label when label prop is provided", () => {
    const {labelElement} = renderComponent({
      label: "Task Name",
    });

    expect(labelElement).toBeTruthy();
    expect(labelElement?.props.children).toBe("Task Name");
  });

  it("renders with an error message when errorMessage prop is provided", () => {
    const {errorMessageElement} = renderComponent({
      errorMessage: "This field is required",
    });

    expect(errorMessageElement).toBeTruthy();
    expect(errorMessageElement?.props.children).toBe("This field is required");
  });

  it("renders with a left icon when leftIcon prop is provided", () => {
    const {leftIconElement} = renderComponent({
      leftIcon: {name: "abacus", size: 20},
    });

    expect(leftIconElement).toBeTruthy();
  });

  it("renders with a right icon when rightIcon prop is provided", () => {
    const {rightIconElement} = renderComponent({
      rightIcon: {name: "close", size: 20},
    });

    expect(rightIconElement).toBeTruthy();
  });

  it("uses default variant setting by default", () => {
    const {inputElement} = renderComponent();

    expect(inputElement.props.multiline).toBeFalsy();
    expect(inputElement.props.numberOfLines).toBe(1);
    expect(inputElement.props.textAlignVertical).toBe("center");
  });

  it("uses multiline variant settings when variant is multiline", () => {
    const {inputElement} = renderComponent({
      variant: "multiline",
    });

    expect(inputElement.props.multiline).toBeTruthy();
    expect(inputElement.props.numberOfLines).toBe(3);
    expect(inputElement.props.textAlignVertical).toBe("top");
  });

  it("calls the onChangeText function when text is changed", () => {
    const mockedOnChangeText = jest.fn();
    const {inputElement} = renderComponent({
      onChangeText: mockedOnChangeText,
    });

    fireEvent.changeText(inputElement, "New text value");

    expect(mockedOnChangeText).toHaveBeenCalledWith("New text value");
  });
});
