const express = require("express");
const router = express.Router();

const { add, remove, multiply } = require("../controllers/mathController");

router.get("/add/:a/:b", add);
router.get("/remove/:a/:b", remove);
router.get("/multiply/:a/:b", multiply);



module.exports = router;
