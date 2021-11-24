import { Router } from "express";

export default (controller) => {

    const router = Router();
    
    router.route('/test').get();

    return router;
}