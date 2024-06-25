import { useForm } from "react-hook-form";
import { RiSaveLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useCreateMeal } from "../../meals/useCreateMeal";
import { useDietProvider } from "../../../../../context/DietProvider";
import Modal from "../../../../../ui/Modal";
import Button from "../../../../../ui/Button";
import MealMacros from "../../meals/MealMacros";
import SpinnerMini from "../../../../../ui/SpinnerMini";
import MealIngredients from "../../meals/MealIngredients";
import MealDetailsForm from "../../meals/MealDetailsForm";
import NutritionMeals from "../trainerMeals/NutritionMeals";
import { useDarkMode } from "../../../../../context/DarkModeProvider";
import styles from "../../../../../styles/styles";

function DietMeal({ meal, index }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { dispatch, days } = useDietProvider()
    const [searchParams] = useSearchParams()
    const activeDay = searchParams.get("day") ?? "1";
    const activeDayMeals = days.find(day => day.day === activeDay)?.mealsCount ?? {};
    const { createMeal, isCreating } = useCreateMeal()
    const [mealToggle, setMealToggle] = useState(index ? false : true)
    const { foods, mealId, mealmacros, ...mealInfo } = meal
    const { handleSubmit, formState: { errors }, getValues, register, watch, reset } = useForm({
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
        <div className={`space-y-4 p-4 ${isDarkMode ? `${colors.bg_slate_900} ${colors.border_gray_700}` : colors.bg_gray_50} border rounded-md ${mealToggle && "border-t-4 border-t-blue-700"}`}>
            <div className="flex items-start gap-2">
                <MealDetailsForm register={register} watch={watch} errors={errors} getValues={getValues()} variation="diet" activeDayMeals={activeDayMeals} handleDeleteMealSection={handleDeleteMealSection} setMealToggle={setMealToggle} mealToggle={mealToggle} />
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
                                <div className="py-4 w-[50rem]">
                                    <NutritionMeals section={{ section: "diet", day: activeDay, mealId: meal.mealId }} />
                                </div>
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
