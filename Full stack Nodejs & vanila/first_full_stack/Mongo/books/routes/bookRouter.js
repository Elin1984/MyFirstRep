const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.get("/test", bookController.test);
router.get("/all", bookController.getAll);
router.get("/one/:id", bookController.getOne);
router.get("/one/name/:name", bookController.getOneByName);
router.post("/create", bookController.createOne);
router.put("/update/:id", bookController.updateOne);

module.exports = router;
