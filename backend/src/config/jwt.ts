import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "123456";

export const generateToken = (userId: string) => {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1h" })
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET);
}