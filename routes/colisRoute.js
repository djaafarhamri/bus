const { Router } = require("express");
const router = Router();
const colisController = require("../controllers/colisController");
const { requireAdmin, checkUser } = require("../middlewares/authMiddleware");

router.post("/add_colis", requireAdmin, colisController.add_colis);

module.exports = router;
