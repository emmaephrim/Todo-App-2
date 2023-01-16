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
    <div>
      <div id={id} className="todo-body">
        <span> {id + 1} </span>
        <b> {title} </b>
        <p> {content} </p>
        <button onClick={handleDeleteClick} className=" btn btn-outline-info">
          <i className="bi bi-trash text-danger"></i>
        </button>
        <button onClick={handleEditClick} className="btn btn-outline-primary">
          <i class="bi bi-pencil"></i>
        </button>
      </div>
    </div>
  );
}

export default Todo;
