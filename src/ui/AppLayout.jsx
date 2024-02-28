import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid grid-cols-[9.75rem_1fr] grid-rows-[auto_1fr] h-dvh sm:grid-cols-[12.5rem_1fr]">
      <Header />
      <Sidebar />
      {/* <main className="bg-gray-50 pt-[4rem] pb-[6.4rem] px-[4.8rem] overflow-scroll"> */}
      <main className="bg-gray-50 p-[1rem] overflow-scroll">
        <div className="container mx-auto px-4 sm:p-2">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
