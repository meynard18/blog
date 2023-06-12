import BlogModel from '../model/Blog/Blog.model.js';
const createBlog = async (req, res) => {
    try {
        const { authorId = req.user?.id, authorFirstName, authorLastName, authorEmail, authorPhoneNumber, title, content, image, } = req.body;
        // check if authenticated user email matches provided email
        if (req.user?.id !== authorId) {
            // Unauthorized access, email doesn't match
            return res.status(401).send({
                error: `Email on file doesn't match provided email`,
            });
        }
        // Create a new blog post
        const newBlog = new BlogModel({
            author: {
                authorId,
                firstName: authorFirstName,
                lastName: authorLastName,
                email: authorEmail,
                phoneNumber: authorPhoneNumber,
            },
            title,
            content,
            image,
        });
        // Save the new blog post to the database
        const savedBlog = await newBlog.save();
        res.status(201).send(savedBlog);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
const readBlogs = async (req, res) => {
    const id = req.user?.id;
    try {
        const blogs = await BlogModel.find({ 'author.authorId': id });
        if (blogs.length === 0) {
            return res.status(404).send();
        }
        res.send(blogs);
    }
    catch (error) {
        res.send(500).send();
    }
};
const updateBlog = async (req, res) => {
    try {
        const blogId = req.params.id;
        const { title, content, image, authorId = req.user?.id } = req.body;
        const blog = await BlogModel.findById(blogId);
        if (!blog) {
            return res.status(404).send({ error: 'Blog not found' });
        }
        if (blog?.author.authorId !== authorId) {
            throw new Error();
        }
        const updatedBlogPost = await BlogModel.findByIdAndUpdate(blogId, {
            title: title,
            content: content,
            image: image,
        }, { new: true });
        res.status(200).send(updatedBlogPost);
    }
    catch (error) {
        res.send({ error: 'Unauthorized' });
    }
};
const deleteBlog = async (req, res) => {
    try {
        const blogId = req.params.id;
        const authorId = req.user?.id;
        const blog = await BlogModel.findById(blogId);
        if (!blog) {
            return res.status(404).send({ error: 'Blog not found' });
        }
        if (blog?.author.authorId !== authorId) {
            throw new Error();
        }
        await BlogModel.findByIdAndDelete(blogId);
        res.status(200).send({ message: 'Blog deleted Successfully!' });
    }
    catch (error) {
        res.send({ error: 'Unauthorized' });
    }
};
export default { createBlog, updateBlog, deleteBlog, readBlogs };
//# sourceMappingURL=Blog.js.map