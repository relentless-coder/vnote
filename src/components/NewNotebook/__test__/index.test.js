import React from "react";
import { render, screen } from "@testing-library/react";
import ShowModal from "../index.js";

describe("New Notebook", () => {
  it("should not render the Modal", () => {
    render(<ShowModal />);
    expect(
      screen.queryByPlaceholderText("Enter title")
    ).not.toBeInTheDocument();
    expect(screen.getByTestId('new_notebook')).toBeInTheDocument();
  });
});
