require("dotenv").config();
var express = require("express");
var helperFunctions = require("./helperFunction.js");
const { Pool } = require("pg");
const connectionString =
  "postgres://fciplhtshrnjqe:20d8b8cea1e9fd2e5ad69508ed4776abc8d2ea8598e6ca15981baa746bb0e24c@ec2-54-159-175-113.compute-1.amazonaws.com:5432/d1hslhgec72rs2";

var app = express();

const pool = new Pool({
  connectionString: connectionString,
  ssl: { rejectUnauthorized: false }
});

app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/getPerson", (req, res) => {
  const id = req.query.id;
  pool.connect((err, client, done) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    client.query("SELECT * FROM people", function(err, result) {
      done();
      // If an error occurred...
      if (err) {
        console.log("Error in query: ");
        console.log(err);
        return;
      }

      res.end(JSON.stringify(result.rows));
    });
  });
});

app.get("/getChatMates", (req, res) => {
  const userId = req.query.id;
  const input = req.query.input;
  pool.connect((err, client, done) => {
    if (err) {
      console.log("ERROR", err);
      res.status(400).send(err);
    }
    client.query(
      `SELECT username, id, first_name, last_name FROM users WHERE id!=${userId} AND username ILIKE '%${input}%' OR first_name ILIKE '%${input}%' OR last_name ILIKE '%${input}%'`,
      function(err, result) {
        done();
        if (err) {
          console.log("Error in query: ");
          console.log(err);
          return;
        }

        res.end(JSON.stringify(result.rows));
      }
    );
  });
});

app.get("/price", (req, res) =>
  helperFunctions.handleFedexPriceLogic(req, res)
);

app.get("/home", function(req, res) {
  // Controller
  var name = "John";
  var emailAddress = "john@email.com";

  var params = { username: name, email: emailAddress };

  res.render("home", params);
});

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(process.env.PORT || 5000);
