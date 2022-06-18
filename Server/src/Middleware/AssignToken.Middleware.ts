import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import generateToken from "../Utils/GenerateToken.Utils";

async function assignToken(req: Request, res: Response, next: NextFunction) {
  const accessToken = await generateToken({ id: uuidv4() }, { expiresIn: 2 });
  const refreshToken = await generateToken(
    { id: uuidv4() },
    { expiresIn: "1d" }
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
    .send({ message: "OK" });
}

export default assignToken;
