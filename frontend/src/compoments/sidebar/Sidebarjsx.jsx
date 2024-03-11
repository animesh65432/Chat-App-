import Conversations from "./Conversations";
import Logbutton from "./Logbutton";
import Search from "./Search";

const Sidebarjsx = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <Search />
      <div className="divider px-3"></div>
      <Conversations />
      <Logbutton />
    </div>
  );
};
export default Sidebarjsx;
