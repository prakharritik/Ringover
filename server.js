const express = require("express");
const { connectDB } = require("./db");

const PORT = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/api/users"));

app.listen(PORT, () => console.log(`Application running on PORT:${PORT}`));
