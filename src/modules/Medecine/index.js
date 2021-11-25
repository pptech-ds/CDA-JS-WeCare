import router from "./router";
import MedecineController from "./Controller";
import Medecine from "../Medecine/model";

const models = { Medecine };
const controller = new MedecineController(models);
const routes = router(controller);

export default routes;
