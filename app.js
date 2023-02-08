var express = require("express");
var app = express();
var path = require("path");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
const database = require("./config/database");
var port = process.env.port||3000;
var db = require("./config/database");

 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.use(express.json());

mongoose.connect(db.mongoURI
    ,{
    useNewURLParser:true
}).then(function(){
    console.log("Connected to MongoDB Database");
}).catch(function(err){
    console.log(err);
})

require("./models/Game");
var HighScore = mongoose.model("HighScore");

app.get("/", function(req, res){
    res.redirect("index.html");
})

app.post("/saveHighscore", function(req, res){
    console.log(req.body)
    new HighScore(req.body).save().then(function(){
        res.redirect("index.html");
    })
})



app.use(express.static(__dirname+"/pages"));
app.listen(port, function(){
    console.log(`Running on port ${port}`)
})
