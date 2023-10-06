import React, { createRef } from "react";
import { Heading, Text } from "@/components";
import { render } from "@/utils/testUtils";
import { screen } from "@testing-library/react";

import "@testing-library/jest-dom";

describe("Typography Component", () => {
  it("renders an h1 heading element by default", () => {
    render(<Heading>Heading 1</Heading>);
    const headingElement = screen.getByText(/Heading 1/i);
    expect(headingElement).toBeInTheDocument();
    expect(headingElement?.textContent).toBe("Heading 1");
  });

  it("renders the specified heading variant", () => {
    render(<Heading variant="h2">Heading 2</Heading>);
    const headingElement = screen.getByText(/Heading 2/i);
    expect(headingElement).toBeInTheDocument();
    expect(headingElement?.textContent).toBe("Heading 2");
  });

  it("forwards ref using Heading", () => {
    const ref = createRef<HTMLHeadingElement>();
    render(<Heading ref={ref}>Heading Text</Heading>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.textContent).toBe("Heading Text");
  });

  it("renders the paragraph", () => {
    render(<Text>Text</Text>);
    const headingElement = screen.getByText(/Text/i);
    expect(headingElement).toBeInTheDocument();
    expect(headingElement?.textContent).toBe("Text");
  });

  it("forwards ref using Text", () => {
    const ref = createRef<HTMLHeadingElement>();
    render(<Text ref={ref}>Text</Text>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.textContent).toBe("Text");
  });
});
