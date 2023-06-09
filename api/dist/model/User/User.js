import { Schema, model } from 'mongoose';
import jwt from 'jsonwebtoken';
const userSchema = new Schema({
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
const UserModel = model('User', userSchema);
export default UserModel;
//# sourceMappingURL=User.js.map