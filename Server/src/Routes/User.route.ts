import { Router } from "express";
import { getUser } from "../Controllers/Users.Controller";
import { verifyToken } from "../Middleware/VerifyToken";

const router = Router();

router.post("/api/users", verifyToken, getUser);

export default router;
