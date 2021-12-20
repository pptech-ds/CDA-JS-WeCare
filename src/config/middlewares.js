import express from "express";
import morgan from "morgan";

const middlerawes = {
  json: express.json(),
  urlencoded: express.urlencoded({ extended: false }),
  morgan: morgan("dev"),
};

export default middlerawes;
