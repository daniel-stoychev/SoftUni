import { Router } from "express";
import furnitureService from "../services/furnitureService.js";

const furnitureController = Router();

furnitureController.get('/', async (req, res) => {

    res.json([]);
});

furnitureController.post('/', async (req, res) => {
    const furniture = req.body;
    const result = await furnitureService.create(furniture);

    res.status(201).json(result);
});

export default furnitureController;