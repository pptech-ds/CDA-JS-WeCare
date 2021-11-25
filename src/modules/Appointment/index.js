import router from "./router";
import AppointmentController from "./Controller";
import Appointment from "../Appointment/model";

const models = { Appointment };
const controller = new AppointmentController(models);
const routes = router(controller);

export default routes;
