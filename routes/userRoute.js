const { Router } = require("express");
const router = Router();
const userController = require("../controllers/userController");
const { requireAdmin, checkUser } = require("../middlewares/authMiddleware");

// router.post("/register", userController.register);
router.post("/add_user", requireAdmin, userController.add_user);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.post("/edit/:_id", checkUser, userController.edit_user_info);
router.get("/getAll", userController.getAll);
router.get("/check-user", checkUser, (req, res) => {
  res.send({ user: req.user });
});

module.exports = router;
