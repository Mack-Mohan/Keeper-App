const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/notesApi");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const path = require("path");

dotenv.config();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/app', routes);

mongoose.connect(process.env.DB_ACCESS, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'front-end/build')));
    app.get('*',(req,res)=>
        res.sendFile(path.resolve(__dirname, 'front-end', 'build', 'index.html'))
    );
  }
else{
app.get('/',(req,res)=>{
    res.send('I am on!!');
});}

app.listen(PORT);