import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { database } from "../config/database";

export async function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.header("Authorization");
  if (!authHeader) return generateUnauthorizedResponse(res);
  
  const token = authHeader.split(" ")[1];
  if (!token) return generateUnauthorizedResponse(res);
  
  try {
    const session = database.session.find(session => session.token === token);
    if (!session) return generateUnauthorizedResponse(res);
    
    (req as AuthenticatedRequest).userId = session.userId;
    return next();
  } catch (err) {
    return generateUnauthorizedResponse(res);
  }
}

function generateUnauthorizedResponse(res: Response) {
  return res.sendStatus(httpStatus.UNAUTHORIZED);
}

export type AuthenticatedRequest = Request & UserId;

type UserId = {
  userId: string;
};