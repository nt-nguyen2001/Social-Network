import { Response } from "express";

async function TCWrapper(fn: Function, res: Response) {
  try {
    await fn();
  } catch (err) {
    console.log(":::ERR:::", err);
    res.status(500).json({ status: 503, account: "Service Unavailable." });
  }
}

export default TCWrapper;
