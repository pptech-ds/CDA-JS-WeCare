import { Model, DataTypes } from "sequelize";
import db from "../../config/database";

class Appointment extends Model {
  static init(sequelize) {
    return super.init(
      {
        startTime: DataTypes.DATE,
        endTime: DataTypes.DATE,
      },
      { sequelize, modelName: "appointment", underscored: true }
    );
  }

  static associate(models) {
    // define association here
    console.log("Appointment log", models);
    this.belongsTo(models.customer, { foreignKey: "customer_id" });
    this.belongsTo(models.practitioner, { foreignKey: "practitioner_id" });
    this.hasMany(models.prescription, { foreignKey: "appointment_id" });
    return this;
  }
}

Appointment.init(db.sequelize);

export default Appointment;
