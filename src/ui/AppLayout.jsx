import Header from "./Header";
import Sidebar from "./Sidebar";


function AppLayout({ children }) {
  return (
    <div className="grid grid-cols-[10rem_1fr] grid-rows-[auto_1fr] h-dvh sm:grid-cols-[12.5rem_1fr]">
      <Header />
      <Sidebar />
      {/* <main className="bg-gray-50 pt-[4rem] pb-[6.4rem] px-[4.8rem] overflow-scroll"> */}
      <main className="bg-gray-50 p-2 overflow-scroll">
        <div className="container mx-auto p-2">
          {children}
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
