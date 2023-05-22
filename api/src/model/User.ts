import { Schema, model, Document } from 'mongoose';

interface User {
   email: string;
   password: string;
   confirmPassword: string;
}

const userSchema = new Schema<User>({
   email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
   },
   password: {
      type: String,
      required: true,
   },
   confirmPassword: {
      type: String,
      required: true,
   },
});

const UserModel = model<UserDocument>('User', userSchema);

export default UserModel;
