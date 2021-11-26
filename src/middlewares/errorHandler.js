import logger from "../config/winston";

const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  console.error(err);

  if(statusCode < 500) {
    logger.info("%s", err.message);
  } else {
    logger.error("%s", err.message);
  }


  res.status(statusCode).json(err.message);

};

export default errorHandler;
