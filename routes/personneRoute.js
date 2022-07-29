const { Router } = require("express");
const router = Router();
const personneController = require("../controllers/personneController");
const { requireAdmin, checkUser } = require("../middlewares/authMiddleware");

router.post("/add_personne", requireAdmin, personneController.add_personne);

module.exports = router;
