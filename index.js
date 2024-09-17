require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT;
const db = process.env.DBURI;

mongoose.connect(db).then(() => {
	console.log("Connected to DB");
	app.listen(PORT, () => {
		console.log('Server is running on ${PORT}');
	});
});
.catch((err) => {
	console.log(err);
});
