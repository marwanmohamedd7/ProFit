import Empty from "../../../../ui/Empty"
import Table from "../../../../ui/Table"
import Pagination from "../../../../ui/Pagination"
import AdminFinancialTableRow from "./AdminFinancialTableRow"
import { PAGE_SIZE_DEFAULT } from "../../../../utils/constants"
import { useSorting } from "../../../../hooks/useSorting"
import SortTableColumnsHeader from "../../../../ui/SortTableColumnsHeader"

const columns = [
    { key: "trainerName", label: "trainer name" },
    { key: "trainerName", label: "trainee name" },
    { key: "startDate", label: "subscription date" },
    { key: "subscriptionType", label: "subscription type" },
    { key: "packageName", label: "package" },
    { key: "duration", label: "duration" },
    { key: "status", label: "status" },
    { key: "Amount", label: "amount" },
];

function AdminFinancialTable({ transcations, count }) {
    const { sortedData, sortConfig, setSortConfig } = useSorting(transcations);
    if (!count || !transcations.length) return <Empty resource={"transcations"} />
    return (
        <Table>
            <Table.Header>
                {columns.map(({ key, label }) => (
                    <th className="px-4 py-2 whitespace-nowrap" key={label}>
                        <SortTableColumnsHeader
                            sortingKey={key}
                            columnName={label}
                            sortConfig={sortConfig}
                            setSortConfig={setSortConfig}
                        />
                    </th>
                ))}
            </Table.Header>
            <Table.Body data={sortedData} render={(transcation) => <AdminFinancialTableRow transcation={transcation} key={transcation.id} />} />
            <Table.Footer>
                <Pagination count={count} pages={PAGE_SIZE_DEFAULT} />
            </Table.Footer>
        </Table>
    )
}

export default AdminFinancialTable
