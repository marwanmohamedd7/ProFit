import Empty from "../../../../ui/Empty"
import Table from "../../../../ui/Table"
import Pagination from "../../../../ui/Pagination"
import AdminFinancialTableRow from "./AdminFinancialTableRow"
import { PAGE_SIZE_DEFAULT } from "../../../../utils/constants"

function AdminFinancialTable({ transcations, count }) {
    if (!count) return <Empty resource={"transcations"} />
    return (
        <Table>
            <Table.Header>
                <th className="px-4 py-2 whitespace-nowrap">trainer name</th>
                <th className="px-4 py-2 whitespace-nowrap">trainee name</th>
                <th className="px-4 py-2 whitespace-nowrap">subscription date</th>
                <th className="px-4 py-2 whitespace-nowrap">subscription type</th>
                <th className="px-4 py-2 whitespace-nowrap">package</th>
                <th className="px-4 py-2 whitespace-nowrap">duration</th>
                <th className="px-4 py-2 whitespace-nowrap">status</th>
                <th className="px-4 py-2 whitespace-nowrap">amount</th>
            </Table.Header>
            <Table.Body data={transcations} render={(transcation) => <AdminFinancialTableRow transcation={transcation} key={transcation.id} />} />
            <Table.Footer>
                <Pagination count={count} pages={PAGE_SIZE_DEFAULT} />
            </Table.Footer>
        </Table>
    )
}

export default AdminFinancialTable
