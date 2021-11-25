import UserRouter from "./User";
import AppointmentRouter from "./Appointment";
import AllergenRouter from "./Allergen";

const routes = {
  "/users": UserRouter,
  "/appointments": AppointmentRouter,
  "/allergens": AllergenRouter,
};

export default routes;
