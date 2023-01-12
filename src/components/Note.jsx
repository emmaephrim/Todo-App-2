import React, { useState } from "react";

function Note(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    if (event.target.name === "title") {
      setNote({ title: event.target.value, content: note.content });
    } else if (event.target.name === "content") {
      setNote({ content: event.target.value, title: note.title });
    }
  }

  function handleSubmit(event) {
    alert(`Todo submitted, Title: ${note.title}, Content: ${note.content} `);
    event.preventDefault();
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          value={note.title}
        />
        <label for="content">Content</label>
        <input
          type="text"
          id="content"
          name="content"
          value={note.content}
          onChange={handleChange}
        />
        <input type="submit" value="Add" />
      </form>
      {note.title} & {note.content}
    </div>
  );
}

export default Note;
