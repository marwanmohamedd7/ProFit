import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HiMiniChevronLeft } from "react-icons/hi2";
import { useGetSpecificMeal } from "./useGetSpecificMeal";
import { useCurrentUser } from "../../../../context/UserProvider";
import { useMealProvider } from "../../../../context/MealProvider";
import CreateMeal from "./CreateMeal";
import Spinner from "../../../../ui/Spinner";
import BreadCrumbs from "../../../../ui/BreadCrumbs";

function MealOperationsPage() {
    const navigate = useNavigate()
    const { userRole } = useCurrentUser()
    const { dispatch } = useMealProvider()
    const { getMeal, isLoading } = useGetSpecificMeal();

    useEffect(function () {
        if (isLoading) return; // Do nothing while loading
        if (!getMeal?.ingredients) dispatch({ type: "meal/startSession" });
        else dispatch({ type: "meal/updateMeal", payload: getMeal?.ingredients });
    }, [getMeal?.ingredients, isLoading, dispatch])

    if (isLoading) return <div className="flex items-center justify-center h-[80dvh]"><Spinner /></div>
    return (
        <div className="space-y-4 divide-y">
            <div>
                <BreadCrumbs />
                <div className="">
                    <div className="flex justify-between items-center mb-4">
                        <p className="flex items-center justify-center gap-4">
                            <button onClick={() => {
                                dispatch({ type: `meal/${getMeal?._id ? "endSession" : "startSession"}` })
                                navigate(`/${userRole}/nutrition?nutrition=meals_templates`)
                            }} className="text-blue-600 bg-blue-200 cursor-pointer p-0.5 rounded-md font-semibold text-lg"><HiMiniChevronLeft /></button>
                            <span className="font-bold text-blue-900 text-2xl capitalize">{getMeal?._id ? "update meal" : "Create New Meal"}</span>
                        </p>
                    </div>
                </div>
                <CreateMeal mealToUpdate={getMeal} />
            </div>
        </div>
    )
}

export default MealOperationsPage
