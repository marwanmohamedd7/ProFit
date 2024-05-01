import { BiTrash } from "react-icons/bi";
import { useEffect, useState } from "react";
import ConfirmDelete from "../../../../ui/ConfirmDelete";
import { useMealProvider } from "../../../../context/MealProvider";
import toast from "react-hot-toast";
import Modal from "../../../../ui/Modal";
import InputFloatingLabel from "../../../../ui/InputFloatingLabel"
import { useDietProvider } from "../../../../context/DietProvider";

function MealFood({ food, section, isExist = false }) {
    // 1- food.food: the default id that comes with the food object when we add a new one
    // 2- food.food._id: the food object id that comes from already existing meal in database (when updating)
    const id = isExist ? food.food?._id ? food.food?._id : food.food : food.food;
    const { macros, foodname, foodImage, amount: per } = food;

    const { dispatch: dispatchMeal } = useMealProvider();
    const { dispatch: dispatchDiet } = useDietProvider();
    const [amount, setAmount] = useState(Number(per));
    const [fats, setFats] = useState(Number(macros.fats));
    const [carbs, setCarbs] = useState(Number(macros.carbs));
    const [proteins, setProteins] = useState(Number(macros.proteins));
    const [calories, setCalories] = useState(Number(macros.calories));

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
        <div key={food.foodname} className="bg-white px-4 py-2 rounded-md w-full border">
            <div className=" flex flex-col xl:flex-row xl:items-center xl:justify-between gap-2 text-lg font-bold text-blue-700">
                <div className="flex flex-col xl:items-center xl:flex-row xl:gap-3 gap-2 xl:mb-0 mb-1 xl:basis-72">
                    <div className="xl:h-24 xl:w-24 sm:w-44 sm:h-44 w-40 h-40 flex items-center justify-center">
                        <img className="rounded-sm" src={foodImage} alt={foodname} />
                    </div>
                    <div className="capitalize whitespace-nowrap">
                        <div className="xl:text-lg text-xl font-bold">{foodname}</div>
                    </div>
                </div>
                <h3 className="flex flex-col gap-1 xl:w-24 2xl:w-36">
                    <p className="flex items-center gap-1">
                        <span>{proteins.toFixed(2)}</span>
                        <span className="font-normal">g</span>
                    </p>
                    <span className="text-xs text-blue-900 font-normal capitalize">proteins</span>
                </h3>
                <h3 className="flex flex-col gap-1 xl:w-24 2xl:w-36">
                    <p className="flex items-center gap-1">
                        <span>{fats.toFixed(2)}</span>
                        <span className="font-normal">g</span>
                    </p>
                    <span className="text-xs text-blue-900 font-normal capitalize">fats</span>
                </h3>
                <h3 className="flex flex-col gap-1 xl:w-24 2xl:w-36">
                    <p className="flex items-center gap-1">
                        <span>{carbs.toFixed(2)}</span>
                        <span className="font-normal">g</span>
                    </p>
                    <span className="text-xs text-blue-900 font-normal capitalize">carbs</span>
                </h3>
                <h3 className="flex flex-col gap-1 xl:w-24 2xl:w-36">
                    <p className="flex items-center gap-1">
                        <span>{calories.toFixed(2)}</span>
                        <span className="font-normal">Kcal</span>
                    </p>
                    <span className="text-xs text-blue-900 font-normal capitalize">calories</span>
                </h3>
                <div className="flex flex-wrap items-center justify-end xl:grow-0 grow xl:mt-0 mt-1">
                    <div className="flex items-center gap-2 xl:grow-0 grow">
                        <InputFloatingLabel
                            item={{ id: (food.servingUnit).replaceAll(" ", "").toLowerCase(), label: food.servingUnit, value: !amount ? "" : amount }}
                            onChange={(e) => setAmount(!e.target.value ? 0 : e.target.value)}
                            onBlur={handleUpdateMacros}
                        // disabled={isLoading}
                        />
                        <Modal>
                            <Modal.Open opens="delete-food">
                                <button className="bg-red-700 text-white xl:p-3 p-2.5 rounded-lg text-lg"><BiTrash /></button>
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
