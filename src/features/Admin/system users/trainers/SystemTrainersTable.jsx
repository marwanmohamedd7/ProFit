import Table from "../../../../ui/Table";
import Pagination from "../../../../ui/Pagination";
import { PAGE_SIZE_DEFAULT } from "../../../../utils/constants";
import SystemTrainersTableRow from "./SystemTrainersTableRow";
import { useSorting } from "../../../../hooks/useSorting";
import SortTableColumnsHeader from "../../../../ui/SortTableColumnsHeader";
import Empty from "../../../../ui/Empty";

const columns = [
    { key: "firstName", label: "trainer details" },
    { key: "activeSubscribers", label: "Subscriptions" },
    { key: "paidAmount", label: "earnings(EGP)" },
    { key: "Registration_Date", label: "registration date" },
    { key: "status", label: "status" },
];

function SystemTrainersTable({ users, count }) {
    const { sortedData, sortConfig, setSortConfig } = useSorting(users);
    if (!count || !users.length) return <Empty resource={"users"} />
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
                <th className="px-4 py-2 whitespace-nowrap">actions</th>
            </Table.Header>
            <Table.Body data={sortedData} render={(trainer) => <SystemTrainersTableRow trainer={trainer} key={trainer.id} />} />
            <Table.Footer>
                <Pagination count={count} pages={PAGE_SIZE_DEFAULT} />
            </Table.Footer>
        </Table>
    )
}

export default SystemTrainersTable
