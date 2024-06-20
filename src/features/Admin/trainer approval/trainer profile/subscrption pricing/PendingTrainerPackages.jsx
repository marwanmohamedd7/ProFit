import Empty from "../../../../../ui/Empty";
import SpinnerMini from "../../../../../ui/SpinnerMini";
import PendingTrainerPackagesTable from "./PendingTrainerPackagesTable"
import { useGetPendingTrainerPackages } from "./useGetPendingTrainerPackages";
import { useDarkMode } from "../../../../../context/DarkModeProvider";
import styles from "../../../../../styles/styles";

function PendingTrainerPackages() {
    const { getPendingTrainerPackages: packages = [], isLoading } = useGetPendingTrainerPackages();
    const { isDarkMode } = useDarkMode();
    const colors = styles();

    return (
        <div className={`container py-4 flex flex-col justify-start gap-4 border rounded-md ${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700}` : colors.bg_white} ${isDarkMode ? colors.border_slate_700 : colors.border}`}>
            <h1 className={`${isDarkMode ? colors.text_white : colors.text_gray_900} font-bold text-xl capitalize px-4`}>training packages</h1>
            {
                !packages.length || isLoading ?
                    <>
                        {
                            isLoading ?
                                <div className={`h-[15dvh] text-center rounded-md flex justify-center items-center`}>
                                    <SpinnerMini />
                                </div>
                                : <Empty resource={"packages"} />
                        }
                    </>
                    :
                    <PendingTrainerPackagesTable packages={packages} />
            }
        </div>
    )
}

export default PendingTrainerPackages;
