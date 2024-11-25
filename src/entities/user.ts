export class User {
  id: string;
  name: string;
  email: string;
  address: string | null;

  constructor(id: string, name: string, email: string, address: string | null) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
  }

  toObject() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      address: this.address,
    };
  }
}
