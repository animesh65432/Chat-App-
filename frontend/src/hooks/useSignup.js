import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({
    fullname,
    username,
    password,
    confirmpassword,
    gender,
  }) => {
    let success = everythingChecker(
      fullname,
      username,
      password,
      confirmpassword,
      gender
    );

    if (!success) {
      return;
    }
    setLoading(true);
    try {
      let data = await axios.post("http://localhost:3000/api/auth/singup", {
        fullname,
        username,
        password,
        confirmpassword,
        gender,
      });

      toast.success("Successfully Created My Account");
      return true;
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

function everythingChecker(
  fullname,
  username,
  password,
  confirmpassword,
  gender
) {
  if (
    fullname === "" ||
    username === "" ||
    password === "" ||
    confirmpassword === "" ||
    gender === ""
  ) {
    toast.error("Please fill each and every box");
    return false;
  } else if (password !== confirmpassword) {
    toast.error("Your password and confirm password do not match");
    return false;
  } else if (password.length < 6) {
    toast.error("Your password should be at least 6 characters long");
    return false;
  }
  return true;
}

export default useSignup;
