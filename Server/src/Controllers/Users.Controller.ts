import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import { DB } from "../Database";

export async function getUser(req: Request, res: Response) {
  const __instance = DB.getInstance();
  try {
    const rows = await __instance._execute("Select * Fr1om User");
    res.status(200).json({ status: 200, rows });
  } catch (err) {
    console.log(
      "🚀 ~ file: Users.Controller.ts ~ line 10 ~ getUser ~ err",
      err
    );
    res.status(503).json({ status: 503, account: "Service Unavailable." });
  }
}
