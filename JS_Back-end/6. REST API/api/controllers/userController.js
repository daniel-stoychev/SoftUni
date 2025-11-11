import { Router } from "express";
import userService from "../services/userService.js";

const userController = Router();

userController.post('/register', async (req, res) => {
    const userData = req.body;
    try {
        await userService.register(userData);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

userController.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Call the service layer to handle login
        const token = await userService.login(username, password);
        res.status(200).json({ accessToken: token });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
})



export default userController;