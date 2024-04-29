import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { RiSaveLine } from "react-icons/ri";
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import Modal from "../../../../../ui/Modal"
import Button from "../../../../../ui/Button"
import MealMacros from "../../meals/MealMacros"
import MealDetailsForm from "../../meals/MealDetailsForm"
import MealIngredients from "../../meals/MealIngredients"
import ConfirmDelete from "../../../../../ui/ConfirmDelete"

function DietMeal({ register, watch, errors, mealCount, handleDeleteMealSection }) {
    const [mealToggle, setMealToggle] = useState(false)
    return (
        <div className={`space-y-4 p-2 bg-gray-50 border rounded-md ${mealToggle && "border-t-4 border-t-blue-700"}`}>
            <div className="flex items-center gap-2">
                <div className="grow">
                    <MealDetailsForm register={register} watch={watch} errors={errors} />
                </div>
                <div className="flex items-center gap-2">
                    <Modal>
                        <Modal.Open opens="delete-food">
                            <button disabled={mealCount === 1} className="disabled:cursor-not-allowed bg-red-700 text-white xl:p-3 p-2.5 rounded-lg text-lg"><BiTrash /></button>
                        </Modal.Open>
                        <Modal.Window opens="delete-food">
                            <ConfirmDelete onConfirm={handleDeleteMealSection} resourceName="section" />
                        </Modal.Window>
                    </Modal>
                    <button onClick={() => setMealToggle(value => !value)} className="bg-gray-100 border text-gray-600 xl:p-3 p-2.5 rounded-lg text-lg">{mealToggle ? <FaChevronUp /> : <FaChevronDown />}</button>
                </div>
            </div>
            {
                mealToggle &&
                <>
                    <MealMacros
                        fats={0}
                        carbs={0}
                        proteins={0}
                        calories={0}
                    />
                    <MealIngredients />
                    <div className="flex items-center gap-2">
                        <Button type="secondary" customeStyle="capitalize py-2">load meal recipe</Button>
                        <Button type="secondary" customeStyle="capitalize py-2"><span className="text-xl"><RiSaveLine /></span></Button>
                    </div>
                </>
            }
        </div>
    )
}

export default DietMeal
