import UserRouter from "./User";
import PractitionerRouter from "./Practitioner";
import CustomerRouter from "./Customer";
import AdministratorRouter from "./Administrator";
import AppointmentRouter from "./Appointment";
import AllergenRouter from "./Allergen";
import MedecineRouter from "./Medecine";
import PrescriptionRouter from "./Prescription";

const routes = {
  "/users": UserRouter,
  "/practitioners": PractitionerRouter,
  "/customers": CustomerRouter,
  "/administrators": AdministratorRouter,
  "/appointments": AppointmentRouter,
  "/allergens": AllergenRouter,
  "/medecines": MedecineRouter,
  "/prescriptions": PrescriptionRouter,
};

export default routes;
