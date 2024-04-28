import BreadCrumbs from "../ui/BreadCrumbs"
import { useNavigate } from "react-router-dom"
import { HiMiniChevronLeft } from "react-icons/hi2"
import CreateMeal from "../features/common/nutrition/meals/CreateMeal"
import { useGetSpecificMeal } from "../features/common/nutrition/meals/useGetSpecificMeal"
import Spinner from "../ui/Spinner"
import { useEffect } from "react"
import { useMealProvider } from "../context/MealProvider"
import { useMoveBack } from "../hooks/useMoveBack"
import { useCurrentUser } from "../context/UserProvider"

function Meals() {
    const navigate = useNavigate()
    const { userRole } = useCurrentUser()
    const { dispatch } = useMealProvider()
    const { getMeal, isLoading } = useGetSpecificMeal();

    useEffect(function () {
        if (isLoading) return; // Do nothing while loading
        if (!getMeal?.ingredients) dispatch({ type: "food/start" });
        else dispatch({ type: "food/update", payload: getMeal?.ingredients });
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
                                dispatch({ type: "food/start" })
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

export default Meals
