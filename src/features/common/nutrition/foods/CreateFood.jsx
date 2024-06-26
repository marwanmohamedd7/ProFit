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
import InputDropdownMultiSelection from "../../../../ui/InputDropdownMultiSelection";
import { useNavigate, useSearchParams } from "react-router-dom";
import InputTextArea from "../../../../ui/InputTextArea";
import styles from "../../../../styles/styles";
import { useCurrentUser } from "../../../../context/UserProvider";

function handleData(arr) {
    return arr.length < 2 && arr[0] === "" ? [] : arr.map(value => ({ label: value, value }));
}

function getArrayData(key) {
    return key.map(({ value }) => value);
}

function CreateFood({ foodToUpdate = {} }) {
    const colors = styles();
    const navigate = useNavigate();
    const { isDarkMode } = useDarkMode();
    const { userRole } = useCurrentUser();
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

    const isLoading = isCreating || isUpdating || (userRole !== "admin" && admin);

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
            mealtype: mealtype ? getArrayData(mealtype) : [""],
            dietType: dietType ? getArrayData(dietType) : [""],
            foodAllergens: foodAllergens ? getArrayData(foodAllergens) : [""],
            religionrestriction: religionrestriction ? getArrayData(religionrestriction) : [""],
            diseaseCompatibility: diseaseCompatibility ? getArrayData(diseaseCompatibility) : [""],
            ...values
        };

        Object.entries(foodData).forEach(([key, value]) => {
            if (key === "macros") {
                Object.entries(value).forEach(([subKey, subValue]) => {
                    formData.append(`macros.${subKey}`, subValue);
                });
            } else if (Array.isArray(value)) {
                if (value.length > 0) {
                    value.forEach(item => formData.append(`${key}[]`, item));
                } else {
                    // Append a marker for empty arrays
                    formData.append(`${key}[]`, "");
                }
            } else if (value instanceof File) {
                formData.append(key, value);
            } else {
                formData.append(key, value);
            }
        });

        // Iterate over the FormData instance
        // for (let pair of formData.entries()) {
        //     console.log(`${pair[0]}: ${pair[1]}`);
        // }

        if (isUpdatingSession) {
            const newData = Object.values({ fats, carbs, proteins, calories, ...values }).sort();
            const oldData = Object.values({ ...macros, ...foods }).sort();
            for (const [i, value] of newData.entries()) if (value !== oldData[i]) isMatching = false;
            if (newFoodImg !== currentFoodImg) isMatching = false;
            if (!isMatching) {
                updateFood({ foodId, formData }, {
                    onSuccess: () => {
                        reset();
                        navigate(`/${userRole}/nutrition`);
                    }
                });
            } else {
                navigate(`/${userRole}/nutrition`);
            }
        } else {
            createFood(formData, {
                onSuccess: () => {
                    reset();
                    navigate(`/${userRole}/nutrition`);
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
        <form className={`capitalize space-y-4 ${isDarkMode ? `divide-gray-700` : `divide-gray-200`}`} onSubmit={handleSubmit(onSubmit)}>
            <div className={`${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700}` : `${colors.bg_white}`} p-4 rounded-md border flex flex-col justify-center`}>
                <div className={`${isDarkMode ? colors.text_gray_100 : colors.text_gray_900} font-bold capitalize`}>
                    foodDetails
                </div>
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
                    <div className="grid grid-cols-2 gap-4 items-center">
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
                        <InputDropdown getValues={getValues()}
                            item={{
                                id: "category",
                                label: "Category",
                                options: [
                                    "Desserts", "Vegetables", "Fruits", "Bakeries", "Spices", "Seafood", "Juices", "Meat", "Oils", "Nuts", "Chicken", "Supplements", "Egg", "Milk Product", "Sauces", "Grain Product",
                                    "Grains",
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
                    </div>
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
                </section>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className={`${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700}` : `${colors.bg_white}`} p-4 rounded-md border flex flex-col justify-center`}>
                    <div className={`${isDarkMode ? colors.text_gray_100 : colors.text_gray_900} font-bold capitalize`}>
                        food serving
                    </div>
                    <section className="grid gap-4 py-4">
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
                        <div className="grid grid-cols-2 gap-4 items-center">
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
                        </div>
                    </section>
                </div>
                <div className={`${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700}` : `${colors.bg_white}`} p-4 rounded-md border flex flex-col justify-center`}>
                    <div className={`${isDarkMode ? colors.text_gray_100 : colors.text_gray_900} font-bold capitalize`}>
                        food macros
                    </div>
                    <section className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4 items-center">
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
                        </div>
                    </section>
                </div>
            </div>
            <div className={`${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700}` : `${colors.bg_white}`} p-4 rounded-md border flex flex-col justify-center`}>
                <div className={`${isDarkMode ? colors.text_gray_100 : colors.text_gray_900} font-bold capitalize`}>
                    food Preferences
                </div>
                <section className="grid gap-4 py-4">
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
                    <div className="grid grid-cols-2 gap-4 items-center">
                        <InputDropdownMultiSelection
                            name="foodAllergens"
                            placeholder="Food Allergies"
                            disabled={isLoading}
                            required={false}
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
                            required={false}
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
                        <InputDropdownMultiSelection
                            name="religionrestriction"
                            required={false}
                            placeholder="Religion Restriction"
                            disabled={isLoading}
                            control={control}
                            errors={errors?.religionrestriction?.message}
                            options={[
                                "Alcohol", "Pork", "Carrion", "Beef", "Meat Products", "Chicken"
                            ]}
                        />
                    </div>
                </section>
            </div>
            {
                userRole === "admin" ?
                    <div className="flex justify-start gap-2">
                        <Button disabled={isLoading} type="primary">
                            {isLoading ? <SpinnerMini dark={false} /> : <span className="capitalize">{isUpdatingSession ? "Update Food" : "Add Food"}</span>}
                        </Button>
                        <Button onClick={(e) => {
                            e.preventDefault();
                            navigate(`/${userRole}/nutrition`);
                        }} disabled={isLoading} type="secondary">
                            <span>Cancel</span>
                        </Button>
                    </div>
                    :
                    !admin &&
                    <div className="flex justify-start gap-2">
                        <Button disabled={isLoading} type="primary">
                            {isLoading ? <SpinnerMini dark={false} /> : <span className="capitalize">{isUpdatingSession ? "Update Food" : "Add Food"}</span>}
                        </Button>
                        <Button onClick={(e) => {
                            e.preventDefault();
                            navigate(`/${userRole}/nutrition`);
                        }} disabled={isLoading} type="secondary">
                            <span>Cancel</span>
                        </Button>
                    </div>
            }
        </form>
    );
}

export default CreateFood;
