import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../Types/User.interface";

export async function getUser(req: Request, res: Response) {
  res.status(200).json({ account: "nguyen" });
}
