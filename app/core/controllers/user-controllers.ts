import { responseInterceptor } from "../utilities/response.interceptor";
import { UserModel } from "../models/user-model";

export class UserController{
  public responseInterceptor: responseInterceptor;
  userModel: typeof UserModel;
  constructor() {
    this.responseInterceptor = new responseInterceptor();
    this.userModel = UserModel;

  }
  async createUser(req, res) {
   
  }

  async updateUser(req, res) {
    try {
    } catch (err) {}
  }

  async getUsers(req, res) {
    try {
    
    } catch (err) {}
  }

  async deleteUser(req, res) {
    try {
    } catch (err) {}
  }
}
