const { Router } = require("express");
const router = Router();
const truckController = require("../controllers/truckController");
const { requireAdmin, checkUser } = require("../middlewares/authMiddleware");

router.post("/add_truck", requireAdmin, truckController.add_truck);

router.post("/edit_id", requireAdmin, truckController.edit_id);
router.post("/edit_frais", requireAdmin, truckController.edit_frais);
router.post("/edit_depart_ville", requireAdmin, truckController.edit_depart_ville);
router.post("/edit_depart_time", requireAdmin, truckController.edit_depart_time);
router.post("/edit_arrival_ville", requireAdmin, truckController.edit_arrival_ville);
router.post("/edit_max_colis", requireAdmin, truckController.edit_max_colis);

router.post("/delete", requireAdmin, truckController.delete);

router.get("/getAll", truckController.getAll);
router.get("/getAllByDepart/:depart", truckController.getAllByDepart);


module.exports = router;
