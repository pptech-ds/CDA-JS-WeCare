import router from "./router";
import CustomerController from "./Controller";
import Customer from "../Customer/model";
import User from "../User/model";

const models = { Customer, User };
const controller = new CustomerController(models);
const routes = router(controller);

export default routes;
