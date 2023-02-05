const express = require("express");
const { connectDB } = require("./db");
const path = require("path");

const PORT = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/product", require("./routes/api/product"));

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client", "build", "index.html"));
  console.log(path.join(__dirname, "./client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Application running on PORT:${PORT}`));
