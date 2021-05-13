import React from "react";
import Notebook from "../Notebook";
import "./index.css";

const AllNotebooks = ({ data }) => {
  return (
    <div className="all_notebooks">
      {data.map((el) => (
        <Notebook title={el.title} id={el.id} key={el.id} />
      ))}
    </div>
  );
};

export { AllNotebooks };
