import { Router } from "express";
import { login, register } from "../Controllers/Authentication.controller";
import { verifyToken } from "../Middleware/VerifyToken";

const router = Router();

router.post("/api/login", login).post("/api/register", register);
export default router;
