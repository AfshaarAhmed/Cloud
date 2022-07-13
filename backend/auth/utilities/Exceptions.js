const {
	ValidationError,
	NotFoundError,
	// DBError,
	// ConstraintViolationError,
	UniqueViolationError,
	NotNullViolationError,
	// ForeignKeyViolationError,
	// CheckViolationError,
	// DataError
} = require("objection");

/**
 * @summary Handles Objection exceptions
 * @param {object} err Objection js error object
 * @example getError(err : ValidationError)
 * @returns JavaScript object which includes message, error type, data
 */
const getError = function (err) {
	console.log(err.message);
	if (err instanceof UniqueViolationError) {
		return {
			status: 409,
			message: err.columns.length > 0 ?`${err.columns[0]} already exists` : "Unknown Error",
		};
	}

	if (err instanceof NotFoundError) {
		return {
			status: 404,
			message: "Not Found",
		};
	}

	if (err instanceof NotNullViolationError) {
		return {
			status: 400,
			message: err.columns.length > 0 ? `${err.columns[0]} cannot be null` : "Unknown Error",
		};
	}

	if (err instanceof ValidationError) {
		return {
			status: 400,
			message: rr.message
		};
	}


	return {
		status: 404,
		message: err.message
	};

};

module.exports = { getError };