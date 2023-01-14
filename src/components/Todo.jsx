import React from "react";

function Todo({ title, content, id, setOldNotes, oldNotes }) {
  function handleClick() {
    setOldNotes(
      oldNotes.filter((item, index) => {
        return index !== id;
      }),
    );
  }

  return (
    <div id={id}>
      <b> {title} </b>
      <p> {content} </p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Todo;
