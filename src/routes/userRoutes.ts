import express from "express";
import UserController from "@controllers/userContoller";
import { authenticate } from "@middlewares/authenticate";

const router = express.Router();
const userController = new UserController();

router.get("/:id", userController.getUser.bind(userController));
router.put(
  "/:id",
  authenticate,
  userController.updateUser.bind(userController)
);

export default router;
