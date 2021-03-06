var express = require('express');

var app = express();

app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/", function (req, res) {
	res.write("Please");
	res.end();
});

app.get("/home", function(req, res) {
	// Controller
	console.log("Received a request for the home page");
	var name = "John";
	var emailAddress = "john@email.com";

	var params = {username: name, email: emailAddress};

	res.render("home", params);
});

app.listen(process.env.PORT || 5000)