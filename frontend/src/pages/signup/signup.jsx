import { useState } from "react";
import GenderCheckbox from "./Genderbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup.js";
import { addtolocalstorage } from "../../context/LoginSlice.js";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });
  const { loading, signup } = useSignup();
  const dispatch = useDispatch();

  const onGenderChange = (gender) => {
    setInputs({ ...inputs, gender: gender });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let res = await signup(inputs);
    if (res) {
      dispatch(addtolocalstorage(inputs));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={onSubmitHandler}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              value={inputs.fullname}
              className="w-full input input-bordered h-10"
              onChange={(e) =>
                setInputs({ ...inputs, fullname: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder={inputs.username}
              className="w-full input input-bordered h-10"
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder={inputs.password}
              className="w-full input input-bordered h-10"
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder={inputs.confirmpassword}
              className="w-full input input-bordered h-10"
              onChange={(e) =>
                setInputs({ ...inputs, confirmpassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onCheckGender={onGenderChange}
            selectedGender={inputs.gender}
          />

          <Link
            to="/Login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 border border-slate-700"
              disabled={loading}
              type="submit"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                " Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
