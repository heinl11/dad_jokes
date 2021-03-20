const express = require("express");

// new router will handle all request to /
const app = express.Router();

app.get("/", (req, res, next) => {
    console.log("hey");
    res.render("home",
    {url: "/dad_jokes"});
})


module.exports = app; 