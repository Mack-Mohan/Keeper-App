const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/notesApi");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

dotenv.config()

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/app', routes);

mongoose.connect(process.env.DB_ACCESS || "mongodb://localhost:27017/notesDB", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

if(process.env.NODE_ENV === "production"){
    app.use(express.static("front-end/build"));
}

app.get('/',(req,res)=>{
    res.send('I am on!!');
});

app.listen(PORT);