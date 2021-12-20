import { Router } from "express";

export default (controller) => {
  const router = Router();

  router.route("/signup").post(controller.signUpCustomer);

  return router;
};
