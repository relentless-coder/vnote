import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { NewNotebookModal } from "../Modal.js";

describe("NewNotebook Modal", () => {
  const newNotebook = {
    title: "",
  };
  const toggleModal = jest.fn();
  const onClick = jest.fn();
  const handleChange = jest.fn();
  const root = document.createElement("div");
  root.setAttribute("id", "root");

  it('should not render input[type="text"] and button when Modal is closed', () => {
    render(
      <NewNotebookModal
        newNotebook={newNotebook}
        toggleModal={toggleModal}
        onClick={onClick}
        newNotebookModal={false}
        handleChange={handleChange}
      />,
      {
        container: document.body.appendChild(root),
      }
    );
    expect(
      screen.queryByRole("button", { name: /Create Notebook/ })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByPlaceholderText("Enter title")
    ).not.toBeInTheDocument();
  });
  it('should render input[type="text"] and button when Modal is open', () => {
    render(
      <NewNotebookModal
        newNotebook={newNotebook}
        toggleModal={toggleModal}
        onClick={onClick}
        newNotebookModal={true}
        handleChange={handleChange}
      />,
      {
        container: document.body.appendChild(root),
      }
    );
    expect(
      screen.queryByRole("button", { name: /Create Notebook/ })
    ).toBeInTheDocument();
    expect(screen.queryByPlaceholderText("Enter title")).toBeInTheDocument();
  });
  it("should render disabled button if title is empty", () => {
    render(
      <NewNotebookModal
        newNotebook={newNotebook}
        toggleModal={toggleModal}
        onClick={onClick}
        newNotebookModal={true}
        handleChange={handleChange}
      />,
      {
        container: document.body.appendChild(root),
      }
    );
    expect(
      screen.queryByRole("button", { name: /Create Notebook/ })
    ).toBeDisabled();
  });
  it("should render enabled button if title is not empty", () => {
    newNotebook.title = 'SOme title'
    render(
      <NewNotebookModal
        newNotebook={newNotebook}
        toggleModal={toggleModal}
        onClick={onClick}
        newNotebookModal={true}
        handleChange={handleChange}
      />,
      {
        container: document.body.appendChild(root),
      }
    );
    expect(
      screen.queryByRole("button", { name: /Create Notebook/ })
    ).not.toBeDisabled();
  });
});
