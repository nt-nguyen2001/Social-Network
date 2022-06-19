import { NextFunction, Request, Response } from "express";
import generateToken from "../Utils/GenerateToken.Utils";

async function assignToken(req: Request, res: Response, next: NextFunction) {
  const accessToken = await generateToken(
    {
      id: "1",
      role: "0",
    },
    { expiresIn: "3h" }
  );
  const refreshToken = await generateToken(
    {
      id: "1",
      role: "0",
    },
    {
      expiresIn: "1d",
    }
  );
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
    .send({ status: 200, message: "OK" });
}

export default assignToken;
