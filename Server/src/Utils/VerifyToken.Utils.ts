import jwt, { JwtPayload, TokenExpiredError } from "jsonwebtoken";
export default async function VerifyToken(token: string) {
  let payload: {
    error: number;
    message: string;
    decoded?: JwtPayload;
  };
  try {
    // type can't determined in callback of verify
    const decode = (await jwt.verify(
      token,
      process.env.SECRET_KEY || "ASD"
    )) as JwtPayload;
    payload = {
      error: 200,
      message: "OK",
      decoded: decode,
    };
  } catch (err) {
    const tokenError = err as TokenExpiredError;
    payload = {
      error: 400,
      message: tokenError.message,
    };
    throw payload;
  }
  return payload;
}
