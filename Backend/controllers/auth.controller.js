import User from "../models/user.model.js";
import genaratetoken from "../utils/genaratetoken.js";

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmpassword, gender } = req.body;

    if (password != confirmpassword) {
      return res
        .status(400)
        .json({ messge: "password don't match with cofirm password" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ messge: "The User is Already exsit" });
    }

    const boypic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlpic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newuser = new User({
      fullname,
      username,
      password,
      gender,
      profilepic: gender == "male" ? boypic : girlpic,
    });

    await newuser.save();
    genaratetoken(newuser._id, res);
    res.status(200).json({
      _id: newuser._id,
      fullname: newuser.fullname,
      username: newuser.username,
      profilepic: newuser.profilepic,
    });
  } catch (erros) {
    console.log(erros.message);
    res.status(500).json({ messge: "internal errors", message: erros.message });
  }
};
export const login = async (req, res) => {
  try {
  } catch (errors) {}
};

export const logout = async (req, res) => {
  try {
  } catch (error) {}
};
