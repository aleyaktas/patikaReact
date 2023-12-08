import React from "react";
import App from "../App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

//Test code to check that the header section has been rendered successfully
test("The title section has been rendered successfully.", () => {
  render(<App />);
  const headerText = screen.getByText(/Emoji Search/i);
  expect(headerText).toBeInTheDocument();
});
