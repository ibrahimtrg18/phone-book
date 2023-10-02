import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

describe("Home", () => {
  it("Should have Docs text", () => {
    render(<Home />);

    const getStarted = screen.getByText(/Get started/i);

    expect(getStarted).toBeInTheDocument();
  });
});
