import { Model, DataTypes } from "sequelize";
import User from "../User/model";
import db from "../../config/database";

class Practitioner extends Model {
  static init(sequelize) {
    return super.init(
      {
        rpps: DataTypes.STRING,
      },
      { sequelize, modelName: "practitioner", underscored: true }
    );
  }

  static associate(models) {
    // define association here
    console.log("Practitioner log", models);
    this.belongsTo(models.user, { foreignKey: "user_id" });
    return this;
  }
}

Practitioner.init(db.sequelize);

export default Practitioner;
