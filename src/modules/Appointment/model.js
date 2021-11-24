import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

class Appointment extends Model {
    static init(sequelize) {
        return super.init(
            {
                startTime: DataTypes.DATE,
                endTime: DataTypes.DATE,
            },
            { sequelize, modelName: 'Appointment' }
        );
    }

    static associate(models) {
        // define association here
        console.log('Appointment log', models);
        this.belongsTo(models.User, { foreignKey: 'user_id' });
				// or this.hasOne(...) depends your relations
        return this;
    }
}

Appointment.init(db.sequelize);

export default Appointment;