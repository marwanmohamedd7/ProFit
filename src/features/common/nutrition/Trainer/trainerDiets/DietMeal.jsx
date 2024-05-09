import { BiTrash } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { RiSaveLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { useCreateMeal } from "../../meals/useCreateMeal";
import { useDietProvider } from "../../../../../context/DietProvider";
import Modal from "../../../../../ui/Modal";
import Button from "../../../../../ui/Button";
import MealMacros from "../../meals/MealMacros";
import SpinnerMini from "../../../../../ui/SpinnerMini";
import MealIngredients from "../../meals/MealIngredients";
import MealDetailsForm from "../../meals/MealDetailsForm";
import ConfirmDelete from "../../../../../ui/ConfirmDelete";
import NutritionMeals from "../trainerMeals/NutritionMeals";

function DietMeal({ meal, index }) {
    const { dispatch, days } = useDietProvider()
    const [searchParams] = useSearchParams()
    const activeDay = searchParams.get("day") ?? "1";
    const activeDayMeals = days.find(day => day.day === activeDay)?.mealsCount ?? {};

    const { createMeal, isCreating } = useCreateMeal()
    const [mealToggle, setMealToggle] = useState(index ? false : true)
    const { foods, mealId, mealmacros, ...mealInfo } = meal
    const { handleSubmit, formState: { errors }, register, watch, reset } = useForm({
        defaultValues: mealInfo ? mealInfo : {}
    });
    // Watch all form values
    const { mealname, mealnote, mealtype } = watch() // This will re-render the component on every input change

    function onSave(data) {
        if (!data || !foods.length) return
        const mealData = { ...data, ingredients: foods, mealmacros };
        createMeal(mealData)
    }

    function handleDeleteMealSection() {
        dispatch({ type: "diet/deleteMeal", payload: { day: activeDay, mealId } })
        dispatch({ type: "diet/calcDayMacros", payload: activeDay })
    }

    useEffect(function () {
        reset(meal)
    }, [meal, reset])

    useEffect(function () {
        dispatch({ type: "diet/mealInfo", payload: { day: activeDay, mealId, mealname, mealnote, mealtype } })
    }, [mealname, mealnote, mealtype, mealId, activeDay, dispatch])
    return (
        <div className={`space-y-4 p-2 bg-gray-50 border rounded-md ${mealToggle && "border-t-4 border-t-blue-700"}`}>
            <div className="flex items-center gap-2">
                <div className="grow">
                    <MealDetailsForm register={register} watch={watch} errors={errors} />
                </div>
                <div className="flex items-center gap-2">
                    <Modal>
                        <Modal.Open opens="delete-food">
                            <button disabled={activeDayMeals <= 2 ? true : false} className="disabled:cursor-not-allowed bg-red-700 text-white xl:p-3 p-2.5 rounded-lg text-lg"><BiTrash /></button>
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
                        fats={meal?.mealmacros?.fats ?? 0}
                        carbs={meal?.mealmacros?.carbs ?? 0}
                        proteins={meal?.mealmacros?.proteins ?? 0}
                        calories={meal?.mealmacros?.calories ?? 0}
                    />
                    <MealIngredients foods={meal.foods} section={{ section: "diet", day: activeDay, mealId: meal.mealId }} />
                    <div className="flex items-center gap-2">
                        <Modal>
                            <Modal.Open opens="add-meal">
                                <Button type="secondary" customeStyle="capitalize py-2">load meal recipe</Button>
                            </Modal.Open>
                            <Modal.Window opens="add-meal">
                                <NutritionMeals section={{ section: "diet", day: activeDay, mealId: meal.mealId }} />
                            </Modal.Window>
                        </Modal>
                        <Button onClick={handleSubmit(onSave)} type="secondary" customeStyle="capitalize py-2"><span className="text-xl">{isCreating ? <SpinnerMini /> : <RiSaveLine />}</span></Button>
                    </div>
                </>
            }
        </div>
    )
}

export default DietMeal
