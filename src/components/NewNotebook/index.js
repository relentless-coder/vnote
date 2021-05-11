import React from "react";
import { Placeholder } from "./Placeholder";
import { NewNotebookModal } from "./Modal";

function ShowModal(props) {
  if (props.newNotebookModal) {
      return <NewNotebookModal {...props} />;
  } else {
    return <Placeholder toggleModal={props.toggleModal} />;
  }
}

export default ShowModal;
