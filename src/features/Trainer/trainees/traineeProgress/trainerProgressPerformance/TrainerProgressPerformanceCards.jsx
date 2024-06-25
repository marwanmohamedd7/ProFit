import styles from "../../../../../styles/styles";
import { useDarkMode } from "../../../../../context/DarkModeProvider";
import { MdKeyboardArrowRight } from "react-icons/md";
import Modal from "../../../../../ui/Modal";
import ProgressBarChart from "./ProgressBarChart";

function TrainerProgressPerformanceCards({ title, icon, color, detailedData, children }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <div className={`flex flex-col justify-between p-4 rounded-lg border capitalize ${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700} ${colors.text_white}` : `${colors.bg_white} ${colors.text_gray_900}`}`}>
            <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                    <span className={`${color}`}>{icon}</span>
                    <h1 className={`font-bold ${isDarkMode ? colors.text_white : colors.text_gray_900}`}>{title}</h1>
                </div>
                <Modal>
                    <Modal.Open opens={detailedData?.title}>
                        <button className={`text-xs capitalize flex items-center gap-0.5 ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>
                            <span className="pb-0.5">see details</span>
                            <span className="text-base"><MdKeyboardArrowRight /></span>
                        </button>
                    </Modal.Open>
                    <Modal.Window opens={detailedData?.title}>
                        <ProgressBarChart barChartData={detailedData?.data} yAxisLabel={detailedData?.yAxisLabel} />
                    </Modal.Window>
                </Modal>
            </div>
            {children}
        </div>
    )
}

export default TrainerProgressPerformanceCards
