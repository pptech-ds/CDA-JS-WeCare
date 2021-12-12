import ApiError from "../../helpers/ApiError";
import logger from "../../config/winston";
import UserController from "../User/Controller";
import Customer from "./model";
import User from "../User/model";


class CustomerController extends UserController{
  _parent = UserController.prototype;

  #models;
  constructor(models) {
    super();
    this.#models = models;
  }
}

export default CustomerController;
