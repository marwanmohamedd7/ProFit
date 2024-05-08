import Table from "../../../../ui/Table"
import Empty from "../../../../ui/Empty"
import Pagination from "../../../../ui/Pagination"
import { PAGE_SIZE_DEFAULT } from "../../../../utils/constants"
import TrainerTranscationsTableRow from "./TrainerTranscationsTableRow"

function TrainerTranscationsTable({ transcations, count }) {
    if (!transcations.length) return <Empty resource={"transcations"} />
    return (
        <Table>
            <Table.Header>
                <tr className="capitalize text-left">
                    <th className="px-6 py-2 whitespace-nowrap">trainee name</th>
                    <th className="px-6 py-2 whitespace-nowrap">date</th>
                    <th className="px-6 py-2 whitespace-nowrap">subscription type</th>
                    <th className="px-6 py-2 whitespace-nowrap">package</th>
                    <th className="px-6 py-2 whitespace-nowrap">duration</th>
                    <th className="px-6 py-2 whitespace-nowrap">status</th>
                    <th className="px-6 py-2 whitespace-nowrap">amount</th>
                </tr>
            </Table.Header>
            <Table.Body data={transcations} render={(transcation) => <TrainerTranscationsTableRow transcation={transcation} key={transcation.id} />} />
            <Table.Footer>
                <Pagination count={count} pages={PAGE_SIZE_DEFAULT} />
            </Table.Footer>
        </Table>
    )
}

export default TrainerTranscationsTable
