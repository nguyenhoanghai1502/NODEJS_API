const Example = require("../models/example");

const express = require("express");

const router = express.Router();

router.get("/example", (req, res) => {
  res.send({
    example: "Example",
  });
});

module.exports = router;
