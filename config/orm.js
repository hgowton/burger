//Import mysql connection
var connection = require("../config/connection.js");

//Create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//Export orm object to for use by burgers.js
//NOTE NOTE ---------- all function in cats
selectAll();

//NOTE NOTE ---------- create function in cats
insertOne();

//NOTE NOTE ---------- update function in cats
updateOne();

//EXTRA EXTRA NOTE NOTE ---------- delete function in cats
cancelOne();


module.exports = orm;