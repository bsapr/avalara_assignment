const express = require("express");

const router = express.Router();

const writeAPI = require("../../../../controllers/api/v2/" +
  port +
  "/writeData");

router.post("/", writeAPI.write_data);

module.exports = router;
