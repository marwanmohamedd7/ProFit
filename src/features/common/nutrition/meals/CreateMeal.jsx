import { useForm } from "react-hook-form"
// import { IoCloseOutline } from "react-icons/io5";
import InputDropdown from "../../../../ui/InputDropdown"
import InputFloatingLabel from "../../../../ui/InputFloatingLabel"
import NutritionFoods from "../Trainer/trainerFoods/NutritionFoods";
// import { FaPlus } from "react-icons/fa";
// import { BiTrash } from "react-icons/bi";
import Button from "../../../../ui/Button";
import Modal from "../../../../ui/Modal";
import { HiPlusSm } from "react-icons/hi";
import MealFood from "./MealFood";
import { useMealProvider } from "../../../../context/MealProvider";
import { useCreateMeal } from "./useCreateMeal";

function CreateMeal() {
    const {
        foods,
        totalMacros,
    } = useMealProvider()
    const { createMeal, isCreating } = useCreateMeal()
    const { handleSubmit, formState: { errors }, register, watch } = useForm()
    function onSubmit(data) {
        if (!data || !foods.length) return
        console.log({ ...data, ingredients: foods, mealmacros: totalMacros })
        // createMeal()
    }
    return (
        <>
            <div className="space-y-4">
                <div className=" bg-white p-4 rounded-md border flex flex-col justify-center gap-4">
                    <div className="text-blue-700 font-bold capitalize">
                        meal details
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <InputFloatingLabel
                            item={{ id: "mealname", label: "meal name", value: watch("mealname") }}
                            // disabled={isLoading}
                            error={errors?.mealname?.message}
                            register={
                                {
                                    ...register("mealname", {
                                        required: 'This field is required',
                                    })
                                }
                            }
                        />
                        <InputDropdown item={
                            {
                                id: "mealtype",
                                label: "Meal Type",
                                options: ["Breackfast", "Lunch", "Snack", "Dinner"]
                            }
                        }
                            //    disabled={isLoading}
                            error={errors?.mealtype?.message}
                            register={{
                                ...register("mealtype", {
                                    required: "Select serving unit."
                                })
                            }}
                        />
                        <InputFloatingLabel
                            item={{ id: "mealnote", label: "meal note", value: watch("mealnote") }}
                            // disabled={isLoading}
                            error={errors?.mealnote?.message}
                            register={
                                {
                                    ...register("mealnote", {
                                        required: 'This field is required',
                                    })
                                }
                            }
                        />
                    </div>
                </div>
                <div className=" bg-white p-4 rounded-md border flex flex-col justify-center gap-4">
                    <div className="text-blue-700 font-bold capitalize">
                        meal macros
                    </div>
                    <div className="bg-blue-100 border border-blue-700 px-3 py-6 rounded-md w-full grid lg:grid-cols-4 sm:grid-cols-2 gap-2 text-blue-700">
                        <div className="sm:text-center w-full">
                            <p className="font-bold text-3xl space-x-2">
                                <span>{totalMacros?.proteins?.toFixed(2) ?? 1}</span>
                                <span className="font-semibold text-lg">g</span>
                            </p>
                            <span className="text-base">proteins</span>
                        </div>
                        <div className="sm:text-center w-full">
                            <p className="font-bold text-3xl space-x-2">
                                <span>{totalMacros?.fats?.toFixed(2) ?? 1}</span>
                                <span className="font-semibold text-lg">g</span>
                            </p>
                            <span className="text-base">fats</span>
                        </div>
                        <div className="sm:text-center w-full">
                            <p className="font-bold text-3xl space-x-2">
                                <span>{totalMacros?.carbs?.toFixed(2) ?? 1}</span>
                                <span className="font-semibold text-lg">g</span>
                            </p>
                            <span className="text-base">carbs</span>
                        </div>
                        <div className="sm:text-center w-full">
                            <p className="font-bold text-3xl space-x-2">
                                <span>{totalMacros?.calories?.toFixed(2) ?? 1}</span>
                                <span className="font-semibold text-lg">Kcal</span>
                            </p>
                            <span className="text-base">calories</span>
                        </div>
                    </div>
                </div>
                <div className=" bg-white p-4 rounded-md border flex flex-col justify-center gap-4">
                    <div className="text-blue-700 font-bold capitalize">
                        meal ingredients
                    </div>
                    <div className="bg-gray-100 border-2 border-dotted border-blue-700 p-4 rounded-md w-full">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-2">
                            {
                                foods.length > 0 && foods.map((food) =>
                                    <MealFood
                                        food={food}
                                        key={food._id}
                                    />
                                )
                            }
                            <div className="col-span-full">
                                <Modal>
                                    <Modal.Open opens={`choose-meal-recipes`}>
                                        <Button customeStyle="w-full">
                                            <p className="capitalize flex justify-center items-center gap-1">
                                                <span>add meal food</span>
                                                <span className="text-lg"><HiPlusSm /></span>
                                            </p>
                                        </Button>
                                    </Modal.Open>
                                    <Modal.Window opens={`choose-meal-recipes`}>
                                        <NutritionFoods section="meal" />
                                    </Modal.Window>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button onClick={handleSubmit(onSubmit)}>
                        <p className="capitalize">
                            save new meal
                        </p>
                    </Button>
                    <Button type="secondary">
                        <p className="capitalize">
                            cancel
                        </p>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default CreateMeal
