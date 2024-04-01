import { useUser } from "../features/authentication/useUser";
import { IoMdNotificationsOutline } from "react-icons/io";
import SpinnerMini from "./SpinnerMini";
function Header() {
  const { user, isLoading } = useUser();
  const { firstName, lastName, email, profilePhoto } = user ?? {};
  return (
    <nav className="flex justify-end gap-4 divide-x divide-gray-200 items-center border-solid border-b border-grey-100 py-[0.66rem] sm:py-[0.675rem] px-[2rem] row-span-1">
      <div className="bg-blue-50 p-2 text-2xl rounded-md cursor-pointer text-blue-700">
        <IoMdNotificationsOutline />
      </div>
      <div className="flex justify-center  items-center gap-2">
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
    </nav>
  );
}
export default Header;
