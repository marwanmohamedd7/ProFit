import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useCreateFood } from "./Trainer/trainerFoods/useCreateFood";
import { useUpdateFood } from "./Trainer/trainerFoods/useUpdateFood";
import Button from "../../../ui/Button"
import SpinnerMini from "../../../ui/SpinnerMini";
import InputDropdown from "../../../ui/InputDropdown";
import UploadImageForm from "../../../ui/UploadImageForm";
import InputFloatingLabel from "../../../ui/InputFloatingLabel";


function CreateFood({ onCloseModal, foodToUpdate }) {
    const [calories, setCalories] = useState();
    const { createFood, isCreating } = useCreateFood()
    const { updateFood, isUpdating } = useUpdateFood()
    const { _id: foodId, admin, Trainer, foodImage: currentFoodImg, macros, ...foods } = foodToUpdate || {}
    const isUpdatingSession = Boolean(foodId);
    const { handleSubmit, register, formState: { errors }, control, watch, getValues, setValue, reset } = useForm({
        defaultValues: isUpdatingSession ? { ...macros, ...foods } : {}
    });

    const fats = Number(getValues().fats)
    const carbs = Number(getValues().carbs)
    const proteins = Number(getValues().proteins)
    const isLoading = isCreating || isUpdating;

    function onSubmit(data) {
        if (!data) return;
        let isMatching = true;
        const formData = new FormData();
        const { admin, Trainer, foodImage, fats, carbs, proteins, calories, ...values } = data;
        const newFoodImg = !foodImage ? currentFoodImg : foodImage
        const foodData = {
            macros: {
                fats,
                carbs,
                proteins,
                calories,
            },
            foodImage: newFoodImg,
            ...values
        }
        Object.entries(foodData).forEach(([key, value]) => {
            if (key === "macros") {
                // If the key is "macros", loop through its sub-properties and append them to formData
                Object.entries(value).forEach(([subKey, subValue]) => {
                    formData.append(`macros.${subKey}`, subValue);
                });
            } else {
                // Append the key-value pair to formData
                formData.append(key, value);
            }
        });
        if (isUpdatingSession) {
            const newData = Object.values({ fats, carbs, proteins, calories, ...values }).sort()
            const oldData = Object.values({ ...macros, ...foods }).sort()
            for (const [i, value] of newData.entries()) if (value !== oldData[i]) isMatching = false
            if (newFoodImg !== currentFoodImg) isMatching = false
            !isMatching ?
                // update the existing session with new data
                updateFood({ foodId, formData }, {
                    onSuccess: () => {
                        reset()
                        onCloseModal()
                    }
                }) : onCloseModal()
        } else {
            createFood(formData, {
                onSuccess: () => {
                    reset()
                    onCloseModal()
                }
            })
        }
    }

    useEffect(function () {
        const calculateCalories = (4 * proteins) + (4 * carbs) + (9 * fats);
        setCalories(calculateCalories)
        setValue("calories", calculateCalories)
    }, [fats, carbs, proteins, setValue])

    return (
        // <form className="grid grid-rows-[1fr_auto_auto_auto_auto_auto] divide-y" onSubmit={(e) => e.preventDefault()}>
        <form className="flex flex-col capitalize divide-y" onSubmit={handleSubmit(onSubmit)}>
            <div className="py-4 space-y-2">
                <UploadImageForm
                    id="foodImage"
                    photo="food"
                    control={control}
                    disabled={isLoading}
                    error={errors?.foodImage?.message}
                    src={currentFoodImg ?? null}
                    rules={{ required: !currentFoodImg ? "food photo is required" : false }}
                />
                {/* <currentFoodImg className="w-24 h-auto rounded-md" src="/uifaces-popular-image (1).jpg" alt="" /> */}
                <div className="flex justify-center gap-2 pt-4">
                    <InputFloatingLabel
                        item={{ id: "foodname", label: "Food Name", value: watch("foodname") }}
                        disabled={isLoading}
                        error={errors?.foodname?.message}
                        register={
                            {
                                ...register("foodname", {
                                    required: 'This field is required',
                                })
                            }
                        }
                    />
                    {/* {formAttributes_1.map((item, index) => <InputDropdown key={index} item={item} register={register} />)} */}
                    <InputDropdown
                        item={{
                            id: "dietType",
                            label: "Diet Type",
                            options: [
                                "Vegetarian",
                                "Vegan",
                                "Ketogenic",
                                "Paleo",
                                "Mediterranean",
                                "Standard",
                                "Other",
                            ],
                        }}
                        disabled={isLoading}
                        error={errors?.dietType?.message}
                        register={
                            {
                                ...register("dietType", {
                                    required: "Select diet type."
                                })
                            }
                        }
                    />

                    <InputDropdown
                        item={{
                            id: "religionrestriction",
                            label: "Religion Restriction",
                            options: ["Alcohol", "Pork", "Carrion", "Beef", " Meat Products", "Chicken"],
                        }}
                        disabled={isLoading}
                        error={errors?.religionrestriction?.message}
                        register={{
                            ...register("religionrestriction", {
                                required: "Select religion restriction."
                            })
                        }}
                    />
                </div>
                <div className="pt-1">
                    <textarea
                        id="description"
                        disabled={isLoading}
                        placeholder="Description..."
                        className="mt-1 block w-full py-2 h-20 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...register("description", {
                            required: false,
                            // required: "This field is required",
                        })}
                    />
                    {errors?.description?.message && <span className="text-xs text-red-700">{errors?.description?.message}</span>}
                </div>
            </div>
            <div className="capitalize py-4">
                <div className="flex justify-center gap-2">
                    {/* {formAttributes_2.map((item, index) => <InputDropdown key={index} item={item} />)} */}
                    <InputDropdown item={{
                        id: "foodAllergens",
                        label: "Food Allergies",
                        options: [
                            "Milk",
                            "Eggs",
                            "Fish",
                            "Shellfish",
                            "Tree Nuts",
                            "Peanuts",
                            "Wheat",
                            "Soybeans",
                            "Corn",
                            "Gelatin",
                            "Beef",
                            "Chicken",
                            "Mutton",
                            "Sesame",
                            "Sunflower",
                            "Poppy",
                            "Citrus",
                            "Strawberries",
                            "Bananas",
                            "Garlic",
                            "Onions",
                            "Coriander",
                            "Mustard",
                            "Oats",
                            "Rye",
                        ],
                    }}
                        error={errors?.foodAllergens?.message}
                        register={{
                            ...register("foodAllergens", {
                                required: "Select food allergies."
                            })
                        }}
                    />
                    <InputDropdown item={{
                        id: "category",
                        label: "Category",
                        options: [
                            "Desserts",
                            "Vegetables",
                            "Fruits",
                            "Bakeries",
                            "Spices",
                            "Seafood",
                            "Juices",
                            "Meat",
                            "Oils",
                            "Nuts",
                            "Chicken",
                            "Supplements",
                            "Egg",
                            "Milk Product",
                            "Sauces",
                        ],
                    }}
                        error={errors?.category?.message}
                        register={{
                            ...register("category", {
                                required: "Select category."
                            })
                        }}
                    />
                    <InputDropdown item={{
                        id: "diseaseCompatibility",
                        label: "Disease",
                        options: [
                            "Diabetes",
                            "Hypertension",
                            "Pregnancy",
                            "Insulin Resistance",
                            "Autoimmune Disease And Inflammation",
                            "Pcos",
                            "Familial Mediterranean Fever",
                            "Gastric Sleeve",
                            "Kidney Disease",
                            "Hepatic Patient",
                            "High Cholesterol",
                            "Gout",
                            "Lactose Intolerance",
                            "Favism",
                            "Hypothyroidism",
                            "Hyperthyroidism",
                            "Celiac Disease",
                            "Salmonella infection",
                        ],
                    }}
                        error={errors?.diseaseCompatibility?.message}
                        register={{
                            ...register("diseaseCompatibility", {
                                // required: false
                                required: "Select disease."
                            })
                        }}
                    />
                    <InputDropdown item={{
                        id: "mealtype",
                        label: "Meal Type",
                        options: ["Breackfast", "Lunch", "Snack", "Dinner"],
                    }}
                        error={errors?.mealtype?.message}
                        register={{
                            ...register("mealtype", {
                                required: "Select meal type."
                            })
                        }}
                    />
                </div>
            </div>
            <div className="capitalize py-3">
                <div className="flex justify-center gap-2">
                    <InputDropdown
                        item={{
                            id: "servingUnit",
                            label: "Serving Unit",
                            options: ["Gram", "Scoop", "Piece", "Mili", "Spoon", "Cup"],
                        }}
                        disabled={isLoading}
                        error={errors?.servingUnit?.message}
                        register={{
                            ...register("servingUnit", {
                                required: "Select serving unit."
                            })
                        }}
                    />
                    <InputFloatingLabel
                        item={{ id: "per", label: "Select Amount", type: "number", value: watch("per") }}
                        disabled={isLoading}
                        error={errors?.per?.message}
                        register={
                            {
                                ...register("per", {
                                    required: 'This field is required',
                                })
                            }
                        }
                    />
                    <InputDropdown
                        item={{
                            id: "baseMacro",
                            label: "Base Macro",
                            options: [
                                "mainProtein",
                                "mainCarbs",
                                "mainFats",
                                "subProtein",
                                "subCarbs",
                                "subFats",
                            ],
                        }}
                        disabled={isLoading}
                        error={errors?.baseMacro?.message}
                        register={{
                            ...register("baseMacro", {
                                required: "Select base macro."
                            })
                        }}
                    />
                </div>
            </div>
            <div className="capitalize py-4">
                <div className="flex justify-center gap-2">
                    {/* {formAttributes_4.map((item, index) => <InputDropdown key={index} item={item} />)} */}
                    <InputFloatingLabel
                        item={{ id: "proteins", label: "Proteins", type: "number", value: watch("proteins") }}
                        disabled={isLoading}
                        error={errors?.proteins?.message}
                        register={
                            {
                                ...register("proteins", {
                                    required: 'This field is required',
                                    min: {
                                        value: 0,
                                        message: "value can't be negative number",
                                    }
                                })
                            }
                        }
                    />
                    <InputFloatingLabel
                        item={{ id: "fats", label: "Fats", type: "number", value: watch("fats") }}
                        disabled={isLoading}
                        error={errors?.fats?.message}
                        register={
                            {
                                ...register("fats", {
                                    required: 'This field is required',
                                    min: {
                                        value: 0,
                                        message: "value can't be negative number",
                                    }
                                })
                            }
                        }
                    />
                    <InputFloatingLabel
                        item={{ id: "carbs", label: "Carbs", type: "number", value: watch("carbs") }}
                        disabled={isLoading}
                        error={errors?.carbs?.message}
                        register={
                            {
                                ...register("carbs", {
                                    required: 'This field is required',
                                    min: {
                                        value: 0,
                                        message: "value can't be negative number",
                                    }
                                })
                            }
                        }
                    />
                    <InputFloatingLabel
                        item={{ id: "calories", label: "Calories", type: "number", value: !calories ? "" : calories }}
                        disabled={true}
                        readOnly={true}
                        error={errors?.calories?.message}
                        register={
                            {
                                ...register("calories", {
                                    required: false,
                                })
                            }
                        }
                    />
                </div>
            </div>

            <div className="flex justify-start gap-2 pt-6">
                <Button disabled={isLoading} type="primary" >
                    {
                        isLoading ?
                            <span><SpinnerMini /></span>
                            :
                            <span className="capitalize">{isUpdatingSession ? "update food" : "add food"}</span>
                    }
                </Button>
                <Button disabled={isLoading} onClick={onCloseModal} type="secondary">
                    <span>cancel</span>
                </Button>
            </div>
        </form>

    )
}
export default CreateFood