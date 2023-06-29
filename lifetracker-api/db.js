// database setup
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");
require("colors");

// create Client create connection string for application
const db = new Client({ connectionString: getDatabaseUri() });

// connect database to application using connection string in URI format
db.connect((err) => {
  if (err) {
    console.error("connection error: ", err.stack);
  } else {
    console.log("Success! Connected to postgres database!".blue);
  }
});

module.exports = db;
