class Server {
  #app;
  constructor(app) {
    this.#app = app;
  }

  middlewares(middlewares) {
    for (const key in middlewares) {
      this.#app.use(middlewares[key]);
    }
  }

  routes(routes) {
    for (const path in routes) {
      this.#app.use(path, routes[path]);
    }
  }

  errorHandler(errorHandler) {
    this.#app.use(errorHandler);
  }

  start(port) {
    this.#app.listen(port, () => {
      console.log("server started " + port);
    });
  }
}

export default Server;
