import { API_URL } from "@/http";
import { AuthResponse } from "@/models/AuthResponse";
import { User } from "@/models/User";
import AuthService from "@/services/AuthService";
import axios from "axios";
import { makeAutoObservable } from "mobx";

export default class Store {
  user = {} as User;
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: User) {
    this.user = user;
  }
  setAuth(bool: boolean) {
    this.isAuth = bool;
  }
  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("ihealthtoken", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  }
  async registration(firstName: string, lastName: string) {
    try {
      const response = await AuthService.registration(firstName, lastName);
      localStorage.setItem("ihealthtoken", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  }
  async logout() {
    try {
      await AuthService.logout();
      localStorage.removeItem("ihealthtoken");
      this.setAuth(false);
      this.setUser({} as User);
    } catch (error) {
      console.log(error);
    }
  }
  async checkAuth() {
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem("ihealthtoken", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  }
}
