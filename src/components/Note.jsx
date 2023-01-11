import React, { useState } from "react";

function Note(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    setNote({ title: event.target.title, content: event.target.content });
  }

  return (
    <div>
      <form>
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
          value={note.value}
          onChange={handleChange}
        />
        <input type="submit" value="Add" onSubmit={handleSubmit} />
      </form>
    </div>
  );
}

export default Note;
