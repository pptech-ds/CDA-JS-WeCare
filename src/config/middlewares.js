import express from "express";
import morgan from "morgan";
import winston from "winston";

const middlerawes = {
  json: express.json(),
  urlencoded: express.urlencoded({ extended: false }),
  morgan: morgan("dev"),
  // winston: winston()
};

export default middlerawes;
