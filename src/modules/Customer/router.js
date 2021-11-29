import { Router } from "express";

export default (controller) => {
  const router = Router();

  router.route("/signup").post(controller.signUpUser);

  return router;
};
