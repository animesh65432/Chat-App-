import express from "express";
import dotenv from "dotenv";
import AuthRouter from "./router/auth.router.js";
dotenv.config();

const app = express();

app.use("/api/auth", AuthRouter);

app.listen(process.env.PORT, () => {
  console.log("we are listeing at the port");
});
