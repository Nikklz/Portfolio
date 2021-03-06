var express = require ("express");
var app = express ();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req,res){
	res.render("home");;	
});

app.get("/about", function(req,res){
	res.render("about");
})

app.get("/resume", function(req,res){
	res.render("resume");
});

app.get("/projects", function(req,res){
	res.render("projects");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started!" + process.env.PORT);
});
