import express from "express";
import { protect } from "../middlewares/protect.js";
import { sendmessage } from "../controllers/message.controller.js";

const router = express.Router();

router.post("/send/:id", protect, sendmessage);

export default router;
