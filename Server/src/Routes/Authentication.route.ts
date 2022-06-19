import { Router } from "express";
import {
  login,
  refreshToken,
  register,
} from "../Controllers/Authentication.controller";
import assignToken from "../Middleware/AssignToken.Middleware";

const router = Router();

router
  .get("/api/auth/refreshToken", refreshToken, assignToken)
  .post("/api/auth/login", login)
  .post("/api/auth/register", register, assignToken);
export default router;
