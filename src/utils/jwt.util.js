import jwt from "jsonwebtoken";
import { jwtConfig } from "../config/jwt.config.js";

export const generateToken = (payload) =>
   jwt.sign(payload, jwtConfig.secret, { expiresIn: jwtConfig.expires });

export const verifyToken = (token) => jwt.verify(token, jwtConfig.secret);