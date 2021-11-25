import router from "./router";
import CustomerController from "./Controller";
import Customer from "../Customer/model";

const models = { Customer };
const controller = new CustomerController(models);
const routes = router(controller);

export default routes;
