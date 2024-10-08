require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/productRoutes");

//Middleware to parse JSON data
app.use(express.json());

const PORT = process.env.PORT;
const db = process.env.DBURI;

mongoose.connect(db).then(() => {
	console.log("Connected to DB");
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	});
})
.catch((err) => {
	console.log(err);
});

app.use("/api/product", router);
