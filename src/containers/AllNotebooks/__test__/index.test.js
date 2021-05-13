import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, act, waitFor } from "@testing-library/react";
import { notebooksApi } from "../../../api/index";
import AllNotebooksContainer from "../";
jest.mock("../../../api/index");

afterEach(() => {
  jest.clearAllMocks();
});

describe("<AllNotebooksContainer />", () => {
  const mockData = [
    { id: 1, title: "Some Title1" },
    { id: 2, title: "Some Title2" },
    { id: 3, title: "Some Title3" },
  ];
  const renderComponent = () => {
    render(
      <Router>
        <AllNotebooksContainer />
      </Router>
    );
  };
  beforeEach(() => {});
  it("should render correct number of <Notebook />", async () => {
    notebooksApi.getAll.mockResolvedValue({data: mockData});
    await waitFor(() => renderComponent());
    expect(screen.getByText("Some Title1")).toBeInTheDocument();
    expect(screen.getByText("Some Title2")).toBeInTheDocument();
    expect(screen.getByText("Some Title3")).toBeInTheDocument();
  });
});
