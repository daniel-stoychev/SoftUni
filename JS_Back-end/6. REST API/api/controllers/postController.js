import { Router } from "express";
import postsService from "../services/postsService.js";
import authMiddleware from "../utils/authMiddleware.js";

const postController = Router();

postController.get('/', async (req, res) => {

    const posts = await postsService.getAll();

    res.json(posts);
});

postController.post('/', authMiddleware, async (req, res) => {
    const postData = req.body;
    const userId = req.user && req.user.id;

    if (!userId) {
        return res.status(401).json({ message: 'User not authenticated' });
    }

    try {
        const createdPost = await postsService.create({
            ...postData,
            author: userId
        });
        // return the created post
        res.status(201).json(createdPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default postController;