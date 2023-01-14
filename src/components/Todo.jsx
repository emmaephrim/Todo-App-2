import React from "react";

function Todo({ title, content, id, setOldNotes, oldNotes }) {
  function handleDeleteClick() {
    setOldNotes(
      oldNotes.filter((item, index) => {
        return index !== id;
      }),
    );
  }

  function handleEditClick() {}

  return (
    <div id={id}>
      <b> {title} </b>
      <p> {content} </p>
      <button onClick={handleDeleteClick}>Delete</button>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
}

export default Todo;
