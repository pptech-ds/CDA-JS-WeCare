import express from "express";
import env from "./src/config/env";
import Server from "./src/config/Server";
import middlewares from "./src/config/middlewares";
import routes from "./src/modules";
import errorHandler from "./src/middlewares/errorHandler";
import db from "./src/config/database";

const app = express();
const server = new Server(app);
server.middlewares(middlewares);
server.routes(routes);
server.errorHandler(errorHandler);

(async () => {
  try {
    await db.associateAll(db.sequelize.models);
    await db.sequelize.sync({ alter: true });
  } catch (e) {
    console.error(e);
  }
})();

server.start(env.app_port);
