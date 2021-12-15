import ApiError from "../../helpers/ApiError";
import UserController from "../User/Controller";
import Customer from "./model";
import User from "../User/model";


class CustomerController extends UserController{
  _parent = UserController.prototype;

  // #models;
  // constructor(models) {
  //   super();
  //   this.#models = models;
  // }

  signUpUser = async (req, res, next) => {
    try {
      const user = await User.create(req.body);
      await Customer.create({user_id: user.id});
      res.status(200).json({
        status: "success",
        data: { user },
      });
    } catch (error) {
      throw new ApiError("user data invalid", 400);
    }
  };
}

export default CustomerController;
