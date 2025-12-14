const pool = require("../db");

// ADD property
exports.addProperty = async (req, res) => {
  try {
    const { title, location, price, feature, address, description, type, images } = req.body;

    const result = await pool.query(
      `INSERT INTO properties(title,location,price,feature,address,description,type)
       VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING id`,
      [title, location, price, feature, address, description, type]
    );

    const propertyId = result.rows[0].id;

    for (let img of images) {
      await pool.query(
        "INSERT INTO property_images(property_id,image_url) VALUES($1,$2)",
        [propertyId, img]
      );
    }

    res.status(201).json({ message: "Property added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProperty = async (req, res) => {
  try {
    await pool.query("DELETE FROM properties WHERE id=$1", [req.params.id]);
    res.json({ message: "Property deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getProperties = async (req, res) => {
  const result = await pool.query("SELECT * FROM properties ORDER BY id DESC");
  res.json(result.rows);
};
