const { Router, request, response, json } = require("express");
const multer = require("multer")
const uploadConfig = require("../configs/upload")
const UserAvatarController = require("../controllers/UserAvatarController")

const UserController = require("../controllers/UsersController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);


const userController = new UserController();
const userAvatarController = new UserAvatarController();

usersRoutes.post("/" ,  userController.create);
usersRoutes.put("/" , ensureAuthenticated , userController.update);
usersRoutes.patch("/avatar" , ensureAuthenticated , upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes;