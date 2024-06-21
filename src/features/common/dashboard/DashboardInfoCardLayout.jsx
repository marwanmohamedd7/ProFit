import { useNavigate } from "react-router-dom";
import Button from "../../../ui/Button";
import { CiShare1 } from "react-icons/ci";
import { useDarkMode } from "../../../context/DarkModeProvider";
import styles from "../../../styles/styles";
import SpinnerMini from "../../../ui/SpinnerMini";

function DashboardInfoCardLayout({ children, icon, title, url, isLoading = false, grid_cols = "", isEmpty }) {
    const colors = styles();
    const navigate = useNavigate();
    const { isDarkMode } = useDarkMode();
    return (
        <div className={`${grid_cols} rounded-md p-4 capitalize border space-y-4 shadow-sm ${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700}` : `${colors.bg_white}`}`}>
            {
                isLoading ? <div className={`flex flex-col justify-center items-center h-full ${isDarkMode ? colors.text_white : colors.text_gray_900}`}><SpinnerMini size="text-xl" /></div> :
                    <>
                        <div className="flex justify-between items-center gap-2 flex-wrap md:flex-nowrap whitespace-nowrap">
                            <h2 className={`flex items-center gap-2 font-bold ${isDarkMode ? `${colors.text_gray_50}` : `${colors.text_gray_900}`}`}>
                                <span>{icon}</span>
                                <span>{title}</span>
                            </h2>
                            <Button onClick={() => navigate(url)} type="viewLink">
                                <p className="flex items-center justify-center gap-1">
                                    <span>View Details</span>
                                    <span><CiShare1 /></span>
                                </p>
                            </Button>
                        </div>
                        {
                            !isEmpty ? <h1 className={`${isDarkMode ? colors.text_white : colors.text_gray_900} text-center p-10 text-lg h-[15rem] w-full capitalize`}>You don't have any activity</h1> : children
                        }
                    </>
            }
        </div>
    )
}

export default DashboardInfoCardLayout
