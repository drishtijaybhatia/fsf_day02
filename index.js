//Load express and path 
var express = require("express");
var path = require("path");

//Create instance of express
var app = express();

app.use(express.static(path.join(__dirname + "/public")));
app.use("/images",express.static(path.join(__dirname + "/images")));

var port = parseInt(process.argv[2])|| parseInt(process.env.APP_PORT) ||3000;
app.set("port", port );

//start up the server on the sepcified port 
app.listen(app.get("port"), function(){
console.info("Application is listening on port : "+ app.get("port"));
});

