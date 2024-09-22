const express = require("express");
const router = express.Router();

const { hello, bye, run } = require("../controllers/logsController");

// router.get("/hello/:name", hello);
router.post("/hello", hello);
router.get("/bye/:name", bye);

router.get("/run*", run);
router.get("/run/*", run);

module.exports = router;
