const express = require("express");
const router = express.Router();

const {
  addProperty,
  deleteProperty,
  getProperties
} = require("../controllers/propertyController");

router.post("/", addProperty);
router.get("/", getProperties);
router.delete("/:id", deleteProperty);

module.exports = router;
