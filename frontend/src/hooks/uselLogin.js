import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addtolocalstorage } from "../context/LoginSlice";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const disptach = useDispatch();

  const login = async (logindata) => {
    setLoading(true);
    try {
      let data = await axios.post(
        `http://localhost:3000/api/auth/login`,
        logindata
      );
      console.log(data?.data);
      toast.success("Sucessfull log in");
      let obj = data?.data;
      disptach(addtolocalstorage(obj));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
