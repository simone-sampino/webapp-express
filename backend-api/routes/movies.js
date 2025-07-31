const express = require("express");
const router = express.Router();

const movieContoller = require("../controllers/movieController");

router.get("/", movieContoller.index);

router.get("/:id", movieContoller.show);

module.exports = router;
