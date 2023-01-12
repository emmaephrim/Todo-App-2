import { useState } from "react";
import "../css/App.css";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
  function addNote(note) {
    console.log(note);
  }

  return (
    <div>
      <Header />
      <Note onAdd={addNote} />
      <Footer />
    </div>
  );
}

export default App;
