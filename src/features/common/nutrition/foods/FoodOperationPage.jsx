import { useDarkMode } from "../../../../context/DarkModeProvider";
import { useCurrentUser } from "../../../../context/UserProvider";
import styles from "../../../../styles/styles";
import BackBtn from "../../../../ui/BackBtn"
import BreadCrumbs from "../../../../ui/BreadCrumbs"
import CreateFood from "./CreateFood";
import { useGetSpecificFood } from "./useGetSpecificFood";
import Spinner from "../../../../ui/Spinner";

function FoodOperationPage() {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { userRole } = useCurrentUser();
    const { getFood, isLoading } = useGetSpecificFood();
    
    if (isLoading) return <div className="flex items-center justify-center h-[80dvh]"><Spinner /></div>
    const isExist = Boolean(getFood?._id)

    return (
        <div className="space-y-4 divide-y">
            <div>
                <BreadCrumbs />
                <div className="">
                    <div className="flex justify-between items-center mb-4">
                        <p className="flex items-center justify-center gap-4">
                            <BackBtn path={`/${userRole}/nutrition`} />
                            <span className={`font-bold ${isDarkMode ? colors.text_gray_100 : colors.text_gray_900} text-2xl capitalize`}>{(userRole !== "admin" && getFood?.admin) ? "view proFIT food" : isExist ? "update food" : "Create New food"}</span>
                        </p>
                    </div>
                </div>
                <CreateFood foodToUpdate={getFood} />
            </div>
        </div>
    )
}

export default FoodOperationPage
