const Knex = require("knex");
const knexConfig = require("../knexfile");
const { Model } = require("objection");

//Knex Configuration
const knex = Knex(knexConfig.development);

const initializeDB = function () {

	//Initialize knex Model
	Model.knex(knex);

};

const destroyKnex = function () {
	knex.destroy();
};

module.exports = { initializeDB, destroyKnex };