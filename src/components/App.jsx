import { useState } from "react";
import "../css/App.css";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import Todo from "./Todo";

function App() {
  const [note, setNote] = useState({ title: "", content: "" });
  const [oldNotes, setOldNotes] = useState([]);

  return (
    <div>
      <Header />
      <Note
        note={note}
        setNote={setNote}
        oldNotes={oldNotes}
        setOldNotes={setOldNotes}
      />
      {oldNotes.map((item, index) => {
        return (
          <Todo
            title={item.title}
            content={item.content}
            key={index}
            id={index}
            setOldNotes={setOldNotes}
            oldNotes={oldNotes}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
