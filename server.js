var express = require('express');

var app = express();

app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/home", function(req, res) {
	// Controller
	console.log("Received a request for the home page");
	var name = "John";
	var emailAddress = "john@email.com";

	var params = {username: name, email: emailAddress};

	res.render("home", params);
});

app.listen(5000, function () {
	console.log('server is listening on port 5000');
})