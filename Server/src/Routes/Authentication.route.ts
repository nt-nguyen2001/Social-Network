import { Router } from "express";
import {
  login,
  refreshToken,
  register,
} from "../Controllers/Authentication.controller";

const router = Router();

router
  .get("/api/auth/refreshToken", refreshToken)
  .post("/api/auth/login", login)
  .post("/api/auth/register", register);
export default router;
