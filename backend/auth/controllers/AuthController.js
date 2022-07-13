const { Users } = require("../Models/Users");
const exceptionHandler = require("./../utilities/Exceptions");

const register = async function (name, email, password) {

	try {
		const user = await Users.query().insert({
			name: name,
			email: email,
			password: password
		});

		return { result: { status: 200, data: user } }

	} catch (err) {
		return { error: exceptionHandler.getError(err) }
	}

}

const login = async function (email, password) {

	try {

		const user = await Users.query().findOne({ email: email, password: password });

		return { result: { status: 200, data: user } };

	} catch (err) {
		return { error: exceptionHandler.getError(err) };
	}

}

module.exports = { login, register }