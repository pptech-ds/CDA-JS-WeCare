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
    this.belongsToMany(models.user, { through: 'allergen_user' });
    this.belongsToMany(models.medecine, { through: 'medecine_allergen' });
    return this;
  }
}

Allergen.init(db.sequelize);

export default Allergen;
