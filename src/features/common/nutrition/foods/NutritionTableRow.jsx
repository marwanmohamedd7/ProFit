import { FaPlus } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useDeleteFood } from "./useDeleteFood";
import { HiPencil, HiTrash } from "react-icons/hi"
import { useCurrentUser } from "../../../../context/UserProvider";
import { useMealProvider } from "../../../../context/MealProvider";
import toast from "react-hot-toast";
import CreateFood from "./CreateFood";
import Table from "../../../../ui/Table"
import Modal from "../../../../ui/Modal";
import Button from "../../../../ui/Button";
import ConfirmDelete from "../../../../ui/ConfirmDelete";
// import { useParams } from "react-router-dom";
import { useDietProvider } from "../../../../context/DietProvider";
import ImageViewer from "../../../../ui/ImageViewer";
import StatusLabel from "../../../../ui/StatusLabel";
import { useDarkMode } from "../../../../context/DarkModeProvider";
import styles from "../../../../styles/styles";

function NutritionTableRow({ food, section, onCloseModal }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    // const { id: mealId } = useParams();
    let inadvisableFood = false;
    const { userRole } = useCurrentUser();
    const { deleteFood, isDeleting } = useDeleteFood();
    const { dispatch: dispatchMeal, foods: mealFoods } = useMealProvider();
    const { per: amount, diseaseCompatibility, foodAllergens, foodImage, foodname, category, macros, servingUnit } = food;
    const { dispatch: dispatchDiet, days: dietDays, plantype, disease: planDiseases, foodAllergens: planFoodAllergens } = useDietProvider();

    if (planDiseases?.length && typeof section !== "string" && plantype === "Customized plan") planDiseases.map(disease => {
        if (diseaseCompatibility?.includes(disease)) inadvisableFood = true;
        return disease;
    })

    if (planFoodAllergens?.length && typeof section !== "string" && plantype === "Customized plan") planFoodAllergens.map(allergy => {
        if (foodAllergens?.includes(allergy)) inadvisableFood = true;
        return allergy;
    })

    function onDelete(id) {
        if (!id) return;
        deleteFood(id)
    }
    function handleAddFood() {
        let foodItem;
        const { _id, per, ...values } = food;
        // 1- check if there's already a food with the same id
        // 2- add the new food to the meals if it doesn't exist
        if (section === "meal") {
            foodItem = mealFoods.find(food => (food.food._id === _id) || (food.food === _id))
            !foodItem && dispatchMeal({ type: "meal/addFood", payload: { ...values, amount, food: _id } })
        }
        else {
            const { day, mealId } = section;  // Destructuring to make it clearer
            foodItem = dietDays
                .find(dayItem => dayItem.day === day)?.meals  // Find the day and access meals safely
                .find(meal => meal.mealId === mealId)?.foods  // Find the meal and access foods safely
                .find(food => food.food._id === _id || food.food === _id);  // Find the food by _id

            if (!foodItem) {
                dispatchDiet({ type: "diet/addFood", payload: { day: day, mealId: mealId, food: { ...values, food: _id, amount } } })
                dispatchDiet({ type: 'diet/calcMealMacros', payload: { day: day, mealId: mealId } })
                dispatchDiet({ type: "diet/calcDayMacros", payload: day })
            }
        }
        if (foodItem) {
            toast.error("This food has been added before.")
            return
        }
        toast.success("Added a new food item!")
        onCloseModal();
    }

    return (
        section === "food" ?
            <Table.Row border={false}>
                <td className="px-4 py-2 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 h-14 w-14">
                            <ImageViewer imageURL={foodImage}>
                                <img className="h-14 w-14 rounded-md" src={foodImage} alt={foodname} />
                            </ImageViewer>
                        </div>
                        <div className="">
                            <div className="text-sm font-bold">{foodname}</div>
                        </div>
                    </div>
                </td>
                {/* <td className="p-4 whitespace-nowrap">{food.servingUnit}</td> */}
                <td className="p-4 whitespace-nowrap">{amount + " / " + servingUnit.toLowerCase()}</td>
                <td className="p-4 whitespace-nowrap">{macros.proteins + " g"}</td>
                <td className="p-4 whitespace-nowrap">{macros.fats + " g"}</td>
                <td className="p-4 whitespace-nowrap">{macros.carbs + " g"}</td>
                <td className="p-4 whitespace-nowrap">{macros.calories + " Kcal"}</td>
                <td className="p-4 whitespace-nowrap"><StatusLabel labelName={category} /></td>
                <td className="p-4 whitespace-nowrap text-right text-sm font-medium">
                    {
                        userRole === "admin" ?
                            <div className='flex items-center justify-start gap-2'>
                                <Modal>
                                    <Modal.Open opens="update-food">
                                        <Button type="icon-update">
                                            <HiPencil />
                                        </Button>
                                    </Modal.Open>
                                    <Modal.Window opens="update-food" >
                                        <CreateFood foodToUpdate={food} />
                                    </Modal.Window>
                                </Modal>

                                <Modal>
                                    <Modal.Open opens="delete-food">
                                        <Button type="icon-delete"
                                        >
                                            <HiTrash />
                                        </Button>
                                    </Modal.Open>
                                    <Modal.Window opens="delete-food">
                                        <ConfirmDelete isLoading={isDeleting} onConfirm={() => onDelete(food._id)} resourceName="food" />
                                    </Modal.Window>
                                </Modal>
                            </div>
                            :
                            food.admin ?
                                <div className='flex items-center justify-start gap-2'>
                                    <Button type="icon-update">
                                        <IoEyeOutline />
                                    </Button>
                                </div>
                                :
                                <div className='flex items-center justify-start gap-2'>
                                    <Modal>
                                        <Modal.Open opens="update-food">
                                            <Button type="icon-update">
                                                <HiPencil />
                                            </Button>
                                        </Modal.Open>
                                        <Modal.Window opens="update-food" >
                                            <CreateFood foodToUpdate={food} />
                                        </Modal.Window>
                                    </Modal>

                                    <Modal>
                                        <Modal.Open opens="delete-food">
                                            <Button type="icon-delete"
                                            >
                                                <HiTrash />
                                            </Button>
                                        </Modal.Open>
                                        <Modal.Window opens="delete-food">
                                            <ConfirmDelete isLoading={isDeleting} onConfirm={() => onDelete(food._id)} resourceName="food" />
                                        </Modal.Window>
                                    </Modal>
                                </div>
                    }
                </td>
            </Table.Row>
            :
            <Table.Row rowBgColor={`${inadvisableFood && (isDarkMode ? `${colors.bg_red_900} bg-opacity-60` : `${colors.bg_red_100}`)}`}>
                <td className={`px-4 py-2 whitespace-nowrap ${inadvisableFood && (isDarkMode ? `border ${colors.border_red_900} border-opacity-5` : `border ${colors.border_red_100}`)}`}>
                    <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 h-h-14 w-14">
                            <img className="h-14 w-14 rounded-md" src={food.foodImage} alt={food.foodname} />
                        </div>
                        <div className="">
                            <div className="text-sm font-bold">{food.foodname}</div>
                        </div>
                    </div>
                </td>
                {/* <td className="p-4 whitespace-nowrap">{food.servingUnit}</td> */}
                <td className={`p-4 whitespace-nowrap ${inadvisableFood && (isDarkMode ? `border ${colors.border_red_900} border-opacity-5` : `border ${colors.border_red_100}`)}`}>{amount + " / " + servingUnit.toLowerCase()}</td>
                <td className={`p-4 whitespace-nowrap ${inadvisableFood && (isDarkMode ? `border ${colors.border_red_900} border-opacity-5` : `border ${colors.border_red_100}`)}`}>{macros.proteins + " g"}</td>
                <td className={`p-4 whitespace-nowrap ${inadvisableFood && (isDarkMode ? `border ${colors.border_red_900} border-opacity-5` : `border ${colors.border_red_100}`)}`}>{macros.fats + " g"}</td>
                <td className={`p-4 whitespace-nowrap ${inadvisableFood && (isDarkMode ? `border ${colors.border_red_900} border-opacity-5` : `border ${colors.border_red_100}`)}`}>{macros.carbs + " g"}</td>
                <td className={`p-4 whitespace-nowrap ${inadvisableFood && (isDarkMode ? `border ${colors.border_red_900} border-opacity-5` : `border ${colors.border_red_100}`)}`}>{macros.calories + " Kcal"}</td>
                <td className={`p-4 whitespace-nowrap ${inadvisableFood && (isDarkMode ? `border ${colors.border_red_900} border-opacity-5` : `border ${colors.border_red_100}`)}`}><StatusLabel labelName={category} customStyle={inadvisableFood ? (isDarkMode ? `${colors.text_red_500} ${colors.bg_red_900} bg-opacity-50` : `${colors.text_red_500} ${colors.bg_red_200}`) : ""} /></td>
                <td className={`p-4 whitespace-nowrap text-center ${inadvisableFood && (isDarkMode ? `border ${colors.border_red_900} border-opacity-5` : `border ${colors.border_red_100}`)}`}>
                    <Button onClick={handleAddFood} type="secondary" customeStyle="py-2">
                        <p className="flex items-center justify-center gap-2 capitalize">
                            <span>add</span>
                            <span className="font-light"><FaPlus /></span>
                        </p>
                    </Button>
                    {/* <button onClick={handleAddFood} className="bg-blue-700 text-white p-4.5 rounded-md flex justify-center text-xs w-full"><FaPlus /></button> */}
                </td>
            </Table.Row>
    )
}

export default NutritionTableRow
