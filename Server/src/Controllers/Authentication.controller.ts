import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { User } from "../Types/User.interface";
import VerifyToken from "../Utils/VerifyToken.Utils";

export async function login(req: Request, res: Response) {
  const { account, password }: User = req.body.payload || {
    account: "",
    password: "",
  };
  res.status(401).send({ message: "Bad Request" });
}
const refreshTokens: Array<String> = [];
export async function register(req: Request, res: Response) {
  const payload: User = req.body.payload;

  const accessToken = await generateToken(
    { id: uuidv4(), role: "0" },
    { expiresIn: "3h" }
  );
  const refreshToken = await generateToken(
    { id: uuidv4(), role: "0" },
    { expiresIn: "1d" }
  );
  refreshTokens.push(refreshToken);
  res
    .cookie("accessToken", "Bearer " + accessToken, {
      expires: new Date(Date.now() + 3 * 3600000),
      httpOnly: true,
    })

    .cookie("refreshToken", "Bearer " + refreshToken, {
      expires: new Date(Date.now() + 24 * 3600000),
      httpOnly: true,
    })
    .status(200)
    .send({ message: "OK" });
}

export async function refreshToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("?");
  const refreshToken =
    (req.cookies?.refreshToken && req.cookies?.refreshToken.split(" ")[1]) ||
    "a";
  VerifyToken(refreshToken)
    .then((payload) => {
      if (refreshTokens.includes(refreshToken)) {
        // res.status(payload.error).send({ message: payload.message });
        next();
      } else {
        res.status(400).send({ message: "Refresh token doesn't exist!" });
      }
    })
    .catch((err) => {
      console.log(
        "🚀 ~ file: Authentication.controller.ts ~ line 66 ~ refreshToken ~ err",
        err
      );
      res.status(err.error).send({ message: err.message });
    });
}

function generateToken(payload: object, option: jwt.SignOptions) {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(payload, process.env.SECRET_KEY || "ASD", option, (err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token || "");
    });
  });
}
