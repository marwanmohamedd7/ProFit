import { useEffect } from "react";
import { useGetSpecificMeal } from "./useGetSpecificMeal";
import { useCurrentUser } from "../../../../context/UserProvider";
import { useMealProvider } from "../../../../context/MealProvider";
import CreateMeal from "./CreateMeal";
import Spinner from "../../../../ui/Spinner";
import BreadCrumbs from "../../../../ui/BreadCrumbs";
import BackBtn from "../../../../ui/BackBtn";
import { useDarkMode } from "../../../../context/DarkModeProvider";
import styles from "../../../../styles/styles";

function MealOperationsPage() {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { userRole } = useCurrentUser();
    const { dispatch } = useMealProvider();
    const { getMeal, isLoading } = useGetSpecificMeal();

    useEffect(function () {
        if (isLoading) return; // Do nothing while loading

        if (!getMeal?.ingredients) dispatch({ type: "meal/startSession" });
        else dispatch({ type: "meal/updateMeal", payload: getMeal?.ingredients });
    }, [getMeal?.ingredients, isLoading, dispatch])

    if (isLoading) return <div className="flex items-center justify-center h-[80dvh]"><Spinner /></div>
    const isExist = Boolean(getMeal?._id)

    return (
        <div className="space-y-4 divide-y">
            <div>
                <BreadCrumbs />
                <div className="">
                    <div className="flex justify-between items-center mb-4">
                        <p className="flex items-center justify-center gap-4">
                            <BackBtn onClick={() => dispatch({ type: "meal/endSession" })} path={`/${userRole}/nutrition?nutrition=meals_templates`} />
                            <span className={`font-bold ${isDarkMode ? colors.text_gray_100 : colors.text_gray_900} text-2xl capitalize`}>{(userRole !== "admin" && getMeal?.admin) ? "view proFIT meal" : isExist ? "update meal" : "Create New Meal"}</span>
                        </p>
                    </div>
                </div>
                <CreateMeal mealToUpdate={getMeal} />
            </div>
        </div>
    )
}

export default MealOperationsPage
