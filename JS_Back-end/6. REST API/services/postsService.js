import Post from "../models/Post.js";

export default {
    async create(postData) {
        await Post.create(postData);
    },
    getAll() {
        return Post.find().populate('author');
    }
}