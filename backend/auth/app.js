const express = require("express");
const app = express();
const cors = require("cors");
const dbConfig = require("./db/DatabaseConfig");


dbConfig.initializeDB();

app.use(express.urlencoded({extended: false}));
app.use(express.json());


const authRoutes = require("./routes/auth");
//const userRoute = require("./routes/users");

app.use(cors());

app.use("/auth", authRoutes);
//app.use("/signup", userRoute);

app.listen(process.env.GUARD_PORT || 4000, function () {
	console.log("App Started on ", 4000);
});