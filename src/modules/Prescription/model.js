import { Model, DataTypes } from "sequelize";
import db from "../../config/database";

class Prescription extends Model {
  static init(sequelize) {
    return super.init(
      {
        dosage: DataTypes.STRING,
      },
      { sequelize, modelName: "prescription", underscored: true }
    );
  }

  static associate(models) {
    // define association here
    console.log("Prescription log", models);
    this.belongsToMany(models.medecine, { through: 'medecines_prescriptions' });
    return this;
  }
}

Prescription.init(db.sequelize);

export default Prescription;
