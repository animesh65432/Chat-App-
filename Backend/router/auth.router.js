import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";

const Router = express.Router();

Router.get("/singup", signup);
Router.get("/login", login);
Router.get("/logout", logout);

export default Router;
