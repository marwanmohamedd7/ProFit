import { IoMdNotificationsOutline } from "react-icons/io";
function Header() {
  return (
    <nav className="flex justify-end gap-4 divide-x divide-gray-200 items-center border-solid border-b border-grey-100 py-[0.66rem] sm:py-[0.675rem] px-[2rem] row-span-1">
      <div className="bg-blue-50 p-2 text-2xl rounded-md cursor-pointer text-blue-700">
        <IoMdNotificationsOutline />
      </div>
      <div className="flex items-center gap-3 capitalize">
        <img className="ml-4 h-10 w-10 rounded-md" src="/uifaces-popular-image (1).jpg" alt="" />
        <div className="flex flex-col justify-center gap-1">
          <span className="text-sm font-bold text-blue-900">marwan magdy</span>
          <span className="text-xs flex flex-col text-gray-400">super admin</span>
        </div>
      </div>
    </nav>
  );
}
export default Header;
