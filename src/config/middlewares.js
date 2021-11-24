import express from "express";
import morgan from "morgan";
import winston from "winston";

const middlerawes = {
    json: express.json(),
    urlencoded: express.urlencoded({extended: false}),
    morgan: morgan('dev'),
    // winston: winston()
};

// example
// export const toto1 = {
//     json: express.json(),
//     urlencoded: express.urlencoded({extended: false})
// };
// const toto2 = {
//     json: express.json(),
//     urlencoded: express.urlencoded({extended: false})
// };

export default middlerawes;
