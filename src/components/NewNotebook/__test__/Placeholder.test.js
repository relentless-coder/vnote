import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Placeholder } from "../Placeholder";

describe("<NewNotebook />", () => {
  it("should trigger onClick", () => {
    const onClick = jest.fn();
    render(<Placeholder toggleModal={onClick} />);
    fireEvent.click(screen.getByTestId("new_notebook"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
