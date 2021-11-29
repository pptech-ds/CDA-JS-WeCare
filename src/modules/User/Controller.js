import ApiError from "../../helpers/ApiError";
import logger from "../../config/winston";
import User from "./model";

class UserController {
  #models;
  constructor(models) {
    this.#models = models;
  }

  signUpUser = async (userData) => {
    try{
      // console.log('userData', userData);
      const user = await User.create(userData.body);
      return user;
    } catch (error) {
      throw new ApiError('user data invalid', 400);
    }
  }

  login = async (req, res, next) => {
    try {
      if (false) throw new ApiError("error message", 500);
      res.status(200).json("youpi");
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
