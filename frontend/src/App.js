import MessageContainer from "./compoments/messages/MessageContainer";
import Sidebarjsx from "./compoments/sidebar/Sidebarjsx";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/signup";

function App() {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <Sidebarjsx />
        <MessageContainer />
      </div>
    </>
  );
}

export default App;
