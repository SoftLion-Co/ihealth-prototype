import $api from "@/http";
import { AuthResponse } from "@/models/AuthResponse";
import { AxiosResponse } from "axios";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post("/login", { email, password });
  }
  static async registration(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post("/registration", { firstName, lastName, email, password });
  }
  static async logout(): Promise<void> {
    return $api.post("/logout");
  }
}
