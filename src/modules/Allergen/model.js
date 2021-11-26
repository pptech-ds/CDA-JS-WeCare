import { Model, DataTypes } from "sequelize";
import db from "../../config/database";

class Allergen extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        code: DataTypes.STRING,
      },
      { sequelize, modelName: "allergen", underscored: true }
    );
  }

  static associate(models) {
    // define association here
    console.log("Allergen log", models);
    this.belongsToMany(models.customer, { through: 'allergens_customers' });
    this.belongsToMany(models.medecine, { through: 'medecines_allergens' });
    return this;
  }
}

Allergen.init(db.sequelize);

export default Allergen;
