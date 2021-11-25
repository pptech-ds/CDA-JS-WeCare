const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  console.error(err);

  res.status(statusCode).json(err.message);

  logger.info("test errorHandler::%s", err.message);
};

export default errorHandler;
