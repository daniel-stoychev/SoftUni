import { Router } from "express";

const userController = Router();

userController.post('/register', (req, res) => {
    const result = req.body;

    res.status(201).json(result)
});

export default userController;