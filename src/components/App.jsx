import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import Todo from "./Todo";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [note, setNote] = useState({ title: "", content: "" });
  const [oldNotes, setOldNotes] = useState([]);

  function editNote(id) {
    setNote({ title: oldNotes[id].title, content: oldNotes[id].content });
  }

  return (
    <div className="">
      <Header />
      <Note
        note={note}
        setNote={setNote}
        oldNotes={oldNotes}
        setOldNotes={setOldNotes}
      />
      <div className="list-control">
        {oldNotes.map((item, index) => {
          return (
            <Todo
              title={item.title}
              content={item.content}
              key={index}
              id={index}
              setOldNotes={setOldNotes}
              oldNotes={oldNotes}
              editNote={editNote}
            />
          );
        })}
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
