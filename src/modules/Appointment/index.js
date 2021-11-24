import router from './router';
import AppointController from './Controller';
import Appointment from '../Appointment/model';

const models = {Appointment};
const controller = new AppointController(models);
const routes = router(controller);


export default routes;

