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
import { useDarkMode } from "../../../../context/DarkModeProvider";
import styles from "../../../../styles/styles";

function CreateMeal({ mealToUpdate = {} }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { _id } = mealToUpdate
    const isExist = Boolean(_id)
    const navigate = useNavigate()
    const { userRole } = useCurrentUser()
    const { createMeal, isCreating } = useCreateMeal()
    const { updateMeal, isUpdating } = useUpdateMeal()
    const { handleSubmit, formState: { errors }, getValues, register, watch, reset } = useForm({
        defaultValues: isExist ? mealToUpdate : {},
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
                <div className={`${isDarkMode && `${colors.bg_slate_800} ${colors.border_gray_700}`} p-4 rounded-md border flex flex-col justify-center gap-4`}>
                    <div className={`${isDarkMode ? colors.text_gray_100 : colors.text_gray_900} font-bold capitalize`}>
                        meal details
                    </div>
                    <MealDetailsForm register={register} watch={watch} errors={errors} getValues={getValues()} />
                </div>
                <div className={`${isDarkMode && `${colors.bg_slate_800} ${colors.border_gray_700}`} p-4 rounded-md border flex flex-col justify-center gap-4`}>
                    <div className={`${isDarkMode ? colors.text_gray_100 : colors.text_gray_900} font-bold capitalize`}>
                        meal macros
                    </div>
                    <MealMacros
                        fats={mealMacros?.fats ?? 0}
                        carbs={mealMacros?.carbs ?? 0}
                        proteins={mealMacros?.proteins ?? 0}
                        calories={mealMacros?.calories ?? 0}
                    />
                </div>
                <div className={`${isDarkMode && `${colors.bg_slate_800} ${colors.border_gray_700}`} p-4 rounded-md border flex flex-col justify-center gap-4`}>
                    <div className={`${isDarkMode ? colors.text_gray_100 : colors.text_gray_900} font-bold capitalize`}>
                        meal ingredients
                    </div>
                    <MealIngredients foods={foods} isExist={isExist} section="meal" />
                </div>
                <div className="flex items-center gap-2">
                    <Button type="primary" onClick={handleSubmit(onSubmit)}>
                        <p className="capitalize">
                            {isLoading ? <SpinnerMini dark={false} /> : isExist ? "update meal" : "save new meal"}
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
