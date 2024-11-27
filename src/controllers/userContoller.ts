import { auth } from "@configs/firebaseConfig";
import { User } from "@entities/user";
import { UserRepository } from "@repositories/userRepositories";
import { NextFunction, Response, Request } from "express";

export default class UserController {
  private userRepository = new UserRepository();

  async getUser(req: Request, res: Response, next: NextFunction) {
    if (!req.uid) {
      throw new Error("Uid not found");
    }

    const user = await this.userRepository.getUserByUid(req.uid);
    res.status(200).json(user);
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const createdUser = await auth.createUser({ email, password });
      const user = await this.userRepository.create({
        ...req.body,
        id: createdUser.uid,
      } as User);

      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.uid) {
        throw new Error("Uid not found");
      }

      const user = await this.userRepository.updateUser(
        String(req.uid),
        req.body
      );
      res
        .status(200)
        .json({ message: "User updated successfully", data: user });
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  }
}
