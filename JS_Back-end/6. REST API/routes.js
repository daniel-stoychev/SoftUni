import { Router } from "express";
import postController from "./controllers/postController.js";

const routes = Router();

routes.use('/posts', postController);

export default routes;