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
	// res.sendFile(path.join(public, 'nicoleresume-page-001.jpg'))
	res.render("resume");
});

app.get("/portfolio", function(req,res){
	res.render("portfolio");
});

app.get("/contact", function(req,res){
	res.render("contact");
});


app.listen(3000, process.env.IP, function(){
    console.log("Server has started!");
});
