import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/signup";
import { useSelector } from "react-redux";

function App() {
  const chatuser = useSelector((state) => state.login.chatuser);
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={chatuser ? <Home /> : <Navigate to="/Login" />}
          ></Route>
          <Route
            path="/Singup"
            element={chatuser ? <Navigate to="/" /> : <SignUp />}
          ></Route>
          <Route
            path="/Login"
            element={chatuser ? <Navigate to="/" /> : <Login />}
          ></Route>
        </Routes>
      </div>
      <Toaster />
    </>
  );
}

export default App;
