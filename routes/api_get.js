const express = require("express");
const axios = require("axios");
const app = express();
var config = require("../loaders/config.js");

// Set headers with host and key. 
const options = {
    method: 'GET',
    url: config.api_url,
    headers: {
      'x-rapidapi-key': config.api_key,
      'x-rapidapi-host': config.api_host
    }
  };

// Get joke from API.
app.get("/", (req, res, next) => {
  axios.request(options).then(function (response) {
    res.render("home",
    {css: ["flip_card.css"], 
    js: ["flip_card.js"],
    joke: {
      setup: response.data.body[0].setup, 
      punchline: response.data.body[0].punchline}
    });
  }).catch(function (error) {
    res.render("home", 
    {css: ["flip_card.css"], 
    js: ["flip_card.js"], 
    joke: {
      setup: "503 : API Unavailable - Try Again Later :(",
      punchline: "503 : API Unavailable - Try Again Later :("}
    });
    console.error(error.response.status);
    console.error(error.response.statusText);
  });
})


module.exports = app; 