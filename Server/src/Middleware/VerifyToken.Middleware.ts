import { NextFunction, Request, Response } from "express";
import VerifyToken from "../Utils/VerifyToken.Utils";

export const verifyToken =
  (role: string) => (req: Request, res: Response, next: NextFunction) => {
    const token =
      (req.cookies.accessToken && req.cookies.accessToken.split(" ")[1]) ||
      null;
    if (token === null) {
      res.status(400).send({ message: "Not Logged In" });
    } else {
      VerifyToken(token)
        .then((payload) => {
          if (payload.decoded?.role === role) {
            next();
            return;
          }
          res.status(400).send({ status: 400, message: "Bad Request!" });
        })
        .catch((err) => {
          console.log(
            "🚀 ~ file: VerifyToken.Middleware.ts ~ line 21 ~ err",
            err
          );
          res.status(err.error).send({ status: 400, message: err.message });
        });
    }
  };
