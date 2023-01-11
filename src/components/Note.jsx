import React, { useState } from "react";

function Note(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleClick() {}

  return (
    <form>
      <label for="title">Title</label>
      <input type="text" id="title" name="title" />
      <label for="content">Content</label>
      <input type="text" id="content" name="content" />
      <input type="submit" value="Add" />
    </form>
  );
}

export default Note;
