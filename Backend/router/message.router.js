import express from "express";
import { protect } from "../middlewares/protect.js";
import { getmessage, sendmessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/:id", protect, getmessage);
router.post("/send/:id", protect, sendmessage);

export default router;
