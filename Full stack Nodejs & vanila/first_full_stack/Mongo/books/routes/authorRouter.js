const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorController");

router.get("/test", authorController.test);
router.get("/all", authorController.getAll);

module.exports = router;
