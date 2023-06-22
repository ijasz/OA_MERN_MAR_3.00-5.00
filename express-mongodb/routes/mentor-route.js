const router = require("express").Router();
const { addOne, getAll } = require("../controllers/mentor-controller");

router.post("/add", addOne);
router.get("/get", getAll);

module.exports = router;
