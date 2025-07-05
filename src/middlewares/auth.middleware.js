import jwt from "jsonwebtoken";
import { jwtConfig } from "../config/jwt.config.js";


export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    const err = new Error("Missing token");
    err.status = 401;
    return next(err);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, jwtConfig.secret);
    req.user = decoded;
    next();
  } catch (error) {
    error.status = 403;
    error.message = "Invalid or expired token";
    next(error);
  }
};
