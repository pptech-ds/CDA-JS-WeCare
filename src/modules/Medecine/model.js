import { Model, DataTypes } from "sequelize";
import db from "../../config/database";

class Medecine extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        code: DataTypes.STRING,
      },
      { sequelize, modelName: "medecine", underscored: true }
    );
  }

  static associate(models) {
    // define association here
    console.log("Medecine log", models);
    this.belongsToMany(models.allergen, { through: 'medecine_allergen' });
    return this;
  }
}

Medecine.init(db.sequelize);

export default Medecine;
