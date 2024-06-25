import { BiTrash } from "react-icons/bi";
import { useEffect, useState } from "react";
import ConfirmDelete from "../../../../ui/ConfirmDelete";
import { useMealProvider } from "../../../../context/MealProvider";
import toast from "react-hot-toast";
import Modal from "../../../../ui/Modal";
import InputFloatingLabel from "../../../../ui/InputFloatingLabel"
import { useDietProvider } from "../../../../context/DietProvider";
import FoodMacros from "./FoodMacros";
import ImageViewer from "../../../../ui/ImageViewer";
import { useDarkMode } from "../../../../context/DarkModeProvider";
import styles from "../../../../styles/styles";

function MealFood({ food, section, isExist = false }) {
    // 1- food.food: the default id that comes with the food object when we add a new one
    // 2- food.food._id: the food object id that comes from already existing meal in database (when updating)
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    let inadvisableFood = false;
    const { dispatch: dispatchMeal } = useMealProvider();
    const id = isExist ? food.food?._id ? food.food?._id : food.food : food.food;
    const { macros, foodname, foodImage, amount: per } = food;
    const { dispatch: dispatchDiet, plantype, disease: planDiseases, foodAllergens: planFoodAllergens } = useDietProvider();

    const [amount, setAmount] = useState(Number(per));
    const [fats, setFats] = useState(Number(macros.fats));
    const [carbs, setCarbs] = useState(Number(macros.carbs));
    const [proteins, setProteins] = useState(Number(macros.proteins));
    const [calories, setCalories] = useState(Number(macros.calories));
    if (planDiseases?.length && plantype === "Customized plan") planDiseases.map(disease => {
        const diseases = typeof food?.food === "string" ? food?.diseaseCompatibility : food?.food?.diseaseCompatibility;
        if (diseases?.includes(disease)) inadvisableFood = true;
        return disease;
    })

    if (planFoodAllergens?.length && plantype === "Customized plan") planFoodAllergens.map(allergy => {
        const allergens = typeof food?.food === "string" ? food?.foodAllergens : food?.food?.foodAllergens;
        if (allergens?.includes(allergy)) inadvisableFood = true;
        return allergy;
    })

    useEffect(function () {
        function calFoodMacros() {
            const calAmount = !Number(per) ? amount : (amount / Number(per))
            setFats(!calAmount ? 0 : Number(macros.fats) * calAmount)
            setCarbs(!calAmount ? 0 : Number(macros.carbs) * calAmount)
            setCalories(!calAmount ? 0 : Number(macros.calories) * calAmount)
            setProteins(!calAmount ? 0 : Number(macros.proteins) * calAmount)
        }
        calFoodMacros()
    }, [macros, amount, per])

    function handleUpdateMacros(e) {
        if (!amount || amount === "0") {
            handleDeleteFood()
            return
        }
        if (Number(e.target.value) === per) return
        if (section === "meal") dispatchMeal({ type: "meal/updateFoodMacros", payload: { foodId: id, macros: { fats: Number(fats), carbs: Number(carbs), proteins: Number(proteins), calories: Number(calories) }, per: Number(amount) } })
        else {
            dispatchDiet({ type: "diet/updateFoodMacros", payload: { day: section.day, mealId: section.mealId, foodId: id, macros: { fats: Number(fats), carbs: Number(carbs), proteins: Number(proteins), calories: Number(calories) }, per: Number(amount) } })
            dispatchDiet({ type: "diet/calcMealMacros", payload: { day: section.day, mealId: section.mealId } })
            dispatchDiet({ type: "diet/calcDayMacros", payload: section.day })
        }
        toast.success("Food information updated!")
    }

    function handleDeleteFood() {
        if (section === "meal") dispatchMeal({ type: "meal/deleteFood", payload: id })
        else {
            dispatchDiet({ type: "diet/deleteFood", payload: { day: section.day, mealId: section.mealId, foodId: id } })
            dispatchDiet({ type: "diet/calcMealMacros", payload: { day: section.day, mealId: section.mealId } })
            dispatchDiet({ type: "diet/calcDayMacros", payload: section.day })

        }
        toast.success("Food has been removed!")
    }

    return (
        <div className={`p-4 rounded-md w-full border ${inadvisableFood ? "bg-red-100" : `${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700}` : colors.bg_gray_50}`}`}>
            <div className={`flex flex-col xl:flex-row xl:items-center xl:justify-between gap-2 text-lg font-bold ${isDarkMode ? colors.text_gray_100 : colors.text_gray_900}`}>
                <div className="flex flex-col xl:items-center xl:flex-row xl:gap-3 gap-2 xl:mb-0 mb-1 xl:basis-72">
                    <div className="xl:h-24 xl:w-24 sm:w-44 sm:h-44 w-40 h-40 flex items-center justify-center">
                        <ImageViewer imageURL={foodImage}>
                            <img className="rounded-md cursor-pointer" src={foodImage} alt={foodname} />
                        </ImageViewer>
                    </div>
                    <div className="capitalize whitespace-nowrap">
                        <div className="xl:text-lg text-xl font-bold">{foodname}</div>
                    </div>
                </div>
                <FoodMacros calories={calories} proteins={proteins} carbs={carbs} fats={fats} />
                <div className="flex flex-wrap items-center justify-end xl:grow-0 grow xl:mt-0 mt-1">
                    <div className="flex items-center gap-2 xl:grow-0 grow">
                        <InputFloatingLabel
                            item={{ id: (food.servingUnit).replaceAll(" ", "").toLowerCase(), label: food.servingUnit, value: !amount ? "" : amount }}
                            onChange={(e) => setAmount(!e.target.value ? 0 : e.target.value)}
                            onBlur={handleUpdateMacros}
                        />
                        <Modal>
                            <Modal.Open opens="delete-food">
                                <button className={`${isDarkMode ? `${colors.bg_red_800} ${colors.text_white} hover:${colors.bg_red_700}` : `${colors.bg_red_700} ${colors.text_white} hover:${colors.bg_red_600}`} transition-all duration-300 xl:p-3 p-2.5 rounded-lg text-lg`}><BiTrash /></button>
                            </Modal.Open>
                            <Modal.Window opens="delete-food">
                                <ConfirmDelete onConfirm={handleDeleteFood} resourceName="food" />
                            </Modal.Window>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MealFood
