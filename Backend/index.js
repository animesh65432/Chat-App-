import express from "express";
import dotenv from "dotenv";
import AuthRouter from "./router/auth.router.js";
import connecttomonogodb from "./db/connecttomongodb.js";
dotenv.config();

const app = express();

app.use("/api/auth", AuthRouter);

app.listen(process.env.PORT, () => {
  connecttomonogodb();
  console.log("we are listeing at the port");
});
