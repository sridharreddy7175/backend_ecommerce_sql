import { responseInterceptor } from "../utilities/response.interceptor";
import { UsersModel } from "../models/user-model";

export class UserController extends responseInterceptor {
  public responseInterceptor: responseInterceptor;
  userModel:UsersModel;
  constructor() {
    super();
    this.responseInterceptor = new responseInterceptor();
    this.userModel=new UsersModel();

  }
  async createUser(req, res) {
   
  }

  async updateUser(req, res) {
    try {
    } catch (err) {}
  }

  async getUsers(req, res) {
    try {
      console.log("hello");
    } catch (err) {}
  }

  async deleteUser(req, res) {
    try {
    } catch (err) {}
  }
}
