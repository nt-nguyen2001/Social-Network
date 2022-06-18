import { Router } from "express";
import { getUser } from "../Controllers/Users.Controller";
import { verifyToken } from "../Middleware/VerifyToken.Middleware";

const router = Router();

router.post("/api/users", verifyToken("0"), getUser);

export default router;
