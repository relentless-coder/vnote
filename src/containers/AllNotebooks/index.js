import React from "react";
import AllNotebooks from "../../components/AllNotebooks";
import { notebooksApi } from "../../api/index";
import withList from "../common/withList";

const AllNotebooksContainer = withList(AllNotebooks, notebooksApi.getAll);

export default AllNotebooksContainer;
