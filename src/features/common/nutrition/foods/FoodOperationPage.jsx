import { useDarkMode } from "../../../../context/DarkModeProvider";
import { useCurrentUser } from "../../../../context/UserProvider";
import styles from "../../../../styles/styles";
import BackBtn from "../../../../ui/BackBtn"
import BreadCrumbs from "../../../../ui/BreadCrumbs"
import CreateFood from "./CreateFood";

function FoodOperationPage() {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { userRole } = useCurrentUser();
    return (
        <div className="space-y-4 divide-y">
            <div>
                <BreadCrumbs />
                <div className="">
                    <div className="flex justify-between items-center mb-4">
                        <p className="flex items-center justify-center gap-4">
                            <BackBtn path={`/${userRole}/nutrition`} />
                            <span className={`font-bold ${isDarkMode ? colors.text_gray_100 : colors.text_gray_900} text-2xl capitalize`}>{"Create New Meal"}</span>
                            {/* <span className={`font-bold ${isDarkMode ? colors.text_gray_100 : colors.text_gray_900} text-2xl capitalize`}>{getMeal?._id ? "update meal" : "Create New Meal"}</span> */}
                        </p>
                    </div>
                </div>
                <CreateFood />
            </div>
        </div>
    )
}

export default FoodOperationPage
