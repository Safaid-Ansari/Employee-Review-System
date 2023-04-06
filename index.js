const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
const URI = process.env.MONGO_URI;
// console.log("PORT", process.env.SECRET_KEY);
// const url =
//   "mongodb+srv://SafaidAnsari:Ansari_Safaid@cluster0.vmqnisk.mongodb.net/Employee_Review_System";

const expressLayouts = require("express-ejs-layouts");

const db = require("./config/mongoose");

// passport setup session cookie
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local");

const MongoStore = require("connect-mongo");
const { connect } = require("mongoose");

// for getting form data
app.use(express.urlencoded());

// for static files
app.use(express.static("./assets"));

app.use(expressLayouts);

// to render css file link in header
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// middleware for use session cookie
app.use(
  session({
    name: "Employee_Review_System",
    secret: process.env.SECRET_KEY,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: MongoStore.create(
      {
        mongoUrl: URI,
        autoRemove: "disabled",
      },
      function (err) {
        console.log(err || "connect-mongodb setup");
      }
    ),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use("/", require("./routes/index"));

app.listen(PORT, function (err) {
  if (err) {
    console.log("Error while connecting to server");
    return;
  }
  console.log(`Server running on port ${PORT}.`);
});
