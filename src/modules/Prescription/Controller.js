import ApiError from "../../helpers/ApiError";
import logger from "../../config/winston";


class PrescriptionController {
  #models;
  constructor(models) {
    this.#models = models;
  }

  login = async (req, res, next) => {
    try {
      if (true) throw new ApiError("error message", 403);

      res.status(200).json("youpi");

    } catch (error) {
      next(error);
    }
  };
}

export default PrescriptionController;
