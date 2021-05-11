import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import NewNotebookContainer from "../";
import { notebooksApi } from "../../../api/index";

describe("NewNotebook Container", () => {
  const root = document.createElement("div");
  root.setAttribute("id", "root");
  const renderNotebook = () => {
    render(<NewNotebookContainer />, {
      container: document.body.appendChild(root),
    });
  };
  it("should render <Placeholder /> and not the <Modal />", () => {
    renderNotebook();
    expect(screen.getByTestId("new_notebook")).toBeInTheDocument();
    expect(
      screen.queryByPlaceholderText("Enter title")
    ).not.toBeInTheDocument();
  });
  it("should toggle the <Modal /> on click the <Placholder />", () => {
    renderNotebook();
    act(() => {
      fireEvent.click(screen.getByTestId("new_notebook"));
    });
    expect(screen.queryByTestId("new_notebook")).not.toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter title")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Create Notebook/ })
    ).toBeDisabled();
  });
  it('should update input[type="text"] value on handleChange', () => {
    renderNotebook();
    act(() => {
      fireEvent.click(screen.getByTestId("new_notebook"));
    });
    const input = screen.getByPlaceholderText("Enter title");
    act(() => {
      fireEvent.change(input, { target: { value: "some title" } });
    });
    expect(input.value).toBe("some title");
  });
  it("should not invoke api if title is empty", () => {
    renderNotebook();
    act(() => {
      fireEvent.click(screen.getByTestId("new_notebook"));
    });
    const spy = jest
      .spyOn(notebooksApi, "create")
      .mockImplementation((x) => Promise.resolve(x));
    act(() => {
      fireEvent.click(screen.getByRole("button", { name: /Create Notebook/ }));
    });
    expect(spy).not.toHaveBeenCalled();
  });
  it("should invoke api if title exists", async () => {
    renderNotebook();
    act(() => {
      fireEvent.click(screen.getByTestId("new_notebook"));
    });
    const spy = jest
      .spyOn(notebooksApi, "create")
      .mockImplementation((x) => Promise.resolve(x));
    act(() => {
      fireEvent.change(screen.getByPlaceholderText("Enter title"), {
        target: { value: "some title" },
      });
    });
    await act(() => {
      fireEvent.click(screen.getByRole("button", { name: /Create Notebook/ }));
      return Promise.resolve();
    });
    expect(spy).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId("new_notebook")).toBeInTheDocument();
  });
});
