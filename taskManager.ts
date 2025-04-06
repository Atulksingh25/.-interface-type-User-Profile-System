interface Address {
  city: string;
  state: string;
}

type Role = "Admin" | "User" | "Guest";

interface UserProfile {
  id: number;
  name: string;
  email: string;
  address: Address;
  role: Role;
}

const user1: UserProfile = {
  id: 1,
  name: "Amit",
  email: "amit@example.com",
  address: { city: "Delhi", state: "DL" },
  role: "Admin"
};
 
