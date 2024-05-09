import Table from "../../../../ui/Table"
import Pagination from "../../../../ui/Pagination"
import NutritionMealsTableRow from "./NutritionMealsTableRow"
import { PAGE_SIZE_MEALS } from "../../../../utils/constants"
import Empty from "../../../../ui/Empty"

function NutritionMealsTable({ meals, section, count, onCloseModal }) {
    if (!count) return <Empty resource="meals" />
    return (
        <Table>
            <Table.Header>
                {
                    section === "meal" ?
                        <tr className="capitalize">
                            <th className="lg:w-[20%] w-[10%] px-4 py-2 text-left whitespace-nowrap">meal deatails</th>
                            <th className="lg:w-[45%] w-[50%] px-4 py-2 text-left whitespace-nowrap">meal ingredients</th>
                            <th className="lg:w-[25%] w-[10%] px-4 py-2 text-left whitespace-nowrap">meal macros</th>
                            <th className="lg:w-[10%] w-[10%] px-8 py-2 text-right whitespace-nowrap">Actions</th>
                        </tr>
                        :
                        <tr className="capitalize">
                            <th className="px-4 py-2 text-left whitespace-nowrap">meal deatails</th>
                            <th colSpan="2" className="px-4 py-2 text-left whitespace-nowrap">meal ingredients</th>
                            <th colSpan="2" className="px-4 py-2 text-left whitespace-nowrap">meal macros</th>
                            <th className="px-2 py-2 text-left whitespace-nowrap">Actions</th>
                        </tr>
                }
            </Table.Header>
            <Table.Body data={meals} render={(meal) => <NutritionMealsTableRow meal={meal} section={section} key={meal._id} onCloseModal={onCloseModal} />} />
            <Table.Footer>
                <Pagination count={count} pages={PAGE_SIZE_MEALS}/>
            </Table.Footer>
        </Table>
    )
}

export default NutritionMealsTable
