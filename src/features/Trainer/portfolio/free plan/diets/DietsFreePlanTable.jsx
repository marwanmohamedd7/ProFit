import Table from "../../../../../ui/Table"
import Pagination from "../../../../../ui/Pagination"
import DietsFreePlanTableRow from "./DietsFreePlanTableRow"
import { PAGE_SIZE_MEALS } from "../../../../../utils/constants"
import Empty from "../../../../../ui/Empty"
import { useSorting } from "../../../../../hooks/useSorting"
import SortTableColumnsHeader from "../../../../../ui/SortTableColumnsHeader"

// const columns = [
//     { key: "planName", label: "plan name" },
//     { key: "daysCount", label: "days count" },
//     { key: "daysCount", label: "days count" },
//     { key: ["planmacros", "calories"], label: "program macros" },
// ];

function DietsFreePlanTable({ diets, count }) {
    const { sortedData, sortConfig, setSortConfig } = useSorting(diets);
    if (!count || !diets.length) return <Empty resource="free diet plans" />
    return (
        <Table>
            <Table.Header>
                <th className="px-4 py-2 text-left whitespace-nowrap">
                    <SortTableColumnsHeader
                        sortingKey="planName"
                        columnName="plan name"
                        sortConfig={sortConfig}
                        setSortConfig={setSortConfig}
                    />
                </th>
                <th className="px-4 py-2 text-left whitespace-nowrap">
                    <SortTableColumnsHeader
                        sortingKey="daysCount"
                        columnName="days count"
                        sortConfig={sortConfig}
                        setSortConfig={setSortConfig}
                    />
                </th>
                <th className="px-4 py-2 text-left whitespace-nowrap">subscribers</th>
                <th className="px-4 py-2 text-left whitespace-nowrap">rating</th>
                <th className="px-4 py-2 text-left whitespace-nowrap">
                    <SortTableColumnsHeader
                        sortingKey={["planmacros", "calories"]}
                        columnName="program macros"
                        sortConfig={sortConfig}
                        setSortConfig={setSortConfig}
                    />
                </th>
                <th className="px-4 py-2 text-left whitespace-nowrap">publish</th>
                <th className="px-4 py-2 text-left whitespace-nowrap">Actions</th>
            </Table.Header >
            <Table.Body data={sortedData} render={diet => <DietsFreePlanTableRow diet={diet} key={diet._id} />} />
            <Table.Footer>
                <Pagination count={count} pages={PAGE_SIZE_MEALS} />
            </Table.Footer>
        </Table >
    )
}

export default DietsFreePlanTable
