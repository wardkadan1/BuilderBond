const express = require("express");
const router = express.Router();
const { handleJobs } = require("../controllers/jobController");

router.post("/", handleJobs);

module.exports = router;
