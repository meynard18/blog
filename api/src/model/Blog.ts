import mongoose, { Schema, Document } from 'mongoose';

// Define the Author sub-schema
const authorSchema = new Schema({
   firstName: { type: String, required: true },
   lastName: { type: String, required: true },
   email: { type: String, required: true },
   phoneNumber: { type: String },
});

// Define the Blog schema
interface BlogDocument {
   author: {
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber?: string;
   };
   title: string;
   content: string;
   image: string;
}

const blogSchema = new Schema<BlogDocument>({
   author: {
      type: authorSchema,
      required: true,
   },
   title: { type: String, required: true },
   content: { type: String, required: true },
   image: { type: String, required: true },
});

const BlogModel = mongoose.model<BlogDocument>('Blog', blogSchema);

export default BlogModel;
