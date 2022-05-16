import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import axios from "axios";
import CreateArea from "./components/CreateArea";
import { appBarClasses } from "@mui/material";

function App() {
    const [note, setNote]  = useState({
        title: "",
        content: ""
    });

    const [deleteState, setDeleteState] = useState(false);
    

    var [notes, setNotes] = useState([]);

    if(notes.length === 0){
        axios.get('http://localhost:3001/getNotes')
        .then(res => {
            
            setNotes(res.data);
        })
    }
    



    function handleChange(event){
        const {name,value} = event.target;
        setNotes((prev)=> {
            return(
                [...prev, note]
            );
        });
        setNote(()=> {return({
            title: "",
            content: ""
            })})

            axios.post("http://localhost:3001/addNote", note);

    }

    function newNote(event){
        const {name,value} = event.target;
        setNote((prev) => {
            return({
                ...prev,
                [name]: value
            });
        });
    }

    function deleteNote(index){
    setNotes((prev) => {
        return(prev.filter((note, id) => {
            return(
                id !== index
            );
        }));
    });
    axios.post("http://localhost:3001/deleteNote",notes[index]);
    }



  return ( 
    <div>
      <Header />
      <CreateArea 
        newNote= {newNote}
        handleChange= {handleChange}
        note= {note}  
      />
        {notes.map((note, i) => {
            return(
                <Note
                key = {i}
                id = {i}
                title = {note.title}
                content = {note.content}
                deleteNote = {deleteNote}
                 />
            )
        })}
      <Footer />
    </div>
  );
}

export default App;
