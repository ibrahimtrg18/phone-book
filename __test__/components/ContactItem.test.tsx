import React from "react";
import ContactItem from "@/app/Fragments/ContactItem";
import { render } from "@/utils/testUtils";
import { fireEvent, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

jest.mock("../../src/contexts/FavoriteContext", () => ({
  useFavoriteContext: jest.fn(() => ({
    favorites: [],
    setFavorites: jest.fn(),
    removeFavorite: jest.fn(),
  })),
}));

jest.mock("../../src/utils/indexedDB", () => ({
  addToFavorites: jest.fn(() => {}),
}));

describe("ContactItem Component", () => {
  it("renders contact details", () => {
    jest
      .spyOn(
        require("../../src/contexts/FavoriteContext"),
        "useFavoriteContext"
      )
      .mockImplementation(() => ({
        favorites: [
          {
            id: 2,
            first_name: "Alice",
            last_name: "Smith",
            phones: [{ number: "987-654-3210" }],
          },
        ],
        setFavorites: jest.fn(),
        removeFavorite: jest.fn(),
      }));

    const contact = {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      phones: [{ number: "123-456-7890" }],
    };

    render(<ContactItem {...contact} />);
  });

  it("toggles favorite status when the bookmark button is clicked", () => {
    jest
      .spyOn(
        require("../../src/contexts/FavoriteContext"),
        "useFavoriteContext"
      )
      .mockImplementation(() => ({
        favorites: [], // Empty favorites for this test
        setFavorites: jest.fn(),
        removeFavorite: jest.fn(),
      }));

    const contact = {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      phones: [{ number: "123-456-7890" }],
    };

    render(<ContactItem {...contact} />);

    const bookmarkButton = screen.getByRole("button", {
      name: /Add to Favorite/i,
    });

    fireEvent.click(bookmarkButton);

    expect(bookmarkButton).toHaveAttribute("aria-label", "Add to Favorite");
  });

  it("toggles favorite status when the bookmark button is clicked", () => {
    jest
      .spyOn(
        require("../../src/contexts/FavoriteContext"),
        "useFavoriteContext"
      )
      .mockImplementation(() => ({
        favorites: [
          {
            id: 1,
            first_name: "John",
            last_name: "Doe",
            phones: [{ number: "123-456-7890" }],
          },
        ], // Empty favorites for this test
        setFavorites: jest.fn(),
        removeFavorite: jest.fn(),
      }));

    const contact = {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      phones: [{ number: "123-456-7890" }],
    };

    render(<ContactItem {...contact} />);

    const bookmarkButton = screen.getByRole("button", {
      name: /Remove from Favorite/i,
    });

    fireEvent.click(bookmarkButton);

    expect(bookmarkButton).toHaveAttribute(
      "aria-label",
      "Remove from Favorite"
    );
  });
});
