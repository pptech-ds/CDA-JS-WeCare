import ApiError from "../../helpers/ApiError";
import logger from "../../config/winston";
import UserController from "../User/Controller";

class CustomerController extends UserController{
  _parent = UserController.prototype;

  #models;
  constructor(models) {
    super();
    this.#models = models;
  }
  
  async signUpUser(req, res, next) {
    try {
      // const user = await super.signUpUser(req.body);
      console.log('req.body', req.body);
      const user = this._parent.signUpUser.apply(this, req.body);
      const customer = await this.create(user.body);
      res.status(200).json("success");
    } catch (error) {
      next(error);
    }
  } 

}

export default CustomerController;
