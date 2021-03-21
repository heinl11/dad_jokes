var dotenv = require("dotenv");
dotenv.config();

var configurations = {
    "api_url": process.env.API_URL,
    "api_host": process.env.API_HOST,
    "api_key": process.env.API_KEY,
};

module.exports = configurations;