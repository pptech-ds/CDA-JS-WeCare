import { Model, DataTypes } from "sequelize";
import User from "../User/model";
import db from "../../config/database";

class Administrator extends Model {
  static init(sequelize) {
    return super.init(
      {
      },
      { sequelize, modelName: "administrator", underscored: true }
    );
  }

  static associate(models) {
    // define association here
    console.log("Administrator log", models);
    this.belongsTo(models.user, { foreignKey: "user_id" });
    return this;
  }
}

Administrator.init(db.sequelize);

export default Administrator;
