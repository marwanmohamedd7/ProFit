import { useState } from "react";
import { useForm } from "react-hook-form"
import { HiPlusSm } from "react-icons/hi";
import DietMeal from "./DietMeal";
import Button from "../../../../../ui/Button";

function DietMeals() {
    const [mealCount, setMealCount] = useState(1)
    const { handleSubmit, formState: { errors }, register, watch, reset } = useForm()
    function handleDeleteMealSection() {
        setMealCount(value => value < 2 ? 1 : value - 1)
    }
    return (
        <div className="bg-white border space-y-4 p-2 rounded">
            <h3 className="text-blue-800 font-bold capitalize">diet meals</h3>
            {Array.from({ length: mealCount }, (_, i) => i + 1).map(item =>
                <DietMeal key={item} register={register} watch={watch} errors={errors} mealCount={mealCount} handleDeleteMealSection={handleDeleteMealSection} />
            )}
            <Button type="secondary" onClick={() => setMealCount(value => value + 1)} customeStyle="ml-auto py-2.5">
                <p className="capitalize flex justify-center items-center gap-1">
                    <span>new section</span>
                    <span className="text-lg"><HiPlusSm /></span>
                </p>
            </Button>
        </div>
    )
}

export default DietMeals
