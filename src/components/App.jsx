import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function App() {
  return (
    <div>
      <Heading />
      {notes.map(notes => (
          <Note
            key={notes.key}
            title={notes.title}
            body={notes.content}
          />
      ))}
      <Footer />
    </div>
  );
}

export default App;