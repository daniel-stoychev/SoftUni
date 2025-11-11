import { Schema, model, Types } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: Types.ObjectId,
        ref: 'User',
    }
}, { timestamps: true });

const Post = model('Post', postSchema);

export default Post;