const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
	res.json(["hello", "word"]);
})

app.listen(5000, (err) => console.log(err));