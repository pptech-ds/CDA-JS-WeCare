import express from 'express';
import env from './src/config/env';
import Server  from './src/config/Server';
import middlewares from './src/config/middlewares';
import routes from './src/modules';
import errorHandler from './src/middlewares/errorHandler';
import db from './src/config/database';
 

const http = express();
const server = new Server(http);
server.middlewares(middlewares);
server.routes(routes);
server.errorHandler(errorHandler);


// /* Sequelize models check */
// // const db = require('./models');
// db.sequelize.sync().then(() => {
// 	console.log('Models are synchronized successfully!');
// }).catch(err => {
// 	console.error('Unable to synchronize the models: ', err);
// });


(async () => {
    try {
        await db.associateAll(db.sequelize.models)
        await db.sequelize.sync({alter: true})
        // await server.listen(config.app_port);

        // sequelize.sync()

    } catch (e) {
        console.error(e);
    }
})();

server.start(env.app_port);