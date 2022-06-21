import { Router } from "express";
import { mailRegister } from "../Controllers/Mail.Controller";
const router = Router();

router
    .post("/api/email/register", mailRegister)
    .post("/api/email/forgotPassword");
export default router;
