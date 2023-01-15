import React, { useState } from "react";

function Note({ note, setNote, oldNotes, setOldNotes }) {
  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "title") {
      setNote({ title: value, content: note.content });
    } else if (name === "content") {
      setNote({ content: value, title: note.title });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (note.title !== "" && note.content !== "") {
      setOldNotes([...oldNotes, note]);
    } else {
      alert("Please complete the form");
    }

    setNote({ title: "", content: "" });
  }

  return (
    <div className="note-body   bg-light p-3 mt-4 rounded shadow-lg">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          placeholder="Title"
          name="title"
          onChange={handleChange}
          value={note.title}
          className="mb-3"
        />
        <textarea
          type="text"
          id="content"
          placeholder="Content"
          name="content"
          value={note.content}
          onChange={handleChange}
          className="d-block"
        />
        <button type="submit" className="note-button bg-info mt-2 rounded ">
          Add
        </button>
      </form>
    </div>
  );
}

export default Note;
