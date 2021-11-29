import { Router } from "express";

export default (controller) => {
  const router = Router();

  router.route("/login").post(controller.login);
  router.route("/signup").post(controller.signUpUser);

  return router;
};
