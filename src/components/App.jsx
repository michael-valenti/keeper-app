import React, {useState} from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";

import CreateArea from "./CreateArea";

function App() {

const [notes, setNotes] = useState([]);

function addNote(newNote){
setNotes(prevNotes => {
 return [...prevNotes, newNote];
})
}


  return (
    <div>
      <Heading />
      <CreateArea 
      onAdd={addNote}
      />
      {notes.map(noteItem => (
          <Note
            title={noteItem.title}
            body={noteItem.content}
          />
      ))}
      <Footer />
    </div>
  );
}

export default App;