import Post from "../models/Post.js";

export default {
    async create(postData) {
        const created = await Post.create(postData);
        return created;
    },
    getAll() {
        return Post.find().populate('author');
    }
}