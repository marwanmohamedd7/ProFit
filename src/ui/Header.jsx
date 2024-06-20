import SpinnerMini from "./SpinnerMini";
import { useMainNav } from "../context/MainNavProvider";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useUser } from "../features/common/authentication/useUser";
import { TbArrowBarToLeft, TbArrowBarToRight } from "react-icons/tb";
import { useDarkMode } from "../context/DarkModeProvider";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2"
import styles from "../styles/styles";
function Header() {
  const colors = styles();
  const { user, isLoading } = useUser();
  const { isOpen, setIsOpen } = useMainNav();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { firstName, lastName, email, profilePhoto } = user ?? {};
  return (
    <nav className={`relative flex items-center justify-end border-solid border-b px-3 py-[0.3rem] ${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700}` : `${colors.bg_white}`}`}>
      <button onClick={() => setIsOpen(value => !value)} className={`absolute left-[-0.8rem] top-[3.25rem] text-sm  transition-all duration-300 border ${isDarkMode ? `${colors.bg_slate_800} hover:${colors.bg_slate_700} ${colors.text_gray_100} ${colors.border_gray_700}` : `${colors.bg_gray_50} hover:${colors.bg_gray_200} ${colors.text_gray_500}`} rounded-full p-1 z-10`}>
        {isOpen ? <TbArrowBarToLeft /> : <TbArrowBarToRight />}
      </button>
      <div className={`flex justify-end gap-4 divide-x ${isDarkMode ? "divide-gray-700" :"divide-gray-200"} items-center p-2 row-span-1`}>
        <div className="flex justify-center items-center gap-2">
          <button className={`p-2 text-2xl rounded-md cursor-pointer ${isDarkMode?`${colors.bg_blue_900} bg-opacity-50 ${colors.text_blue_500}`:`${colors.bg_blue_100} ${colors.text_blue_600}`}`}>
            <IoMdNotificationsOutline />
          </button>
          <button onClick={toggleDarkMode} className={`p-2 text-2xl rounded-md cursor-pointer ${isDarkMode?`${colors.bg_blue_900} bg-opacity-50 ${colors.text_blue_500}`:`${colors.bg_blue_100} ${colors.text_blue_600}`}`}>
            {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
          </button>
        </div>
        <div className="flex justify-center items-center gap-2">
          {isLoading ? <span className="ml-4 text-blue-900"><SpinnerMini /></span>
            :
            <>
              <img className="ml-4 h-10 w-10 rounded-md" src={profilePhoto} alt="avatar" />
              <div className="flex flex-col justify-center">
                <p className={`flex items-center gap-1 text-sm font-bold ${isDarkMode ? colors.text_white :colors.text_gray_700}`}>
                  <span className="capitalize">{firstName}</span>
                  <span>{lastName}</span>
                </p>
                <span className={`text-xs flex flex-col ${isDarkMode ? colors.text_gray_200 : colors.text_gray_500}`}>{email}</span>
              </div>
            </>
          }
        </div>
      </div>
    </nav>
  );
}
export default Header;
