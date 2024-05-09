import SpinnerMini from "./SpinnerMini";
import { useMainNav } from "../context/MainNavProvider";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useUser } from "../features/common/authentication/useUser";
import { TbArrowBarToLeft, TbArrowBarToRight } from "react-icons/tb";
function Header() {
  const { user, isLoading } = useUser();
  const { isOpen, setIsOpen } = useMainNav();
  const { firstName, lastName, email, profilePhoto } = user ?? {};
  return (
    <nav className="flex items-center justify-between border-solid border-b border-grey-100 px-3 py-0.5">
      <button onClick={() => setIsOpen(value => !value)} className="text-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 border border-gray-300 rounded-md p-1 text-gray-500 z-10">{isOpen ? <TbArrowBarToLeft /> : <TbArrowBarToRight />}</button>
      <div className="flex justify-end gap-4 divide-x divide-gray-200 items-center p-2 row-span-1">
        <div className="bg-blue-50 p-2 text-2xl rounded-md cursor-pointer text-blue-700">
          <IoMdNotificationsOutline />
        </div>
        <div className="flex justify-center items-center gap-2">
          {isLoading ? <span className="ml-4 text-blue-900"><SpinnerMini /></span>
            :
            <>
              <img className="ml-4 h-10 w-10 rounded-md" src={profilePhoto} alt="avatar" />
              <div className="flex flex-col justify-center">
                <p className="flex items-center gap-1 text-sm font-bold text-blue-900">
                  <span className="capitalize">{firstName}</span>
                  <span>{lastName}</span>
                </p>
                <span className="text-xs flex flex-col text-gray-400">{email}</span>
              </div>
            </>
          }
        </div>
      </div>

    </nav>
  );
}
export default Header;
