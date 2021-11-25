import UserRouter from "./User";
import AppointmentRouter from "./Appointment";
import AllergenRouter from "./Allergen";
import MedecineRouter from "./Medecine";
import PrescriptionRouter from "./Prescription";

const routes = {
  "/users": UserRouter,
  "/appointments": AppointmentRouter,
  "/allergens": AllergenRouter,
  "/medecines": MedecineRouter,
  "/prescriptions": PrescriptionRouter,
};

export default routes;
