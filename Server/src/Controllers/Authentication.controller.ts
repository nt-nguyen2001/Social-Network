import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { RequestWithPayload, User } from "../Types/User.interface";
import VerifyToken from "../Utils/VerifyToken.Utils";

export async function login(req: Request, res: Response) {
  const { account, password }: User = req.body.payload || {
    account: "",
    password: "",
  };
  res.status(401).send({ status: 400, message: "Bad Request" });
}

export async function register(
  req: RequestWithPayload,
  res: Response,
  next: NextFunction
) {
  const payload: User = req.body.payload;
  req.payload = {
    id: uuidv4(),
    role: "0",
  };
  next();
}

export async function refreshToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const refreshToken =
    (req.cookies?.refreshToken && req.cookies?.refreshToken.split(" ")[1]) ||
    "a";
  VerifyToken(refreshToken)
    .then((payload) => {
      next();
      // if (refreshTokens.includes(refreshToken)) {
      //delete old token
      //   // res.status(payload.error).send({ message: payload.message });
      //   next();
      // } else {
      //   res.status(400).send({ message: "Refresh token doesn't exist!" });
      // }
    })
    .catch((err) => {
      console.log(
        "🚀 ~ file: Authentication.controller.ts ~ line 66 ~ refreshToken ~ err",
        err
      );
      res.status(err.error).send({ status: 500, message: err.message });
    });
}
