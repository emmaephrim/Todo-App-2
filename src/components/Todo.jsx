import React from "react";

function Todo({ title, content, id, setOldNotes, oldNotes, editNote }) {
  function handleDeleteClick() {
    setOldNotes(
      oldNotes.filter((item, index) => {
        return index !== id;
      }),
    );
  }

  function handleEditClick() {
    editNote(id);

    setOldNotes(
      oldNotes.filter((item, index) => {
        return index !== id;
      }),
    );
  }

  return (
    <div id={id} className="todo-body">
      <span> {id + 1} </span>
      <b> {title} </b>
      <p> {content} </p>
      <button onClick={handleDeleteClick}>Delete</button>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
}

export default Todo;
