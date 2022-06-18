import { NextFunction, Request, Response } from "express";
import VerifyToken from "../Utils/VerifyToken.Utils";

export const verifyToken =
  (role: string) => (req: Request, res: Response, next: NextFunction) => {
    const token =
      req.cookies.accessToken && req.cookies.accessToken.split(" ")[1];
    VerifyToken(token)
      .then((payload) => {
        console.log(payload);
        next();
      })
      .catch((err) => {
        console.log(
          "🚀 ~ file: Authentication.controller.ts ~ line 66 ~ refreshToken ~ err",
          err
        );
        res.status(err.error).send({ message: "Bad Request!" });
      });
  };
