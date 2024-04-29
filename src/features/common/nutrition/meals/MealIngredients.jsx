import { HiPlusSm } from "react-icons/hi"
import { useCurrentUser } from "../../../../context/UserProvider"
import MealFood from "./MealFood"
import Modal from "../../../../ui/Modal"
import Button from "../../../../ui/Button"
import NutritionFoods from "../Trainer/trainerFoods/NutritionFoods"
import NutritionAppFood from "../Admin/ProFitFoods/NutritionAppFood"

// let foods = [
//     {
//         "macros": {
//             "calories": 1400,
//             "proteins": 200,
//             "fats": 40,
//             "carbs": 60
//         },
//         "foodImage": "https://res.cloudinary.com/dbpvx37nc/image/upload/v1713694041/Admin/MAOMEN%20RAAFAT/FoodImages/foodImage-1713694038042-a6a8f6d3-882d-40f7-96c7-01e90e27a519.jpg",
//         "foodname": "chicken",
//         "servingUnit": "Gram",
//         "amount": 150,
//         "food": "6624e559b6538092744ebbe1"
//     },
//     {
//         "macros": {
//             "calories": 130,
//             "proteins": 25,
//             "fats": 2,
//             "carbs": 3
//         },
//         "foodImage": "https://res.cloudinary.com/dbpvx37nc/image/upload/v1713766951/Trainer/marwan%20youssef/FoodImages/foodImage-1713766950765-fb65aac5-1eab-4eda-998d-091650efc99f.png",
//         "foodname": "whey protein",
//         "servingUnit": "Scoop",
//         "amount": 1,
//         "food": "66260227eceaff0d305e91a4"
//     }
// ]

// function MealIngredients({ foods = [], isExist = false }) {
function MealIngredients({ foods = [], isExist = false }) {
    const { userRole } = useCurrentUser()
    return (
        <div className="bg-gray-100 border-2 border-dotted border-blue-700 p-4 rounded-md w-full">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-2">
                {
                    foods.length > 0 && foods.map((food) =>
                        <MealFood
                            food={food}
                            isExist={isExist}
                            key={isExist ? food?.food?._id ? food?.food?._id : food.food : food.food}
                        />
                    )
                }
                <div className="col-span-full">
                    <Modal>
                        <Modal.Open opens={`choose-meal-recipes`}>
                            <Button customeStyle="mx-auto py-2.5 w-full">
                                <p className="capitalize flex justify-center items-center gap-1">
                                    <span>add meal recipe</span>
                                    <span className="text-lg"><HiPlusSm /></span>
                                </p>
                            </Button>
                        </Modal.Open>
                        <Modal.Window opens={`choose-meal-recipes`}>
                            {userRole === "admin" ? <NutritionAppFood section="meal" /> : <NutritionFoods section="meal" />}
                        </Modal.Window>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default MealIngredients
