const express = require("express");
const router = express.Router();
const Content = require("../models/Content");

router.post("/", async (req, res) => {
  try {
    const content = await Content.create(req.body);
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get("/", async (req, res) => {
  const data = await Content.find();
  res.json(data);
});

router.put("/:id", async (req, res) => {
  try {
    const updated = await Content.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Content.findByIdAndDelete(req.params.id);
    res.json({ message: "Content Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
