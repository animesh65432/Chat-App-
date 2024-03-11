import React from "react";
import { BiLogOut } from "react-icons/bi";
import userlogout from "../../hooks/userlogout";

const Logbutton = () => {
  const { logout } = userlogout();
  return (
    <>
      <div className="mt-auto">
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
        />
      </div>
    </>
  );
};

export default Logbutton;
