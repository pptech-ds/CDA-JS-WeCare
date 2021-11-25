import router from "./router";
import PractitionerController from "./Controller";
import Practitioner from "../Practitioner/model";

const models = { Practitioner };
const controller = new PractitionerController(models);
const routes = router(controller);

export default routes;
