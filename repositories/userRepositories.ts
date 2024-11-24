import { db } from "@configs/firebaseConfig";
import { User } from "@entities/user";

export class UserRepository {
  private userCollection = db.collection("users");

  async register(data: User) {
    const user = await this.userCollection.add(data);
    return user;
  }

  private async checkUserExist(email: string) {
    const user = await this.userCollection.where("email", "==", email).get();

    if (user) {
      throw new Error("User already exist");
    }

    return true;
  }

  async getUsers() {
    const users: User[] = [];
    const snapshot = await this.userCollection.get();

    snapshot.forEach((doc) => {
      const data = doc.data();
      users.push(
        new User(
          doc.id,
          data.name,
          data.email,
          data.dob.toDate(),
          data.address,
          data.profile_url
        )
      );
    });

    return users;
  }
}
