import { User } from "./user.interface";

export interface RegisterResponse {
  profile: User;
  id: string;
  token: string;
}

