import React from "react";
import App from "../App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe(`Test emoji list`, () => {
  beforeEach(() => {
    render(<App />);
  });

  //Test code that will check that the emoji list has been rendered successfully when the application is first opened.
  test("Emoji must be filtered successfully", () => {
    const inputtext = screen.getByText("Laughing");
    expect(inputtext).toBeInTheDocument("Laughing");
  });

  //Test code that will check that when a filtering operation is performed, the emoji list is re-rendered according to this filter.
  test("Emoji must be listed successfully", () => {
    const emoji = screen.getAllByTestId("emoji-list");
    expect(emoji.length).toEqual(20);
  });
});
