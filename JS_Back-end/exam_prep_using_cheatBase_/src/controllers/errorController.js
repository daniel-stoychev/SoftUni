import { Router } from "express";

const errorController = Router();

errorController.all('/*splat', (req, res) => {
    res.status(400).render('404');
})

export default errorController;