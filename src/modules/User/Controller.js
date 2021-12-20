import ApiError from "../../helpers/ApiError";

class UserController {
  #models;
  constructor(models) {
    this.#models = models;
  }

  async signUpUser (userData) {
    return await this.#models.User.create(userData);
  };

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
