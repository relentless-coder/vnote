import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Notebook from "../";

describe("<Notebook />", () => {
  it("should display correct title", () => {
    render(
      <Router>
        <Notebook title="Some Title" id="12342" />
      </Router>
    );
    expect(screen.getByText("Some Title")).toBeInTheDocument();
  });
});
