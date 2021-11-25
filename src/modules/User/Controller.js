import ApiError from "../../helpers/ApiError";
import logger from "../../config/winston";


// logger.info("What rolls down stairs");
// logger.warn("Whats great for a snack,");
// logger.error("Its log, log, log");

// logger.info("::test::%s::%s::%s", "mon message", "test2", "test3");
// logger.warn("::test::%s::%s::%s", "mon message", "test2", "test3");
// logger.error("::test::%s::%s::%s", "mon message", "test2", "test3");


class UserController {
  #models;
  constructor(models) {
    this.#models = models;
  }

  login = async (req, res, next) => {
    try {
      // const newUser = await this.#models.User.findOne()
      if (true) throw new ApiError("error message", 403);

      res.status(200).json("youpi");

      // // Log a message
      // logger.log({
      // // Message to be logged
      //     message: 'test1',

      // // Level of the message logging
      //     level: 'info'
      // });
      // logger.info('test2');
      // // Log a message
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
