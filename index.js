// Module imports
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const api_get = require("./routes/api_get");
const { resolve } = require("path");

// create new instance of express app and set port
const app = express();
const port = process.env.PORT || 3000;
app.set("port", port);

// set body parser setting
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//use handlebars as templating engine
app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main",
      layoutsDir: path.join(__dirname, "views/layouts"),
      partialsDir: path.join(__dirname, "views/partials")
    })
  );
  app.set("view engine", "handlebars");

// look for all static files in the "static" directory
app.use(express.static(path.join(__dirname, "static")));

//App Routing -  connect routers the app
app.use("/", api_get);

// set app to listen for requests at port
app.listen(port, () => {
    console.log(
      `App listening at port: ${app.get("port")}; press Ctrl-C to terminate.`
    );
  });