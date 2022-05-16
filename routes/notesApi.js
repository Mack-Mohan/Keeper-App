const { response } = require('express');
const express = require('express');
const router = express.Router();
const Note = require("./models/Notes");

router.post("/addNote", (req,res)=> {
    const newNote = new Note({
        title: req.body.title,
        content: req.body.content
    });
    newNote.save();

});

router.get("/getNotes", (req,res)=> {
    Note.find({}, (err, data)=> {
        res.send(data);
    });
});

router.post("/deleteNote", (req,res) => {
    Note.deleteOne({
        title: req.body.title,
        content: req.body.content
    }, (err)=> {
        if(err){
            res.send(err);
        }
    });
});
