import jwt_tokens from "jsonwebtoken";

const genaratetoken = (userid, res) => {
  const token = jwt_tokens.sign({ userid }, process.env.SecrectKey, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.Node_env !== "devlopment",
  });
};

export default genaratetoken;
