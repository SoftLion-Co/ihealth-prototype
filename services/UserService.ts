import $api from "@/http";
import { User } from "@/models/User";
import { AxiosResponse } from "axios";

export default class UserService {
  static fetchUserByEmail(email: string): Promise<AxiosResponse<User>> {
    return $api.get<User>(`/users/${email}`);
  }
}
