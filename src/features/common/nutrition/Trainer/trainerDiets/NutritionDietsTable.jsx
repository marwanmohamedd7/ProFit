import Table from "../../../../../ui/Table"
import NutritionDietsTableRow from "./NutritionDietsTableRow"

const diets = [
    {
        dietTemplateName: "Cutting Plan",
        mealsCount: 4,
        daysCount: 7,
        programMacros: {
            calories: 1966,
            proteins: 134,
            fats: 70,
            carbs: 20,
        }
    },
    {
        dietTemplateName: "High Carb",
        mealsCount: 4,
        daysCount: 7,
        programMacros: {
            calories: 356,
            proteins: 34,
            fats: 10,
            carbs: 31
        }
    },
    {
        dietTemplateName: "CarbCycle",
        mealsCount: 3,
        daysCount: 7,
        programMacros: {
            calories: 775,
            proteins: 34,
            fats: 30,
            carbs: 95
        }
    }
];

function NutritionDietsTable() {
    return (
        <Table>
            <Table.Header>
                <tr className="capitalize">
                    <th className="lg:w-[20%] w-[10%] px-4 py-2 text-left">diet template name</th>
                    <th className="lg:w-[20%] w-[50%] px-4 py-2 text-left">meals count</th>
                    <th className="lg:w-[20%] w-[10%] px-4 py-2 text-left">days count</th>
                    <th className="lg:w-[30%] w-[10%] px-4 py-2 text-left">program macros</th>
                    <th className="lg:w-[10%] w-[10%] pr-6 py-2 text-right">Actions</th>
                </tr>
            </Table.Header>
            <Table.Body data={diets} render={(diet, index) => <NutritionDietsTableRow diet={diet} key={index} />} />
            <Table.Footer />
        </Table>
    )
}

export default NutritionDietsTable
