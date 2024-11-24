export class User {
  id: string;
  name: string;
  email: string;
  dob: Date;
  address: string | null;
  profile_url: string | null;

  constructor(
    id: string,
    name: string,
    email: string,
    dob: Date,
    address: string | null,
    profile_url: string | null
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.dob = dob;
    this.address = address;
    this.profile_url = profile_url;
  }
}
