const express = require("express");
const mysql = require("mysql");
const cors = require("cors"); 

const app = express();

//this I'm using to parse every object sent from frontend to backend
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    user : "root",
    host:"localhost",
    password: "Anu1234#",
    database:"userdb"
});

//backend route
app.post('/register',(req, res) => {

    const name  = req.body.username
    const email = req.body.useremail


    db.query("INSERT INTO userdb.register (name, email) VALUES(?,?)",
    [name, email],
    (err,result) =>{
        console.log(err);
    });
});

app.listen(3001,()=>{
    console.log("running server");
})