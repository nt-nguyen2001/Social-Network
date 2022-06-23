import { NextFunction, Request, Response } from "express";
import { DB } from "../Database";
import { OTP, RequestWithPayload, User } from "../Types";
import VerifyToken from "../Utils/VerifyToken.Utils";
import { v4 as uuidv4 } from "uuid";
import { ResponseError } from "../Utils/CustomThrowError.Utils";

export async function login(req: Request, res: Response, next: NextFunction) {
  const { account, password }: User = req.body.payload || {
    account: "",
    password: "",
  };
  res.status(401).send({ status: 400, message: "Bad Request" });
}

interface UserRegister extends User {
  otp?: string;
}

export async function register(req: RequestWithPayload, res: Response) {
  const payload: UserRegister = req.body?.payload;
  const __instance = DB.getInstance();
  if (payload) {
    const rows = await __instance._execute<OTP>(
      "Select * From otp where _account = ? and token = ? ",
      [payload.account, payload.otp]
    );
    if (
      rows.length >= 1 &&
      new Date(rows[0]._expire).getTime() > new Date().getTime()
    ) {
      await __instance._execute("Ins1ert into user values(?,?,?,?,?)", [
        uuidv4(),
        payload.account,
        payload.userName,
        payload.password,
        payload.phoneNumber,
      ]);
      res.status(200).send({ status: 200, message: "OK" });
    }
  } else {
    throw new ResponseError("payload empty!", 400);
  }
}

export async function refreshToken(
  req: RequestWithPayload,
  res: Response,
  next: NextFunction
) {
  const refreshToken =
    (req.cookies?.refreshToken && req.cookies?.refreshToken.split(" ")[1]) ||
    "a";
  VerifyToken(refreshToken)
    .then((payload) => {
      req.payload = {
        id: payload.decoded?.id,
        role: payload.decoded?.role,
      };
      next();
    })
    .catch((err) => {
      console.log(
        "🚀 ~ file: Authentication.controller.ts ~ line 66 ~ refreshToken ~ err",
        err
      );
      res.status(err.error).send({ status: 500, message: err.message });
    });
}
