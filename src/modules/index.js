import UserRouter from './User';
import AppointmentRouter from './Appointment';

const routes = {
    "/users": UserRouter,
    "/appointments": AppointmentRouter
}

export default routes;