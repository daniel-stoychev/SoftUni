import { Router } from "express";
import userService from "../services/userService.js";

const userController = Router();

userController.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await userService.register(email, password);
        res.status(201).json(result)
    } catch (err) {
        res.status(401).json({ message: err.message });
    }

});

userController.post('/login', (req, res) => {
    const { email, password } = req.body;

    const result = userService.login(email, password);

    res.status(201).json(result);

});



export default userController;