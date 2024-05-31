import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";
import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  const colors = styles();
  const { isDarkMode } = useDarkMode();
  return (
    <aside className={`grid grid-cols-1 grid-rows-[auto_1fr] border-solid border-r row-span-full ${isDarkMode && colors.border_gray_700}`}>
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
