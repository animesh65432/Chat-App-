import express from "express";
import dotenv from "dotenv";
import AuthRouter from "./router/auth.router.js";
import connecttomonogodb from "./db/connecttomongodb.js";
import messageRouter from "./router/message.router.js";
import cockieparser from "cookie-parser";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cockieparser());
app.use("/api/auth", AuthRouter);
app.use("/api/messege", messageRouter);

app.listen(process.env.PORT || 3000, () => {
  connecttomonogodb();
  console.log("we are listeing at the port");
});
