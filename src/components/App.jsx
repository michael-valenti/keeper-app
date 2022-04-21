import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function createNote(notes){

return(
  <Note
    key={notes.key}
    title={notes.title}
    body={notes.content}
    />
);

}

function App() {
    return (
      <div>
  <Heading />
      {notes.map(createNote)}
  <Footer />
      </div>
    );
  }
  
  export default App;