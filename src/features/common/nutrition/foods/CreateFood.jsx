import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useCreateFood } from "./useCreateFood";
import { useUpdateFood } from "./useUpdateFood";
import Button from "../../../../ui/Button";
import SpinnerMini from "../../../../ui/SpinnerMini";
import InputDropdown from "../../../../ui/InputDropdown";
import UploadImageForm from "../../../../ui/UploadImageForm";
import InputFloatingLabel from "../../../../ui/InputFloatingLabel";
import { useDarkMode } from "../../../../context/DarkModeProvider";
import CompoundTabs from "../../../../ui/CompoundTabs";
import InputDropdownMultiSelection from "../../../../ui/InputDropdownMultiSelection";
import { useSearchParams } from "react-router-dom";
import InputTextArea from "../../../../ui/InputTextArea";

function handleData(arr) {
    return arr.map(value => ({ label: value, value }));
}

function getArrayData(key) {
    return key.map(({ value }) => value);
}

function CreateFood({ onCloseModal, foodToUpdate, overwrite = true, isLoading: isViewing = false }) {
    const { isDarkMode } = useDarkMode();
    const [calories, setCalories] = useState();
    const { createFood, isCreating } = useCreateFood();
    const { updateFood, isUpdating } = useUpdateFood();
    const [searchParams, setSearchParams] = useSearchParams();
    const { _id: foodId, admin, Trainer, foodImage: currentFoodImg, macros, religionrestriction, foodAllergens, dietType, diseaseCompatibility, mealtype, ...foods } = foodToUpdate || {};
    const isUpdatingSession = Boolean(foodId);
    const { handleSubmit, register, formState: { errors }, control, watch, getValues, setValue, reset } = useForm({
        defaultValues: isUpdatingSession ? {
            religionrestriction: handleData(religionrestriction),
            foodAllergens: handleData(foodAllergens),
            dietType: handleData(dietType),
            diseaseCompatibility: handleData(diseaseCompatibility),
            mealtype: handleData(mealtype),
            ...macros,
            ...foods
        } : {}
    });
    const fats = Number(watch("fats"));
    const carbs = Number(watch("carbs"));
    const proteins = Number(watch("proteins"));
    const isLoading = isCreating || isUpdating || isViewing;
    function onSubmit(data) {
        if (!data) return;
        let isMatching = true;
        const formData = new FormData();
        const { admin, Trainer, foodImage, fats, carbs, proteins, calories, religionrestriction, per, foodAllergens, diseaseCompatibility, mealtype, dietType, ...values } = data;
        const newFoodImg = !foodImage ? currentFoodImg : foodImage;
        const foodData = {
            macros: { fats, carbs, proteins, calories },
            per: Number(per),
            foodImage: newFoodImg,
            mealtype: getArrayData(mealtype),
            dietType: getArrayData(dietType),
            foodAllergens: getArrayData(foodAllergens),
            religionrestriction: getArrayData(religionrestriction),
            diseaseCompatibility: getArrayData(diseaseCompatibility),
            ...values
        };
        Object.entries(foodData).forEach(([key, value]) => {
            if (key === "macros") {
                Object.entries(value).forEach(([subKey, subValue]) => {
                    formData.append(`macros.${subKey}`, subValue);
                });
            } else if (Array.isArray(value)) {
                value.forEach(item => formData.append(`${key}[]`, item));
            } else if (value instanceof File) {
                formData.append(key, value);
            } else {
                formData.append(key, value);
            }
        });

        if (isUpdatingSession) {
            const newData = Object.values({ fats, carbs, proteins, calories, ...values }).sort();
            const oldData = Object.values({ ...macros, ...foods }).sort();
            for (const [i, value] of newData.entries()) if (value !== oldData[i]) isMatching = false;
            if (newFoodImg !== currentFoodImg) isMatching = false;
            if (!isMatching) {
                updateFood({ foodId, formData }, {
                    onSuccess: () => {
                        reset();
                        onCloseModal();
                    }
                });
            } else {
                onCloseModal();
            }
        } else {
            createFood(formData, {
                onSuccess: () => {
                    reset();
                    onCloseModal();
                }
            });
        }
        searchParams.delete("createFood");
        setSearchParams(searchParams);
    }

    useEffect(() => {
        const calculateCalories = (4 * proteins) + (4 * carbs) + (9 * fats);
        setCalories(calculateCalories);
        setValue("calories", calculateCalories);
    }, [fats, carbs, proteins, setValue]);

    return (
        <form className={`capitalize divide-y ${isDarkMode ? `divide-gray-700` : `divide-gray-200`}`} onSubmit={handleSubmit(onSubmit)}>
            <CompoundTabs tabsFeild="createFood" defaultTab="foodDetails">
                <CompoundTabs.Tabs>
                    <CompoundTabs.Open opens="foodDetails">food details</CompoundTabs.Open>
                    <CompoundTabs.Open opens="foodPreferences">food Preferences</CompoundTabs.Open>
                    <CompoundTabs.Open opens="foodServing">food Serving</CompoundTabs.Open>
                    <CompoundTabs.Open opens="foodMacros">food Macros</CompoundTabs.Open>
                </CompoundTabs.Tabs>
                <div className={`flex flex-col divide-y ${isDarkMode ? `divide-gray-700` : `divide-gray-200`} justify-between w-[45rem] h-[60dvh]`}>
                    <CompoundTabs.Window opens="foodDetails">
                        <section className="py-4 space-y-4">
                            <UploadImageForm
                                id="foodImage"
                                photo="food"
                                control={control}
                                disabled={isLoading}
                                error={errors?.foodImage?.message}
                                src={currentFoodImg ?? null}
                                rules={{ required: !currentFoodImg ? "food photo is required" : false }}
                            />
                            <div className="grid grid-cols-2 gap-2">
                                <InputFloatingLabel
                                    item={{ id: "foodname", label: "Food Name", value: watch("foodname") }}
                                    disabled={isLoading}
                                    error={errors?.foodname?.message}
                                    register={{
                                        ...register("foodname", {
                                            required: 'This field is required',
                                        })
                                    }}
                                />
                                <InputDropdownMultiSelection
                                    name="dietType"
                                    placeholder="Diet Type"
                                    disabled={isLoading}
                                    control={control}
                                    errors={errors?.dietType?.message}
                                    options={[
                                        "Vegetarian", "Vegan", "Ketogenic", "Paleo", "Mediterranean", "Standard", "Other"
                                    ]}
                                />
                            </div>
                            <div className="space-y-4">
                                <InputDropdownMultiSelection
                                    name="religionrestriction"
                                    placeholder="Religion Restriction"
                                    disabled={isLoading}
                                    control={control}
                                    errors={errors?.religionrestriction?.message}
                                    options={[
                                        "Alcohol", "Pork", "Carrion", "Beef", "Meat Products", "Chicken"
                                    ]}
                                />
                                <InputTextArea
                                    disabled={isLoading}
                                    errors={errors?.description?.message}
                                    placeholder="Description..."
                                    register={{
                                        ...register("description", {
                                            required: false,
                                        })
                                    }}
                                />
                            </div>
                        </section>
                    </CompoundTabs.Window>
                    <CompoundTabs.Window opens="foodPreferences">
                        <section className="grid gap-4 py-4">
                            <InputDropdown getValues={getValues()}
                                item={{
                                    id: "category",
                                    label: "Category",
                                    options: [
                                        "Desserts", "Vegetables", "Fruits", "Bakeries", "Spices", "Seafood", "Juices", "Meat", "Oils", "Nuts", "Chicken", "Supplements", "Egg", "Milk Product", "Sauces"
                                    ]
                                }}
                                disabled={isLoading}
                                error={errors?.category?.message}
                                register={{
                                    ...register("category", {
                                        required: "Select category."
                                    })
                                }}
                            />
                            <InputDropdownMultiSelection
                                name="foodAllergens"
                                placeholder="Food Allergies"
                                disabled={isLoading}
                                control={control}
                                errors={errors?.foodAllergens?.message}
                                options={[
                                    "Milk", "Eggs", "Fish", "Shellfish", "Tree Nuts", "Peanuts", "Wheat", "Soybeans", "Corn", "Gelatin", "Beef", "Chicken", "Mutton", "Sesame", "Sunflower", "Poppy", "Citrus", "Strawberries", "Bananas", "Garlic", "Onions", "Coriander", "Mustard", "Oats", "Rye"
                                ]}
                            />
                            <InputDropdownMultiSelection
                                name="diseaseCompatibility"
                                placeholder="Disease"
                                disabled={isLoading}
                                control={control}
                                errors={errors?.diseaseCompatibility?.message}
                                options={[
                                    "Diabetes", "Hypertension", "Pregnancy", "Insulin Resistance", "Autoimmune Disease And Inflammation", "Pcos", "Familial Mediterranean Fever", "Gastric Sleeve", "Kidney Disease", "Hepatic Patient", "High Cholesterol", "Gout", "Lactose Intolerance", "Favism", "Hypothyroidism", "Hyperthyroidism", "Celiac Disease", "Salmonella infection"
                                ]}
                            />
                            <InputDropdownMultiSelection
                                name="mealtype"
                                placeholder="Meal Type"
                                disabled={isLoading}
                                control={control}
                                errors={errors?.mealtype?.message}
                                options={["Breakfast", "Lunch", "Snack", "Dinner"]}
                            />
                        </section>
                    </CompoundTabs.Window>
                    <CompoundTabs.Window opens="foodServing">
                        <section className="grid gap-4 py-4">
                            <InputDropdown getValues={getValues()}
                                item={{
                                    id: "servingUnit",
                                    label: "Serving Unit",
                                    options: ["Gram", "Scoop", "Piece", "Mili", "Spoon", "Cup"]
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
                                register={{
                                    ...register("per", {
                                        required: 'This field is required',
                                    })
                                }}
                            />
                            <InputDropdown getValues={getValues()}
                                item={{
                                    id: "baseMacro",
                                    label: "Base Macro",
                                    options: [
                                        "mainProtein", "mainCarbs", "mainFats", "subProtein", "subCarbs", "subFats"
                                    ]
                                }}
                                disabled={isLoading}
                                error={errors?.baseMacro?.message}
                                register={{
                                    ...register("baseMacro", {
                                        required: "Select base macro."
                                    })
                                }}
                            />
                        </section>
                    </CompoundTabs.Window>
                    <CompoundTabs.Window opens="foodMacros">
                        <section className="grid gap-4 py-4">
                            <InputFloatingLabel
                                item={{ id: "proteins", label: "Proteins", type: "number", value: watch("proteins") }}
                                disabled={isLoading}
                                error={errors?.proteins?.message}
                                register={{
                                    ...register("proteins", {
                                        required: 'This field is required',
                                        min: {
                                            value: 0,
                                            message: "Value can't be negative number",
                                        }
                                    })
                                }}
                            />
                            <InputFloatingLabel
                                item={{ id: "fats", label: "Fats", type: "number", value: watch("fats") }}
                                disabled={isLoading}
                                error={errors?.fats?.message}
                                register={{
                                    ...register("fats", {
                                        required: 'This field is required',
                                        min: {
                                            value: 0,
                                            message: "Value can't be negative number",
                                        }
                                    })
                                }}
                            />
                            <InputFloatingLabel
                                item={{ id: "carbs", label: "Carbs", type: "number", value: watch("carbs") }}
                                disabled={isLoading}
                                error={errors?.carbs?.message}
                                register={{
                                    ...register("carbs", {
                                        required: 'This field is required',
                                        min: {
                                            value: 0,
                                            message: "Value can't be negative number",
                                        }
                                    })
                                }}
                            />
                            <InputFloatingLabel
                                item={{ id: "calories", label: "Calories", type: "number", value: !calories ? "" : calories }}
                                disabled={true}
                                readOnly={true}
                                error={errors?.calories?.message}
                                register={{
                                    ...register("calories", {
                                        required: false,
                                    })
                                }}
                            />
                        </section>
                    </CompoundTabs.Window>
                    {
                        overwrite &&
                        <div className="flex justify-start gap-2 pt-4">
                            <Button disabled={isLoading} type="primary">
                                {isLoading ? <SpinnerMini dark={false} /> : <span className="capitalize">{isUpdatingSession ? "Update Food" : "Add Food"}</span>}
                            </Button>
                            <Button disabled={isLoading} onClick={onCloseModal} type="secondary">
                                <span>Cancel</span>
                            </Button>
                        </div>
                    }
                </div>
            </CompoundTabs>
        </form>
    );
}

export default CreateFood;
