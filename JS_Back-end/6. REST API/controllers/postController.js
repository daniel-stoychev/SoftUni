import { Router } from "express";

const postController = Router();

postController.post('/', (req, res) => {
    const postData = req.body;

    console.log(postData);

    res.end();
});

export default postController;