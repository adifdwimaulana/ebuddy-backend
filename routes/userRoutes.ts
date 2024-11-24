import express from "express";
import UserController from "@controllers/userContoller";

const router = express.Router();
const userController = new UserController();

router.get("/", userController.getUsers.bind(userController));

export default router;
