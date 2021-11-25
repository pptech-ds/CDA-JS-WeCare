import { Model, DataTypes } from "sequelize";
import db from "../../config/database";

class Allergen extends Model {
  static init(sequelize) {
    return super.init(
      {
        startTime: DataTypes.DATE,
        endTime: DataTypes.DATE,
      },
      { sequelize, modelName: "allergen", underscored: true }
    );
  }

  static associate(models) {
    // define association here
    console.log("Allergen log", models);
    this.belongsToMany(models.user, { through: 'allergen_user' });
    return this;
  }
}

Allergen.init(db.sequelize);

export default Allergen;
