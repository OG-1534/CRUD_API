require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT;

// SIMPLE ROUTE

app.get("/", (req,res) => {
	res.send("Server is running");
});

// START SERVER
app.listen(PORT, () => {
	console.log('Server is running on ${PORT}');
});
