const express = require("express");
const createUserContoller = require("../../controllers/user/createUserController");
const multerUpload = require("../../middleware/multer");
const loginController = require("../../controllers/user/loginController");
const isAuth = require("../../middleware/isAuth");
const logoutController = require("../../controllers/user/logoutController");
const userRouter = express.Router();

userRouter.post(
  "/create_user",
  multerUpload.single("avatar"),
  createUserContoller
);
userRouter.post("/login", loginController);
userRouter.post("/logout", logoutController);

module.exports = userRouter;
