import Table from "../../../../../ui/Table"
import Pagination from "../../../../../ui/Pagination"
import DietsFreePlanTableRow from "./DietsFreePlanTableRow"
import { PAGE_SIZE_MEALS } from "../../../../../utils/constants"

function DietsFreePlanTable({ diets, count }) {
    return (
        <Table>
            <Table.Header>
                <tr className="capitalize">
                    <th className="px-4 py-2 text-left">plan name</th>
                    <th className="px-4 py-2 text-left">subscribers</th>
                    <th className="px-4 py-2 text-left">rating</th>
                    <th className="px-4 py-2 text-left">program macros</th>
                    <th className="px-4 py-2 text-left">publish</th>
                    <th className="pr-6 py-2 text-left">Actions</th>
                </tr>
            </Table.Header >
            <Table.Body data={diets} render={diet => <DietsFreePlanTableRow diet={diet} key={diet._id} />} />
            <Table.Footer>
                <Pagination count={count} pages={PAGE_SIZE_MEALS} />
            </Table.Footer>
        </Table >
    )
}

export default DietsFreePlanTable
