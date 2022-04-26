import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@material-ui/core/Fab';


function CreateArea(props) {

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

    return (
        <div>
            <form className="create-note">
                <input name="title" onChange= {handleChange} value={note.title} placeholder="Title" />
                <textarea name="content" onChange= {handleChange} value={note.content} placeholder="Take a note .." rows="3" />

                <Fab onClick={submitNote}><AddIcon/></Fab>
            </form>
        </div>
    );
}

export default CreateArea;