import User from "../models/user.model.js";
export const getalltheusers = async (req, res) => {
  let currentuserid = req.user._id;

  try {
    const users = await User.find({ _id: { $ne: currentuserid } }).select(
      "-password"
    );

    return res.status(202).json(users);
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ message: "Internal errors" });
  }
};
