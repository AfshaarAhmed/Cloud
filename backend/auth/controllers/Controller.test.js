const authController = require("./AuthController");

const dbConfig = require("./../db/DatabaseConfig");

dbConfig.initializeDB();

describe("Authentication", () => {

	afterAll((done) => {

		dbConfig.destroyKnex();
		done();

	});

	it('should register user and output success status code', async () => {
		const { result } = await authController.register("Name", `${Math.random().toString(7)}@email.com`, "password");
		expect(result).toMatchObject({ status: 200 });
	});

	it('should Login and output success status code', async () => {
		const { result } = await authController.login("test@email.com", "password");
		expect(result).toMatchObject({ status: 200 });
	});

})