const express = require("express");
const axios = require("axios");
const app = express();
var config = require("../loaders/config.js");

const options = {
    method: 'GET',
    url: config.api_url,
    headers: {
      'x-rapidapi-key': config.api_key,
      'x-rapidapi-host': config.api_host
    }
  };

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
    console.error(error);
  });
})


module.exports = app; 