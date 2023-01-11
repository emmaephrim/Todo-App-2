import { useState } from "react";
import "../css/App.css";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
  const [note, setNote] = useState([]);

  return (
    <div>
      <Header />
      <Note note={note} />
      <Footer />
    </div>
  );
}

export default App;
