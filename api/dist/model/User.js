import { Schema, model } from 'mongoose';
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
});
const UserModel = model('User', userSchema);
export default UserModel;
//# sourceMappingURL=User.js.map