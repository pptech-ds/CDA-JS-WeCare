import router from "./router";
import AllergenController from "./Controller";
import Allergen from "../Allergen/model";

const models = { Allergen };
const controller = new AllergenController(models);
const routes = router(controller);

export default routes;
