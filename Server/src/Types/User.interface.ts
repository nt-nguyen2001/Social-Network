import { Request } from "express";

export interface User {
  userID: string;
  account: string;
  userName: string;
  password: string;
  phoneNumber: string;
}
export interface RequestWithPayload extends Request {
  payload?: any;
}
