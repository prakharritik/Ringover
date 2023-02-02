const express = require("express");
const { connectDB } = require("./db");

const PORT = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/product", require("./routes/api/product"));

app.listen(PORT, () => console.log(`Application running on PORT:${PORT}`));
