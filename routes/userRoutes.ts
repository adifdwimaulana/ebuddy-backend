import express from "express";
import UserController from "@controllers/userContoller";
import { authenticate } from "@middlewares/authenticate";

const router = express.Router();
const userController = new UserController();

router.get("/:id", authenticate, userController.getUser.bind(userController));
router.post("/", userController.register.bind(userController));

export default router;
