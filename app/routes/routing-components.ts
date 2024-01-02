import { UserController } from "../core/controllers/user-controllers";
import {responseInterceptor} from '../core/utilities/response.interceptor'
export class RoutingComponents {
    userController: UserController;
    responseInterceptor:responseInterceptor
    constructor() {
        this.userController = new UserController();
        this.responseInterceptor=new responseInterceptor();

    }

     /**
   *  page not found.
   */
  pageNotFound(req, res, next) {
    this.responseInterceptor.errorResponse(
      res,
      400,
      "entered URL is invalid. Please try again",
      ""
    );
  }

    CreateUser(req, res, next) {
        this.userController.createUser(req, res);
    }
    GetUser(req,res){
        this.userController.getUsers(req, res);
    }
    UpdateUser(req,res){
        this.userController.updateUser(req, res);
    }
    DeleteUser(req,res){
        this.userController.deleteUser(req, res);
    }
}