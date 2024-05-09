import { useMainNav } from "../context/MainNavProvider";
import Header from "./Header";
import Sidebar from "./Sidebar";


function AppLayout({ children }) {
  const { isOpen } = useMainNav();

  return (
    <div className={`grid grid-rows-[auto_1fr] h-dvh ${isOpen ? "grid-cols-[10rem_1fr] sm:grid-cols-[12.5rem_1fr]" :"grid-cols-[3.55rem_1fr] sm:grid-cols-[4.8rem_1fr]"}`}>
      <Header />
      <Sidebar />
      {/* <main className="bg-gray-50 pt-[4rem] pb-[6.4rem] px-[4.8rem] overflow-scroll"> */}
      <main className="bg-white p-2 overflow-scroll">
        <div className="mx-auto p-2">
          {children}
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
