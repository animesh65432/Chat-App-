import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { removethelocalstorage } from "../context/LoginSlice";

const userlogout = () => {
  const dispatch = useDispatch();
  const logout = async () => {
    try {
      let resdata = await axios.post("http://localhost:3000/api/auth/logout");
      dispatch(removethelocalstorage());
      toast.success("Sucesfully Logut From The Website");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { logout };
};
export default userlogout;
