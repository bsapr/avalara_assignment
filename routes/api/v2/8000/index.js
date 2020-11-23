const express = require("express");

const router = express.Router();

router.use("/set", require("./insert"));
router.use("/read", require("./read"));

module.exports = router;
