import Messages from "../../compoments/messages/Messages";
import Sidebarjsx from "../../compoments/sidebar/Sidebarjsx";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebarjsx />
      <Messages />
    </div>
  );
};
export default Home;
