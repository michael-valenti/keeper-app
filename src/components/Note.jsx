import React from "react";


//REACT jsx naming convention is first letter capitalized
//for functions

function Note(props) {
  return <div className="note"><h1>{props.title}</h1> <p>{props.body}</p></div>;
}

export default Note;