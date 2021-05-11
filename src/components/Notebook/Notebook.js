import React from "react";
import { Link } from "react-router-dom";
import './index.css'

const Notebook = ({ title, id }) => (
  <Link to={`/${id}/pages`}>
    <div className="notebook">{title}</div>
  </Link>
);

export {Notebook}
