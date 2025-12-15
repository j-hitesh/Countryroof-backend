require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./db");

pool.query("SELECT 1")
  .then(() => console.log("DB connected successfully"))
  .catch(err => console.error("DB error:", err.message));


const app = express();

app.use(cors());

// ✅ BOTH parsers (important)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/properties", require("./routes/propertyRoutes"));

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
