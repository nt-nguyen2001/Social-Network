import { NextFunction, Request, Response } from "express";
import VerifyToken from "../Utils/VerifyToken.Utils";

export const verifyToken =
  (role: string) => (req: Request, res: Response, next: NextFunction) => {
    const token =
      (req.cookies.accessToken && req.cookies.accessToken.split(" ")[1]) || "a";
    VerifyToken(token)
      .then((payload) => {
        if (payload.decoded?.role === role) {
          next();
          return;
        }
        res.status(400).send({ message: "Bad Request!" });
      })
      .catch((err) => {
        console.log(
          "🚀 ~ file: VerifyToken.Middleware.ts ~ line 17 ~ err",
          err
        );
        res.status(err.error).send({ message: err.message });
      });
  };
