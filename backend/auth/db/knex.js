var enviornment = process.env.NODE_ENV || "development";
var config = require("../knexfile")[enviornment];
module.exports = require("knex")[config];