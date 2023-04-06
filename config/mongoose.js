const mongoose = require("mongoose");
const URI = process.env.MONGO_URI;
// connect from mongodb
mongoose.connect(URI);

// acquire connection if it is successful
const db = mongoose.connection;

// error
db.on("error", console.error.bind(console, "error connecting to db"));

// up and running then print the message
db.once("open", function () {
  console.log("successfully connected to database!");
});

module.exports = db;
