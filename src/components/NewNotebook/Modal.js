import React from "react";
import Modal from "react-modal";

const NewNotebookModal = ({
  newNotebookModal,
  toggleModal,
  newNotebook,
  handleSubmit,
  handleChange,
}) => {
  Modal.setAppElement("#root");
  return (
    <Modal isOpen={newNotebookModal} onRequestClose={toggleModal}>
      <input
        type="text"
        name="title"
        value={newNotebook.title}
        placeholder="Enter title"
        onChange={handleChange}
      />
      <button disabled={!newNotebook.title.length} onClick={handleSubmit}>
        Create Notebook
      </button>
    </Modal>
  );
};

export { NewNotebookModal };
