const express = require("express");
const router = express.Router();
const { handleUsers } = require("../controllers/userController");

router.post("/", handleUsers);

module.exports = router;
