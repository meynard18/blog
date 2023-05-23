import { Schema, model } from 'mongoose';

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

const UserModel = model<User>('User', userSchema);

export default UserModel;
