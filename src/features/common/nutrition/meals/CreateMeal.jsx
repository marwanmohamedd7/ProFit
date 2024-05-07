import { useForm } from "react-hook-form"
// import { IoCloseOutline } from "react-icons/io5";
// import { FaPlus } from "react-icons/fa";
// import { BiTrash } from "react-icons/bi";
import Button from "../../../../ui/Button";
import { useMealProvider } from "../../../../context/MealProvider";
import { useCreateMeal } from "./useCreateMeal";
import SpinnerMini from "../../../../ui/SpinnerMini";
import { useUpdateMeal } from "./useUpdateMeal";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../../../context/UserProvider";
import MealMacros from "./MealMacros";
import MealDetailsForm from "./MealDetailsForm";
import MealIngredients from "./MealIngredients";
import { useEffect } from "react";

function CreateMeal({ mealToUpdate = {} }) {
    const { _id } = mealToUpdate
    const isExist = Boolean(_id)
    const navigate = useNavigate()
    const { userRole } = useCurrentUser()
    const { createMeal, isCreating } = useCreateMeal()
    const { updateMeal, isUpdating } = useUpdateMeal()
    const { handleSubmit, formState: { errors }, register, watch, reset } = useForm({
        defaultValues: mealToUpdate,
    })
    const { mealname, mealtype, mealnote } = watch()
    const {
        foods,
        dispatch,
        mealMacros,
    } = useMealProvider()
    const isLoading = isCreating || isUpdating;
    function onSubmit(data) {
        if (!data || !foods.length) return
        const mealData = { ...data, ingredients: foods, mealmacros: mealMacros };
        if (isExist) {
            updateMeal({ _id, mealData }, {
                onSuccess: () => {
                    reset()
                    dispatch({ type: "meal/endSession" })
                    navigate(`/${userRole}/nutrition?nutrition=meals_templates`)
                },
            })
        }
        else {
            createMeal(mealData, {
                onSuccess: () => {
                    reset()
                    dispatch({ type: "meal/endSession" })
                    navigate(`/${userRole}/nutrition?nutrition=meals_templates`)
                },
            })
        }
    }
    useEffect(function () {
        dispatch({
            type: 'meal/mealInfo',
            payload: { mealname, mealtype, mealnote }
        })
    }, [mealname, mealtype, mealnote, dispatch])
    return (
        <>
            <div className="space-y-4">
                <div className=" bg-white p-4 rounded-md border flex flex-col justify-center gap-4">
                    <div className="text-blue-700 font-bold capitalize">
                        meal details
                    </div>
                    <MealDetailsForm register={register} watch={watch} errors={errors} />
                </div>
                <div className=" bg-white p-4 rounded-md border flex flex-col justify-center gap-4">
                    <div className="text-blue-700 font-bold capitalize">
                        meal macros
                    </div>
                    <MealMacros
                        fats={mealMacros?.fats ?? 0}
                        carbs={mealMacros?.carbs ?? 0}
                        proteins={mealMacros?.proteins ?? 0}
                        calories={mealMacros?.calories ?? 0}
                    />
                </div>
                <div className=" bg-white p-4 rounded-md border flex flex-col justify-center gap-4">
                    <div className="text-blue-700 font-bold capitalize">
                        meal ingredients
                    </div>
                    <MealIngredients foods={foods} isExist={isExist} section="meal" />
                </div>
                <div className="flex items-center gap-2">
                    <Button onClick={handleSubmit(onSubmit)}>
                        <p className="capitalize">
                            {isLoading ? <SpinnerMini /> : isExist ? "update meal" : "save new meal"}
                        </p>
                    </Button>
                    <Button onClick={() => {
                        dispatch({ type: "meal/endSession" })
                        navigate(`/${userRole}/nutrition?nutrition=meals_templates`)
                    }} type="secondary">
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
