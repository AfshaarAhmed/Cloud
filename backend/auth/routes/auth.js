const express = require("express");
const router = express.Router();
const { Users } = require("../Models/Users");
const authController = require("./../controllers/AuthController");

router.post("/signup", async (req, res) => {
	
	const { name, email, password } = req.body;

	const { result, error } = await authController.register(name, email, password);

	if (error) {
		res.status(error.status).json(error.message);
	} else if (result) {
		res.status(result.status).json(result.data);
	} else {
		res.sendStatus(500);
	}

});

router.get("/test", async (req, res) => {

	res.sendStatus(200);

});

router.post("/login", async function (req, res) {

	const { email, password } = req.body;

	const { result, error } = await authController.login(email, password);

	if (error) {
		res.status(error.status).json(error.message);
	} else if (result) {
		res.status(result.status).json(result.data);
	} else {
		res.sendStatus(500);
	}

});

module.exports = router;