const { Router } = require("express");
const router = Router();
const colisController = require("../controllers/colisController");
const { requireAdmin, checkUser } = require("../middlewares/authMiddleware");

router.post("/add_colis", colisController.add_colis);

module.exports = router;
