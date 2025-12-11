const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect("YOUR_MONGO_URL_HERE")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Error:", err));

// Routes
app.use("/api/content", require("./routes/contentRoutes"));

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
