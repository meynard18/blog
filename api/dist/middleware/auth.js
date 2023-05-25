import jwt from 'jsonwebtoken';
import UserModel from '../model/User.js';
const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]; // Extract the token from the "Authorization" header
        if (!token) {
            return res.status(401).send({ error: 'Token not provided' });
        }
        // Verify and decode the token
        const decodedToken = jwt.verify(token, 'your_secret_key');
        // Find the user based on the decoded token
        const user = await UserModel.findOne({ _id: decodedToken._id });
        if (!user) {
            return res.status(401).send({ error: 'Invalid Token' });
        }
        req.user = user;
        next();
    }
    catch (error) {
        return res.status(401).send({ error: 'Invalid token' });
    }
};
const validateTokenAndEmail = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]; // Extract the token from the "Authorization" header
        if (!token) {
            return res.status(401).send({ error: 'Token not provided' });
        }
        // Verify and decode the token
        const decodedToken = jwt.verify(token, 'your_secret_key');
        // Find the user based on the decoded token
        const user = await UserModel.findOne({ _id: decodedToken._id });
        if (!user) {
            return res.status(401).send({ error: 'Invalid Token' });
        }
        req.user = user;
        next();
    }
    catch (error) {
        return res.status(401).send({ error: 'Invalid token' });
    }
};
export default authenticate;
//# sourceMappingURL=auth.js.map