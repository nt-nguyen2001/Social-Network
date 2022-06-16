import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../Types/User.interface";

export async function login(req: Request, res: Response) {
  const { account, password }: User = req.body.payload || {
    account: "",
    password: "",
  };

  res.sendStatus(400);
}

export async function register(req: Request, res: Response) {
  const payload: User = req.body.payload;
  console.log(payload); // fix
  const accessToken = await generateToken(payload, { expiresIn: "8h" });
  const refreshToken = await generateToken(payload, { expiresIn: "1d" });
  res
    .cookie("accessToken", "Bearer " + accessToken, {
      expires: new Date(Date.now() + 8 * 3600000),
      httpOnly: true,
    })
    .cookie("refreshToken", "Bearer " + refreshToken, {
      expires: new Date(Date.now() + 24 * 3600000),
      httpOnly: true,
    })
    .sendStatus(200);
}

export function refreshToken(req: Request, res: Response) {
  const user: User = req.body.payload;
  console.log(user);
  res.sendStatus(200);
}

function generateToken(payload: object, option: jwt.SignOptions) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.SECRET_KEY || "ASD", option, (err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  });
}
