import Table from "../../../../ui/Table"
import NutritionMealsTableRow from "./NutritionMealsTableRow"

const foods = [
    {
        mealDetails: {
            mealName: "fetar tanshif",
            mealType: "Breakfast"
        },
        mealIngredients: [
            "beed 100 gram",
            "gebna arish 50 gram",
            "zeet zaton 5 gram",
            "green salad 100 gram",
            "botatos 75 gram",
        ],
        totalMacros:
        {
            calories: 370,
            proteins: 20,
            fats: 10,
            carbs: 90,
        }
    },
    {
        mealDetails: {
            mealName: "fetar tanshif",
            mealType: "Breakfast"
        },
        mealIngredients: [
            "beed 100 gram",
            "gebna arish 50 gram",
            "zeet zaton 5 gram",
            "green salad 100 gram",
            "botatos 75 gram",
        ],
        totalMacros:
        {
            calories: 370,
            proteins: 20,
            fats: 10,
            carbs: 90,
        }
    },
    {
        mealDetails: {
            mealName: "fetar tanshif",
            mealType: "Breakfast"
        },
        mealIngredients: [
            "beed 100 gram",
            "gebna arish 50 gram",
            "zeet zaton 5 gram",
            "green salad 100 gram",
            "botatos 75 gram",
            "beed 100 gram",
            "gebna arish 50 gram",
            "zeet zaton 5 gram",
            "green salad 100 gram",
            "botatos 75 gram",
            "beed 100 gram",

            "botatos 75 gram",
            "beed 100 gram",
            "gebna arish 50 gram",

        ],
        totalMacros:
        {
            calories: 370,
            proteins: 20,
            fats: 10,
            carbs: 90,
        }
    },
    {
        mealDetails: {
            mealName: "fetar tanshif",
            mealType: "Breakfast"
        },
        mealIngredients: [
            "beed 100 gram",
            "gebna arish 50 gram",
            "zeet zaton 5 gram",
            "green salad 100 gram",
            "botatos 75 gram",
            "beed 100 gram",
            "gebna arish 50 gram",
            "zeet zaton 5 gram",
            "green salad 100 gram",
            "botatos 75 gram",
            "botatos 75 gram",
        ],
        totalMacros:
        {
            calories: 370,
            proteins: 20,
            fats: 10,
            carbs: 90,
        }
    },
]

function NutritionMealsTable({ meals }) {
    return (
        <Table>
            <Table.Header>
                <tr className="capitalize">
                    <th className="lg:w-[20%] w-[10%] px-4 py-2 text-left">meal deatails</th>
                    <th className="lg:w-[45%] w-[50%] px-4 py-2 text-left">meal ingredients</th>
                    <th className="lg:w-[25%] w-[10%] px-4 py-2 text-left">meal macros</th>
                    <th className="lg:w-[10%] w-[10%] pr-6 py-2 text-right">Actions</th>
                </tr>
            </Table.Header>
            {/* <Table.Body data={meals} render={(meal, index) => <NutritionMealsTableRow meal={meal} key={index} />} /> */}
            <Table.Footer cols={3} />
        </Table>
    )
}

export default NutritionMealsTable
