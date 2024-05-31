import Table from "../../../../ui/Table"
import Empty from "../../../../ui/Empty"
import Pagination from "../../../../ui/Pagination"
import { PAGE_SIZE_DEFAULT } from "../../../../utils/constants"
import TrainerTranscationsTableRow from "./TrainerTranscationsTableRow"

function TrainerTranscationsTable({ transcations, count }) {
    if (!count) return <Empty resource={"subscriptions"} />
    return (
        <Table>
            <Table.Header>
                <th className="px-4 py-2 whitespace-nowrap">trainee name</th>
                <th className="px-4 py-2 whitespace-nowrap">date</th>
                <th className="px-4 py-2 whitespace-nowrap">subscription type</th>
                <th className="px-4 py-2 whitespace-nowrap">package</th>
                <th className="px-4 py-2 whitespace-nowrap">duration</th>
                <th className="px-4 py-2 whitespace-nowrap">status</th>
                <th className="px-4 py-2 whitespace-nowrap">amount</th>
            </Table.Header>
            <Table.Body data={transcations} render={(transcation) => <TrainerTranscationsTableRow transcation={transcation} key={transcation.id} />} />
            <Table.Footer>
                <Pagination count={count} pages={PAGE_SIZE_DEFAULT} />
            </Table.Footer>
        </Table>
    )
}

export default TrainerTranscationsTable
