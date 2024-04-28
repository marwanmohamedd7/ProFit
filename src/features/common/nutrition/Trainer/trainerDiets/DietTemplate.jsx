// import { CiSettings } from "react-icons/ci";
import { HiMiniChevronLeft } from "react-icons/hi2"
import BreadCrumbs from "../../../../../ui/BreadCrumbs"
import CreateDietTemplate from "./CreateDietTemplate"
import { useNavigate } from "react-router-dom"
import Button from "../../../../../ui/Button"

function DietTemplate() {
    const navigate = useNavigate()
    return (
        <>
            <BreadCrumbs />
            <div className="flex justify-between items-center gap-4 mb-4">
                <div className="flex items-center justify-center gap-4">
                    <button onClick={() => navigate("/trainer/nutrition?nutrition=diet_templates")}
                        className="text-blue-600 bg-blue-200 cursor-pointer p-0.5 rounded-md font-semibold text-lg"><HiMiniChevronLeft /></button>
                    <span className="font-bold text-blue-900 text-2xl capitalize">{"diet builder"}</span>
                </div>
                <Button>save diet template</Button>
            </div>
            <CreateDietTemplate />
        </>
    )
}

export default DietTemplate
