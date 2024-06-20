import Table from "../../../../ui/Table"
import Pagination from "../../../../ui/Pagination"
import NutritionMealsTableRow from "./NutritionMealsTableRow"
import { PAGE_SIZE_MEALS } from "../../../../utils/constants"
import Empty from "../../../../ui/Empty"
import { useSorting } from "../../../../hooks/useSorting"
import SortTableColumnsHeader from "../../../../ui/SortTableColumnsHeader"

function NutritionMealsTable({ meals, section, count, onCloseModal }) {
    const { sortedData, sortConfig, setSortConfig } = useSorting(meals);
    if (!count || !meals.length) return <Empty resource="meals" />
    return (
        <Table>
            <Table.Header border={false}>
                {
                    section === "meal" ?
                        <>
                            <th className="lg:w-[20%] w-[10%] px-4 py-2 text-left whitespace-nowrap">
                                <SortTableColumnsHeader
                                    sortingKey="mealname"
                                    columnName="meal Deatails"
                                    sortConfig={sortConfig}
                                    setSortConfig={setSortConfig}
                                />
                            </th>
                            <th className="lg:w-[45%] w-[50%] px-4 py-2 text-left whitespace-nowrap">meal ingredients</th>
                            <th className="lg:w-[25%] w-[10%] px-4 py-2 text-left whitespace-nowrap">
                                <SortTableColumnsHeader
                                    sortingKey={["mealmacros", "calories"]}
                                    columnName="meal macros"
                                    sortConfig={sortConfig}
                                    setSortConfig={setSortConfig}
                                />
                            </th>
                            <th className="lg:w-[10%] w-[10%] px-8 py-2 text-right whitespace-nowrap">Actions</th>
                        </>
                        :
                        <>
                            <th className="px-4 py-2 text-left whitespace-nowrap">meal deatails</th>
                            <th colSpan="2" className="px-4 py-2 text-left whitespace-nowrap">meal ingredients</th>
                            <th colSpan="2" className="px-4 py-2 text-left whitespace-nowrap">meal macros</th>
                            <th className="px-2 py-2 text-left whitespace-nowrap">Actions</th>
                        </>
                }
            </Table.Header>
            <Table.Body data={sortedData} render={(meal) => <NutritionMealsTableRow meal={meal} section={section} key={meal._id} onCloseModal={onCloseModal} />} />
            <Table.Footer border={false}>
                <Pagination count={count} pages={PAGE_SIZE_MEALS} />
            </Table.Footer>
        </Table>
    )
}

export default NutritionMealsTable
