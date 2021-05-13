import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AllNotebooks from "../";

describe("<AllNotebooks />", () => {
  it("should render correct number of <Notebook />", () => {
    const notebooks = [
      { title: "Some Title 1", id: 1 },
      { title: "Some Title 2", id: 2 },
      { title: "Some Title 3", id: 3 },
    ];
    render(
      <Router>
        <AllNotebooks data={notebooks} />
      </Router>
    );
    expect(screen.getByText("Some Title 1")).toBeInTheDocument();
    expect(screen.getByText("Some Title 2")).toBeInTheDocument();
    expect(screen.getByText("Some Title 3")).toBeInTheDocument();
  });
});
