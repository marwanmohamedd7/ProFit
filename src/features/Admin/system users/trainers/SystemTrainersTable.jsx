import Table from "../../../../ui/Table";
import Pagination from "../../../../ui/Pagination";
import { PAGE_SIZE_DEFAULT } from "../../../../utils/constants";
import SystemTrainersTableRow from "./SystemTrainersTableRow";

function SystemTrainersTable({ users, count }) {
    return (
        <Table>
            <Table.Header>
                <th className="px-4 py-2 whitespace-nowrap">trainer details</th>
                <th className="px-4 py-2 whitespace-nowrap">Subscriptions</th>
                <th className="px-4 py-2 whitespace-nowrap">earnings(EGP)</th>
                <th className="px-4 py-2 whitespace-nowrap">registration date</th>
                <th className="px-4 py-2 whitespace-nowrap">status</th>
                <th className="px-4 py-2 whitespace-nowrap">actions</th>
            </Table.Header>
            <Table.Body data={users} render={(trainer) => <SystemTrainersTableRow trainer={trainer} key={trainer.id} />} />
            <Table.Footer>
                <Pagination count={count} pages={PAGE_SIZE_DEFAULT} />
            </Table.Footer>
        </Table>
    )
}

export default SystemTrainersTable
