import Table from "../../../../../ui/Table"
import Pagination from "../../../../../ui/Pagination"
import { PAGE_SIZE_MEALS } from "../../../../../utils/constants"
import AssessmentsOverviewTableRow from "./AssessmentsOverviewTableRow"

function AssessmentsOverviewTable() {
    return (
        <Table>
            <Table.Header>
                <th className="px-4 py-2 whitespace-nowrap">trainee details</th>
                <th className="px-4 py-2 whitespace-nowrap">duration</th>
                {/* <th className="px-4 py-2 whitespace-nowrap">status</th> */}
                <th className="px-10 py-2 whitespace-nowrap">remaining days</th>
                <th className="px-4 py-2 whitespace-nowrap">action</th>
            </Table.Header>
            <Table.Body data={[1,2,3,4,5]} render={(assessment, index) => <AssessmentsOverviewTableRow transcation={assessment} key={index} />} />
            <Table.Footer>
                <Pagination count={2} pages={PAGE_SIZE_MEALS} />
            </Table.Footer>
        </Table>
    )
}

export default AssessmentsOverviewTable
