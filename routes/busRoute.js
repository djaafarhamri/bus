const { Router } = require("express");
const router = Router();
const busController = require("../controllers/busController");
const { requireAdmin, checkUser } = require("../middlewares/authMiddleware");

router.post("/add_bus", requireAdmin, busController.add_bus);

module.exports = router;
