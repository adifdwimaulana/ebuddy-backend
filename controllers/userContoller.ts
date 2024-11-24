import { auth } from "@configs/firebaseConfig";
import { User } from "@entities/user";
import { UserRepository } from "@repositories/userRepositories";
import { NextFunction, Response, Request } from "express";

export default class UserController {
  private userRepository = new UserRepository();

  async getUser(req: Request, res: Response, next: NextFunction) {
    // if (!req.uid) {
    //   console.error("Error");
    //   throw new Error("Uid not found");
    // }
    // const user = await this.userRepository.getUserByUid(req.uid);
    // res.status(200).json(user);
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password, address } = req.body;
      const createdUser = await auth.createUser({ email, password });
      const data = new User(createdUser.uid, name, email, address);
      const user = await this.userRepository.create(data);

      res.status(201).json(user);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    // const uid = req.uid;
    // const { name, email, address, profile_url } = req.body;
    // const user = await this.getUserByUid(uid);
  }
}
