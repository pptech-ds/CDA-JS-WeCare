import UserRouter from "./User";
import AppointmentRouter from "./Appointment";
import AllergenRouter from "./Allergen";
import MedecineRouter from "./Medecine";

const routes = {
  "/users": UserRouter,
  "/appointments": AppointmentRouter,
  "/allergens": AllergenRouter,
  "/medecines": MedecineRouter,
};

export default routes;
