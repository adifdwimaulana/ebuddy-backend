import { db } from "@configs/firebaseConfig";
import { User } from "@entities/user";

export class UserRepository {
  private userCollection = db.collection("users");

  async create(data: User) {
    const user = await this.userCollection.doc(data.id).set(data.toObject());
    return user;
  }

  async getUserByUid(uid: string) {
    const user = await this.userCollection.doc(uid).get();
    return user;
  }
}
