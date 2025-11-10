import Post from "../models/Post.js";

export default {
    create(postData) {
        Post.create(postData);
    },
    getAll() {
        return Post.find();
    }
}