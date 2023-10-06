import { Input } from "@/components";
import { render } from "@/utils/testUtils";
import { fireEvent, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

describe("Component Input", () => {
  it("renders an input element", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("renders a label when provided", () => {
    render(<Input label="Username" />);
    const labelElement = screen.getByText("Username");
    expect(labelElement).toBeInTheDocument();
  });

  it("tracks changes in input value", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "Test Input" } });
    expect(inputElement).toHaveValue("Test Input");
  });

  it('disables the "e" character when type is "numberic"', () => {
    render(<Input type="numberic" />);
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.keyDown(inputElement, { key: "e" });
    expect(inputElement).toHaveValue("");
  });

  it("displays an error message when provided", () => {
    render(<Input errorMessage="Required field" />);
    const errorElement = screen.getByText("Required field");
    expect(errorElement).toBeInTheDocument();
  });
});
