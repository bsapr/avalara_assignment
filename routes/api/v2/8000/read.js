var port = 8000;

const express = require("express");

const router = express.Router();

const readAPI = require("../../../../controllers/api/v2/" + port + "/readData");

router.get("/:key", readAPI.read_data);

module.exports = router;
