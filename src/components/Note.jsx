import React, { useState } from "react";

function Note({ onAdd }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "title") {
      setNote({ title: value, content: note.content });
    } else if (name === "content") {
      setNote({ content: value, title: note.title });
    }
  }

  function handleSubmit(event) {
    onAdd(note);
    // setNote({ title: "", content: "" });
    // event.preventDefault();
  }

  // const oldNote = setNote(...note, note);
  // console.log(oldNote);

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
      {/* {oldNote} & {note.content} */}
    </div>
  );
}

export default Note;
