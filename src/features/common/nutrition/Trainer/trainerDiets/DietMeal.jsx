import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { RiSaveLine } from "react-icons/ri";
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import Modal from "../../../../../ui/Modal"
import Button from "../../../../../ui/Button"
import MealMacros from "../../meals/MealMacros"
import MealDetailsForm from "../../meals/MealDetailsForm"
import MealIngredients from "../../meals/MealIngredients"
import ConfirmDelete from "../../../../../ui/ConfirmDelete"
import { useForm } from "react-hook-form";
import { useDietProvider } from "../../../../../context/DietProvider";
import { useCreateMeal } from "../../meals/useCreateMeal";
import SpinnerMini from "../../../../../ui/SpinnerMini";

function DietMeal({ meal, handleDeleteMealSection }) {
    const [mealToggle, setMealToggle] = useState(false)
    const { createMeal, isCreating } = useCreateMeal()
    const { dispatch } = useDietProvider()
    const [searchParams] = useSearchParams()
    const activeDay = searchParams.get("day") ?? "1";
    const { handleSubmit, formState: { errors }, register, watch } = useForm();
    function onSubmit(data) {
        if (!data || !meal.foods.length) return
        dispatch({ type: "diet/mealInfo", payload: { day: activeDay, mealId: meal.mealId, ...data } })
        const mealData = { ...data, ingredients: meal.foods, mealmacros: meal.mealmacros };
        createMeal(mealData)
    }
    return (
        <div className={`space-y-4 p-2 bg-gray-50 border rounded-md ${mealToggle && "border-t-4 border-t-blue-700"}`}>
            <div className="flex items-center gap-2">
                <div className="grow">
                    <MealDetailsForm register={register} watch={watch} errors={errors} />
                </div>
                <div className="flex items-center gap-2">
                    <Modal>
                        <Modal.Open opens="delete-food">
                            <button disabled={false} className="disabled:cursor-not-allowed bg-red-700 text-white xl:p-3 p-2.5 rounded-lg text-lg"><BiTrash /></button>
                        </Modal.Open>
                        <Modal.Window opens="delete-food">
                            <ConfirmDelete onConfirm={() => handleDeleteMealSection(meal.mealId)} resourceName="section" />
                        </Modal.Window>
                    </Modal>
                    <button onClick={() => setMealToggle(value => !value)} className="bg-gray-100 border text-gray-600 xl:p-3 p-2.5 rounded-lg text-lg">{mealToggle ? <FaChevronUp /> : <FaChevronDown />}</button>
                </div>
            </div>
            {
                mealToggle &&
                <>
                    <MealMacros
                        fats={meal?.mealmacros?.fats ?? 0}
                        carbs={meal?.mealmacros?.carbs ?? 0}
                        proteins={meal?.mealmacros?.proteins ?? 0}
                        calories={meal?.mealmacros?.calories ?? 0}
                    />
                    <MealIngredients foods={meal.foods} section={{ section: "diet", day: activeDay, mealId: meal.mealId }} />
                    <div className="flex items-center gap-2">
                        <Button type="secondary" customeStyle="capitalize py-2">load meal recipe</Button>
                        <Button onClick={handleSubmit(onSubmit)} type="secondary" customeStyle="capitalize py-2"><span className="text-xl">{isCreating ? <SpinnerMini /> : <RiSaveLine />}</span></Button>
                    </div>
                </>
            }
        </div>
    )
}

export default DietMeal
