
const mongoose = require('mongoose');

// connect from mongodb
mongoose.connect("mongodb+srv://SafaidAnsari:iBcR2P7fTHF4UZBx@cluster0.vmqnisk.mongodb.net/Employee-Review-System");
  
// acquire connection if it is successful
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'error connecting to db'));

// up and running then print the message
db.once('open', function(){
    console.log("successfully connected to database!");
});

module.exports = db;