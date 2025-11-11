import { Router } from "express";
import postsService from "../services/postsService.js";

const postController = Router();

postController.get('/', async (req, res) => {

    const posts = await postsService.getAll();

    res.json(posts);
});

postController.post('/', async (req, res) => {
    const postData = req.body;
    const userId = req.user.id;

    const createdPost = await postsService.create({
        ...postData,
        author: userId
    });
    res.status(201).json(createdPost);
});


export default postController;