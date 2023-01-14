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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          placeholder="Title"
          name="title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          type="text"
          id="content"
          placeholder="Content"
          name="content"
          value={note.content}
          onChange={handleChange}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default Note;
