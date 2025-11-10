import { Router } from "express";
import postsService from "../services/postsService.js";

const postController = Router();

postController.get('/', async (req, res) => {

    const posts = await postsService.getAll();

    res.json(posts);
});

postController.post('/', (req, res) => {
    const postData = req.body;

    postsService.create(postData);

    res.status(201).end();
});


export default postController;