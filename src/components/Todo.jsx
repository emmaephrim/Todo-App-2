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
      <div id={id} className="todo-item">
        <div>
          <span style={{ fontWeight: "bold" }}> {id + 1}. </span>
          <b style={{ color: "#0cc6eb" }}> {title} </b>
          <p> {content} </p>
        </div>
        <div className="item-edit-control">
          <button onClick={handleDeleteClick} className=" btn btn-danger  me-2">
            <i className="bi bi-trash text-light"></i>
          </button>
          <button onClick={handleEditClick} className="btn btn-success">
            <i class="bi bi-pencil"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
