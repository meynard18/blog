import { Schema, model } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from './user.interface.js';

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
   tokens: [
      {
         token: {
            type: String,
            required: true,
         },
      },
   ],
});

userSchema.methods.generateAuthToken = async function () {
   const user = this;
   const token = jwt.sign({ _id: user._id }, 'your_secret_key');
   user.tokens.push({ token }); // Store the generated token
   await user.save(); // Save the updated user document
   return token;
};

userSchema.pre<User>('save', async function (next: Function) {
   const user = this;

   if (!user.isModified('password')) {
      return next();
   }

   try {
      const hashedPassword = await bcrypt.hash(user.password, 8); // 8 is the number of salt rounds
      user.password = hashedPassword;
      user.confirmPassword = hashedPassword;
      next();
   } catch (error) {
      next(error);
   }
});

const UserModel = model<User>('User', userSchema);

export default UserModel;
