import { HiPlusSm } from "react-icons/hi"
import { useCurrentUser } from "../../../../context/UserProvider"
import MealFood from "./MealFood"
import Modal from "../../../../ui/Modal"
import Button from "../../../../ui/Button"
import NutritionFoods from "../Trainer/trainerFoods/NutritionFoods"
import NutritionAppFood from "../Admin/ProFitFoods/NutritionAppFood"

function MealIngredients({ foods = [], isExist = false, section = "food" }) {
    const { userRole } = useCurrentUser()
    return (
        <div className="bg-gray-100 border-2 border-dotted border-blue-700 p-4 rounded-md w-full">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-2">
                {
                    foods.length > 0 && foods.map((food) =>
                        <MealFood
                            food={food}
                            isExist={isExist}
                            section={section}
                            key={isExist ? food.food?._id ? food.food?._id : food.food : food.food}
                        />
                    )
                }
                <div className="col-span-full">
                    <Modal>
                        <Modal.Open opens={`choose-meal-recipes`}>
                            <Button type="primary" customeStyle="mx-auto py-2.5 w-full">
                                <p className="capitalize flex justify-center items-center gap-1">
                                    <span>add meal recipe</span>
                                    <span className="text-lg"><HiPlusSm /></span>
                                </p>
                            </Button>
                        </Modal.Open>
                        <Modal.Window opens={`choose-meal-recipes`}>
                            {userRole === "admin" ? <NutritionAppFood section={section} /> : <NutritionFoods section={section} />}
                        </Modal.Window>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default MealIngredients
