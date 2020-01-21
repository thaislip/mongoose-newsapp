var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

var express = require("express");
var app = express();

app.use(logger("dev"));
app.use(
    bodyParser.urlencoded({
        extended:false
    })
);

app.use(express.static(process.cwd() + "/public"));

var hb = require("express-handlebars");
app.engine("handlebars", hb({defaultLayout: "main"}));
app.set("view engine", "handlebars");

mongoose.connect("mongodb://localhost/mongoose-newsapp")
// const MONGODB_URI= process.env.MONGODB_URI || "mongodb://localhost/mongoose-newsapp";
// mongoose.connect(MONGODB_URI, {useNewUrlParser: true});


var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("connected to mongoose!");
});
 
var routes = require("./controller/controller");
app.use("/", routes);


var port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log("listening on PORT " + port);
}); 