import { useNavigate } from "react-router-dom";
import { HiMiniChevronLeft } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";

function BackBtn({ path, onClick }) {
    const colors = styles();
    const navigate = useNavigate();
    const { isDarkMode } = useDarkMode();
    function handler() {
        onClick?.();
        navigate(path);
    }
    return (
        <button onClick={handler}
            className={`${isDarkMode ? `${colors.bg_white} bg-opacity-10 ${colors.text_gray_100}` : `${colors.bg_gray_100} ${colors.text_gray_700}`} cursor-pointer p-0.5 rounded-md font-semibold text-xl`}>
            <HiMiniChevronLeft />
        </button>
    )
}

export default BackBtn