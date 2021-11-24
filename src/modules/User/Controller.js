import ApiError from '../../helpers/ApiError';
import winston from 'winston';

// const logConfiguration = {
//     'transports': [
//         new winston.transports.Console(),
//         new winston.transports.File({
//             filename: 'logs/example.log'
//         })
//     ]
// };

// const logger = winston.createLogger(logConfiguration);


class UserController {
    #models;
    constructor(models) {
        this.#models = models;
    }

    login = async (req, res, next) => {
        try {
            // const newUser = await this.#models.User.findOne()
            if (false)
                throw new ApiError('error message', 403);

            res.status(200).json('youpi');

            // // Log a message
            // logger.log({
            // // Message to be logged
            //     message: 'test1',

            // // Level of the message logging
            //     level: 'info'
            // });
            // logger.info('test2');
    // Log a message

        } catch (error) {
            next(error);
        }
    }
}

export default UserController;