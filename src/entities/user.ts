export class User {
  id: string;
  name: string;
  email: string;
  gender: string | null;
  address: string | null;

  constructor(
    id: string,
    name: string,
    email: string,
    gender: string | null,
    address: string | null
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.gender = gender;
    this.address = address;
  }

  toObject() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      gender: this.gender,
      address: this.address,
    };
  }
}
