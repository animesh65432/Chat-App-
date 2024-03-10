import exprss from "express";
import { protect } from "../middlewares/protect.js";
import { getalltheusers } from "../controllers/usercontrolers.js";

const Router = exprss.Router();

Router.get("/:id", protect, getalltheusers);

export default Router;
