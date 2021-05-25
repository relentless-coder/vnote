import React from "react";
import Notebook from "../Notebook";
import "./index.css";

export const AllNotebooks = ({ data }) => {
  return (
    <div className="all_notebooks">
      {data.map((el) => (
        <Notebook title={el.title} id={el.id} key={el.id} />
      ))}
    </div>
  );
};
