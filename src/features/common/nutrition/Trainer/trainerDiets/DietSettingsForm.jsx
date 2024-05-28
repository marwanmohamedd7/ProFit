import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { GoArrowRight } from "react-icons/go"
import Button from "../../../../../ui/Button"
import InputDropdown from "../../../../../ui/InputDropdown"
import InputFloatingLabel from "../../../../../ui/InputFloatingLabel"
// import SpinnerMini from "../../../../../ui/SpinnerMini"

function DietSettingsForm() {
    const [calories, setCalories] = useState();
    const { register, handleSubmit, formState: { errors }, watch, getValues, setValue } = useForm()
    const fats = Number(getValues().fats)
    const carbs = Number(getValues().carbs)
    const proteins = Number(getValues().proteins)
    // const isLoading = isCreating || isUpdating

    function onSubmit() {
        // console.log("yes")
    }

    useEffect(function () {
        const calculateCalories = (4 * proteins) + (4 * carbs) + (9 * fats);
        setCalories(calculateCalories)
        setValue("calories", calculateCalories)
    }, [fats, carbs, proteins, setValue])

    return (
        <form className="flex flex-col capitalize divide-y" onSubmit={handleSubmit(onSubmit)}>
            <section className="py-4 space-y-4">
                <h3 className="text-blue-700 font-bold">diet details</h3>
                <div className="grid grid-cols-3 gap-2">
                    <InputFloatingLabel
                        item={{ id: "templateName", label: "Nutrition Template Name", value: watch("templateName") }}
                        // disabled={isLoading}
                        error={errors?.templateName?.message}
                        register={
                            {
                                ...register("templateName", {
                                    required: 'This field is required',
                                })
                            }
                        }
                    />
                    <InputFloatingLabel
                        item={{ id: "numberDays", label: "Number of Days", type: "number", value: watch("numberDays") }}
                        // disabled={isLoading}
                        error={errors?.numberDays?.message}
                        register={
                            {
                                ...register("numberDays", {
                                    required: 'This field is required',
                                })
                            }
                        }
                    />
                    <InputFloatingLabel
                        item={{ id: "description", label: "Description", value: watch("description") }}
                        // disabled={isLoading}
                        error={errors?.description?.message}
                        register={
                            {
                                ...register("description", {
                                    required: 'This field is required',
                                })
                            }
                        }
                    />
                </div>
            </section>

            <section className="py-4 space-y-4">
                <h3 className="text-blue-700 font-bold">diet preferences</h3>
                <div className="grid grid-cols-3 gap-2">
                    <InputFloatingLabel
                        item={{ id: "numberMeals", label: "Number of Meals", type: "number", value: watch("numberMeals") }}
                        // disabled={isLoading}
                        error={errors?.numberMeals?.message}
                        register={
                            {
                                ...register("numberMeals", {
                                    required: 'This field is required',
                                })
                            }
                        }
                    />
                    <InputDropdown getValues={getValues()} item={{
                        id: "goal",
                        label: "Goal",
                        options: [
                            "Loss Weight",
                        ],
                    }}
                        error={errors?.goal?.message}
                        register={{
                            ...register("goal", {
                                required: "This field is required"
                            })
                        }}
                    />
                    <InputDropdown getValues={getValues()}
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
                        // disabled={isLoading}
                        error={errors?.dietType?.message}
                        register={
                            {
                                ...register("dietType", {
                                    required: "This field is required"
                                })
                            }
                        }
                    />

                </div>
                <div className="grid grid-cols-3 gap-2">
                    <InputDropdown getValues={getValues()}
                        item={{
                            id: "religionrestriction",
                            label: "Religion Restriction",
                            options: ["Alcohol", "Pork", "Carrion", "Beef", " Meat Products", "Chicken"],
                        }}
                        // disabled={isLoading}
                        error={errors?.religionrestriction?.message}
                        register={{
                            ...register("religionrestriction", {
                                required: "This field is required"
                            })
                        }}
                    />
                    <InputDropdown getValues={getValues()} item={{
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
                        // disabled={isLoading}
                        error={errors?.foodAllergens?.message}
                        register={{
                            ...register("foodAllergens", {
                                required: "This field is required"
                            })
                        }}
                    />
                    <InputDropdown getValues={getValues()} item={{
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
                                required: "This field is required"
                            })
                        }}
                    />
                </div>
            </section>

            <section className="capitalize py-4 space-y-4">
                <h3 className="text-blue-700 font-bold">diet macros</h3>
                <div className="grid grid-cols-4 gap-2">
                    <InputFloatingLabel
                        item={{ id: "proteins", label: "Proteins", type: "number", value: watch("proteins") }}
                        // disabled={isLoading}
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
                        // disabled={isLoading}
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
                        // disabled={isLoading}
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
            </section>

            <section className="pt-6">
                <Button
                    // disabled={isLoading}
                    type="primary" >
                    {
                        // isLoading ?
                        // <span><SpinnerMini /></span>
                        // :
                        // <span className="capitalize">{isUpdatingSession ? "update food" : "add food"}</span>
                        <p className="flex justify-center items-center gap-2 capitalize">
                            <span>go to diet builder</span>
                            <span><GoArrowRight /></span>
                        </p>
                    }
                </Button>
            </section>
            {/* <section className="flex justify-start gap-2 pt-6">
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
            </section> */}
        </form>
    )
}

export default DietSettingsForm
