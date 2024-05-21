import { useLocation } from "react-router-dom";
import { useMainNav } from "../context/MainNavProvider";
import Header from "./Header";
import Sidebar from "./Sidebar";


function AppLayout({ children }) {
  const { isOpen } = useMainNav();
  const { pathname } = useLocation();
  return (
    <div className={`grid grid-rows-[auto_1fr] transition-all duration-500 h-dvh ${isOpen ? "grid-cols-[10rem_1fr] sm:grid-cols-[14rem_1fr]" : "grid-cols-[5rem_1fr]"}`}>
      <Header />
      <Sidebar />
      {/* <main className="bg-gray-50 pt-[4rem] pb-[6.4rem] px-[4.8rem] overflow-scroll"> */}
      {
        pathname.split("/").slice(-1).join("") === "dashboard" ?
          <main className="relative overflow-scroll bg-gray-50">
            <div className="absolute bg-gradient-to-r from-sky-700 to-blue-900 w-full h-1/4" 
              // style={{
              //   backgroundImage: "linear-gradient(to right, #0284c7, #1e40af), url(/settingsBackground.png)",
              //   backgroundSize: "cover",
              //   backgroundBlendMode: "overlay"
              // }}
            >
              <section className="p-2">
                <div className="mx-auto p-2">
                  {children}
                </div>
              </section>
            </div>
          </main >
          :
          <main className="relative overflow-scroll">
            <section className="p-2">
              <div className="mx-auto p-2">
                {children}
              </div>
            </section>
          </main >
      }
    </div >
  );
}

export default AppLayout;
