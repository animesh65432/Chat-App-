import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";

const Router = express.Router();

Router.post("/singup", signup);
Router.post("/login", login);
Router.post("/logout", logout);

export default Router;
