import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./index.css";

const Placeholder = ({ toggleModal }) => (
  <div
    data-testid="new_notebook"
    className="new-notebook"
    onClick={toggleModal}
  >
    <AiOutlinePlus />
  </div>
);

export { Placeholder };
