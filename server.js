const express = require("express");
const connectDB = require("./db");

const PORT = process.env.PORT || 8000;

connectDB();

const app = express();

app.listen(PORT, () => console.log(`Application running on PORT:${PORT}`));
