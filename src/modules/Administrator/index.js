import router from "./router";
import AdministratorController from "./Controller";
import Administrator from "../Administrator/model";

const models = { Administrator };
const controller = new AdministratorController(models);
const routes = router(controller);

export default routes;
