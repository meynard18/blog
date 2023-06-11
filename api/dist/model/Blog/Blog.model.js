import mongoose, { Schema } from 'mongoose';
// Define the Author sub-schema
const authorSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String },
    authorId: { type: String, required: true },
});
// Define the Blog schema
const blogSchema = new Schema({
    author: {
        type: authorSchema,
        required: true,
    },
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
});
const BlogModel = mongoose.model('Blog', blogSchema);
export default BlogModel;
//# sourceMappingURL=Blog.model.js.map