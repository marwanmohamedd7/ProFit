import { PAGE_SIZE_MEALS } from "../../../../../utils/constants"
import Table from "../../../../../ui/Table"
import Pagination from "../../../../../ui/Pagination"
import NutritionDietsTableRow from "./NutritionDietsTableRow"
import Empty from "../../../../../ui/Empty"

function NutritionDietsTable({ diets, count }) {
    if (!count) return <Empty resource="templates" />
    return (
        <Table>
            <Table.Header>
                <tr className="capitalize">
                    <th className="lg:w-[20%] w-[10%] px-4 py-2 text-left">diet template name</th>
                    {/* <th className="lg:w-[20%] w-[50%] px-4 py-2 text-left">meals count</th> */}
                    <th className="lg:w-[20%] w-[10%] px-4 py-2 text-left">days count</th>
                    <th className="lg:w-[30%] w-[10%] px-4 py-2 text-left">program macros</th>
                    <th className="lg:w-[10%] w-[10%] px-8 py-2 text-right">Actions</th>
                </tr>
            </Table.Header>
            <Table.Body data={diets} render={(diet, index) => <NutritionDietsTableRow diet={diet} key={index} />} />
            <Table.Footer>
                <Pagination count={count} pages={PAGE_SIZE_MEALS} />
            </Table.Footer>
        </Table>
    )
}

export default NutritionDietsTable
