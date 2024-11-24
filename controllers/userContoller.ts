import { UserRepository } from "@repositories/userRepositories";
import { NextFunction, Response, Request } from "express";

export default class UserController {
  private userRepository = new UserRepository();

  async getUsers(req: Request, res: Response, next: NextFunction) {
    const users = await this.userRepository.getUsers();
    res.status(200).json(users);
  }
}
