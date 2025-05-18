import {render, screen} from "test-utils";

import {Text, TextProps} from "..";

function renderComponent(props?: Partial<TextProps>) {
  render(
    <Text testID="text" {...props}>
      Sample Text
    </Text>,
  );

  const textElement = screen.getByTestId("text");

  return {
    textElement,
  };
}

describe("<Text />", () => {
  it("renders correctly with default props", () => {
    const {textElement} = renderComponent();

    expect(textElement).toBeTruthy();
    expect(textElement.props.children).toBe("Sample Text");
    expect(textElement.props.preset).toBe("paragraph");
  });

  it("applies the correct preset style", () => {
    const {textElement} = renderComponent({
      preset: "heading1",
    });

    expect(textElement).toBeTruthy();
    expect(textElement.props.preset).toBe("heading1");
  });

  it("applies bold style when bold prop is true", () => {
    const {textElement} = renderComponent({
      bold: true,
    });

    expect(textElement).toBeTruthy();
    expect(textElement.props.bold).toBeTruthy();
  });

  it("applies semiBold style when semiBold prop is true", () => {
    const {textElement} = renderComponent({
      semiBold: true,
    });

    expect(textElement).toBeTruthy();
    expect(textElement.props.semiBold).toBeTruthy();
  });

  it("applies italic style when italic prop is true", () => {
    const {textElement} = renderComponent({
      italic: true,
    });

    expect(textElement).toBeTruthy();
    expect(textElement.props.italic).toBeTruthy();
  });

  it("applies medium style when medium prop is true", () => {
    const {textElement} = renderComponent({
      medium: true,
    });

    expect(textElement).toBeTruthy();
    expect(textElement.props.medium).toBeTruthy();
  });

  it("applies the correct text color", () => {
    const {textElement} = renderComponent({
      color: "primary",
    });

    expect(textElement).toBeTruthy();
    expect(textElement.props.color).toBe("primary");
  });

  it("applies the correct text alignment", () => {
    const {textElement} = renderComponent({
      align: "center",
    });

    expect(textElement).toBeTruthy();
    expect(textElement.props.align).toBe("center");
  });

  it("applies multiple text styles together", () => {
    const {textElement} = renderComponent({
      preset: "heading2",
      bold: true,
      italic: true,
      color: "success",
      align: "right",
    });

    expect(textElement).toBeTruthy();
    expect(textElement.props.preset).toBe("heading2");
    expect(textElement.props.bold).toBeTruthy();
    expect(textElement.props.italic).toBeTruthy();
    expect(textElement.props.color).toBe("success");
    expect(textElement.props.align).toBe("right");
  });

  it("passes additional props to the underlying component", () => {
    const onPressMock = jest.fn();
    const {textElement} = renderComponent({
      onPress: onPressMock,
    });

    expect(textElement).toBeTruthy();
    expect(textElement.props.onPress).toBe(onPressMock);
  });
});
