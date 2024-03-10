import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
export const protect = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token)
      return res.status(404).json({ message: "Please At First Sing in" });

    const isverify = jwt.verify(token, process.env.SecrectKey);

    if (!isverify) {
      return res.status(404).json({ message: "unotheraized - Invaild Tokens" });
    }

    const user = await User.findById(isverify.userid);

    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error.message);
  }
};
