import ApiError from "../../helpers/ApiError";
import UserController from "../User/Controller";


class CustomerController extends UserController {
  #models;
  constructor(models) {
    super(models);
    this.#models = models;
  }

  signUpCustomer = async (req, res, next) => {
    try {
      const user = await super.signUpUser(req.body)
      await this.#models.Customer.create({user_id: user.id});
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
