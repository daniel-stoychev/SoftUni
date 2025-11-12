import { Router } from "express";

const furnitureController = Router();

furnitureController.get('/', (req, res) => {


    res.send('It works!')
});

export default furnitureController;