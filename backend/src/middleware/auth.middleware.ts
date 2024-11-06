import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const verifyJwt = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token =
      req.cookies?.accessToken ||
      (req.headers.authorization || "").replace("Bearer ", "");
      
    if (!token) {
       res.status(401).json({ message: "Unauthorized Request" });
    }
    
    const decodedToken = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as string
    ) as { id: number };

    if (!decodedToken) {
       res.status(401).json({ message: "Invalid token" });
    }
        //@ts-ignore
    req.user = decodedToken;
    next();
    
  } catch (err) {
    res.status(401).json({ message: `Unauthorized or Invalid token ${err}` });
  }
};

export default verifyJwt;
