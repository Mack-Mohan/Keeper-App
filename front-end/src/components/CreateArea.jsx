import React, {useState} from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {


    const [expand, setExpand] = useState(false);

    function prevent(event){
        event.preventDefault();
    }

    function handleExpand(){
        setExpand(true);
    }


  return (
    <div>
      <form className="create-note" onSubmit={prevent}>
      {expand&&
        <input name="title" 
        placeholder="Title"
        value={props.note.title || ""}
         onChange = {props.newNote}
         />}
        <textarea 
        onClick={handleExpand}
        name="content" 
        placeholder="Take a note..." 
        row = {expand ? 3 : 2  } 
        value={props.note.content || ""}
        onChange = {props.newNote}
        />
        <Zoom in={expand}>
        <Fab onClick={props.handleChange}><AddIcon /></Fab> 
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
