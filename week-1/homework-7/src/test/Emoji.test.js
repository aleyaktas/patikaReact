import React from "react";
import App from "../App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe(`Test emoji`, () => {
  beforeEach(() => {
    render(<App />);
  });

  //Test code that will check that when any emoji is clicked on the list, the relevant emoji is copied.
  test("Emoji must be copied successfully", () => {
    const clicks = screen.getAllByTestId("emoji-list");
    expect(clicks[0]).toHaveAttribute("data-clipboard-text");
  });
});
