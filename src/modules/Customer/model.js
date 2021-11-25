import { Model, DataTypes } from "sequelize";
import User from "../User/model";
import db from "../../config/database";

class Customer extends Model {
  static init(sequelize) {
    return super.init(
      {
      },
      { sequelize, modelName: "customer", underscored: true }
    );
  }

  static associate(models) {
    // define association here
    console.log("Customer log", models);
    this.belongsTo(models.user, { foreignKey: "user_id" });
    return this;
  }
}

Customer.init(db.sequelize);

export default Customer;
