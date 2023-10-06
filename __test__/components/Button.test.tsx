import { Button } from "@/components";
import { render } from "@/utils/testUtils";
import { fireEvent, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import "@testing-library/jest-dom";

describe("Component Button", () => {
  it("renders children correctly", () => {
    render(<Button>Hello</Button>);
    const buttonElement = screen.getByText("Hello");
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", async () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click Me</Button>);
    const buttonElement = screen.getByText("Click Me");
    await userEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  it("renders a button element", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders children when provided", () => {
    render(<Button>Hello</Button>);
    const buttonText = screen.getByText("Hello");
    expect(buttonText).toBeInTheDocument();
  });

  it("handles click events when onClick is provided", () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click Me</Button>);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
