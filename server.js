require('dotenv').config();
var express = require('express');
var helperFunctions = require('./helperFunction.js');
const { Pool } = require('pg');
const connectionString = 'postgres://fciplhtshrnjqe:20d8b8cea1e9fd2e5ad69508ed4776abc8d2ea8598e6ca15981baa746bb0e24c@ec2-54-159-175-113.compute-1.amazonaws.com:5432/d1hslhgec72rs2?ssl=true';

var app = express();

const pool = new Pool({connectionString: connectionString, ssl: {rejectUnauthorized:false}});

// pg.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err)
//   process.exit(-1)
// })

app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/getPerson", (req, res) => {
	const id = req.query.id;
	console.log(id, req.query);
	var sql = "SELECT * FROM people";

	pool.query(sql, function(err, result) {
	    // If an error occurred...
	    if (err) {
	        console.log("Error in query: ")
	        console.log(err);
	    }

	    // Log this to the console for debugging purposes.
	    console.log("Back from DB with result:");
	    console.log(result.rows);


	}); 
})

app.get("/price", (req, res) => helperFunctions.handleFedexPriceLogic(req, res));

app.get("/home", function(req, res) {
	// Controller
	var name = "John";
	var emailAddress = "john@email.com";

	var params = {username: name, email: emailAddress};

	res.render("home", params);
});

app.get("/", function (req, res) {
	res.render("index");
});

app.listen(process.env.PORT || 5000)