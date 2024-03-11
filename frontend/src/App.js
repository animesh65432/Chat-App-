import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/signup";

function App() {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Singup" element={<SignUp />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
