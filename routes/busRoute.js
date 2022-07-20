const { Router } = require("express");
const router = Router();
const busController = require("../controllers/busController");
const { requireAdmin, checkUser } = require("../middlewares/authMiddleware");

router.post("/add_bus", requireAdmin, busController.add_bus);

router.post("/edit_id", requireAdmin, busController.edit_id);
router.post("/edit_ticket_price", requireAdmin, busController.edit_ticket_price);
router.post("/edit_depart_ville", requireAdmin, busController.edit_depart_ville);
router.post("/edit_depart_time", requireAdmin, busController.edit_depart_time);
router.post("/edit_arrival_ville", requireAdmin, busController.edit_arrival_ville);
router.post("/edit_max_personnes", requireAdmin, busController.edit_max_personnes);

router.post("/delete", requireAdmin, busController.delete);

router.get("/getAll", busController.getAll);

module.exports = router;
