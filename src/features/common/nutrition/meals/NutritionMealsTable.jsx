import Pagination from "../../../../ui/Pagination"
import Table from "../../../../ui/Table"
import NutritionMealsTableRow from "./NutritionMealsTableRow"

function NutritionMealsTable({ meals, count, onCloseModal }) {
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
            <Table.Body data={meals} render={(meal) => <NutritionMealsTableRow meal={meal} key={meal._id} onCloseModal={onCloseModal} />} />
            <Table.Footer>
                <Pagination count={count} />
            </Table.Footer>
        </Table>
    )
}

export default NutritionMealsTable
