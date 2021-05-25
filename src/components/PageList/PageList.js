import React from "react";
import "./index.css";

const PageListItem = ({ page }) => (
  <div className="page_list-item">
    <img src={page.snapshot} />
    <span>{page.number}</span>
  </div>
);

export const PageList = ({ pages }) => {
  return (
    <div className="page_list">
      {pages.map((el) => (
        <PageListItem page={el} key={el.id} />
      ))}
    </div>
  );
};
