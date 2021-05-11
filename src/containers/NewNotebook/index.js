import React, { useState } from "react";
import NewNotebook from "../../components/NewNotebook";
import { notebooksApi } from "../../api/index";

const NewNotebookContainer = function () {
  const [newNotebook, setNewNotebook] = useState({ title: "" });
  const [newNotebookModal, setNewNotebookModal] = useState(false);
  const handleChange = ({ target }) => {
    setNewNotebook({ ...newNotebook, [target.name]: target.value });
  };
  const toggleModal = () => {
    setNewNotebookModal(!newNotebookModal);
  };
  const handleSubmit = () => {
    if (!newNotebook.title.length) {
      return false;
    } else {
      return notebooksApi.create(newNotebook).then(() => {
        toggleModal();
      });
    }
  };
  return (
    <NewNotebook
      newNotebook={newNotebook}
      newNotebookModal={newNotebookModal}
      toggleModal={toggleModal}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default NewNotebookContainer;
