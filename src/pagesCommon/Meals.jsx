import BreadCrumbs from "../ui/BreadCrumbs"
import { useNavigate } from "react-router-dom"
import { HiMiniChevronLeft } from "react-icons/hi2"
import CreateMeal from "../features/common/nutrition/meals/CreateMeal"

function Meals() {
    const navigate = useNavigate()
    return <div className="space-y-4 divide-y">
        <div>
            <BreadCrumbs />
            <div className="">
                <div className="flex justify-between items-center mb-4">
                    <p className="flex items-center justify-center gap-4">
                        <span onClick={() => navigate(-1)} className="text-blue-600 bg-blue-200 cursor-pointer p-0.5 rounded-md font-semibold text-lg"><HiMiniChevronLeft /></span>
                        <span className="font-bold text-blue-900 text-xl">Create New Meal</span>
                    </p>
                </div>
            </div>
            <CreateMeal />
        </div>
    </div>
}

export default Meals
