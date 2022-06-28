const { Router } = require("express");
const router = Router();
const userController = require("../controllers/userController");
const { requireAdmin, checkUser } = require("../middlewares/authMiddleware");

// router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.post("/edit/:_id", checkUser, userController.edit_user_info);
router.get("/test", requireAdmin, async (req, res) => {
  res.send("test");
});

module.exports = router;
