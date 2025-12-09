import { Router } from "express";
import homeController from "./controllers/homeController.js";
import errorController from "./controllers/errorController.js";
import userController from "./controllers/userController.js";
import elementController from "./controllers/elementController.js";

const routes = Router();

routes.use(homeController);
routes.use('/users', userController);
routes.use('/blogs', elementController);

//TODO: add remaining controllers




routes.use(errorController);

export default routes;