import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });


    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event){
        //pass the new note back to App
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        //stop page from flashing/refreshing
        event.preventDefault();
    }


function expand(){
    setExpanded(true);
}


    return (
        <div>
            <form className="create-note">
                {isExpanded? <input name="title" onChange= {handleChange} value={note.title} placeholder="Title" /> : null}
                <textarea name="content" onClick={expand} onChange= {handleChange} value={note.content} placeholder="Write a note .." rows={isExpanded? 3 : 1} />
<Zoom in={isExpanded}>
                <Fab onClick={submitNote}><AddIcon/></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;