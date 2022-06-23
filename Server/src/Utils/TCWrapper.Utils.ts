import { NextFunction, Request, Response } from "express";
import { ResponseError } from "./CustomThrowError.Utils";

const TCWrapper =
  (fn: Function) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      const error = err as ResponseError;
      console.log(":::ERR:::", error);
      res
        .status(error.status || 500)
        .json({ status: error.status || 500, message: error.message });
    }
  };

export default TCWrapper;
