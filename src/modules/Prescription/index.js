import router from "./router";
import PrescriptionController from "./Controller";
import Prescription from "../Prescription/model";

const models = { Prescription };
const controller = new PrescriptionController(models);
const routes = router(controller);

export default routes;
