import { Model, DataTypes } from "sequelize";
import db from "../../config/database";

class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        lastname: DataTypes.STRING,
        firstname: DataTypes.STRING,
        address: DataTypes.STRING,
        phone: DataTypes.STRING,
        nir: DataTypes.STRING,
        isVerified: DataTypes.BOOLEAN,
      },
      { sequelize, modelName: "user", underscored: true }
    );
  }

  static associate(models) {
    // define association here
    console.log("User log", models);
    this.hasOne(models.practitioner, { foreignKey: "user_id" });
    this.hasOne(models.customer, { foreignKey: "user_id" });
    this.hasOne(models.administrator, { foreignKey: "user_id" });
    return this;
  }
}

User.init(db.sequelize);

export default User;
