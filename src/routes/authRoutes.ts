import express from "express";
import UserController from "@controllers/userContoller";

const router = express.Router();
const userController = new UserController();

router.post("/register", userController.register.bind(userController));

export default router;
