import Empty from "../../../../ui/Empty";
import Pagination from "../../../../ui/Pagination"
import Table from "../../../../ui/Table"
import { PAGE_SIZE_MEALS } from "../../../../utils/constants"
import TraineeDietPlansTableRow from "./TraineeDietPlansTableRow"

function TraineeDietPlansTable({ diets, count }) {
    // Sorting function
    const sortByStatusAndTime = (a, b) => {
        if (a.status === "Current" && b.status !== "Current") {
            return -1;
        }
        if (a.status !== "Current" && b.status === "Current") {
            return 1;
        }
        return new Date(b.createdAt) - new Date(a.createdAt);
    };
    // Sort the array
    const sortedDiets = diets.sort(sortByStatusAndTime);
    if (!count) return <Empty resource={"diet plans"} />
    return (
        <Table>
            <Table.Header>
                <tr className="capitalize">
                    <th className="w-1/6 px-4 py-2 text-left">diet plan name</th>
                    <th className="w-1/6 px-4 py-2 text-left">created at</th>
                    <th className="w-2/6 px-4 py-2 text-left">plan macros</th>
                    <th className="w-1/6 px-4 py-2 text-left">Actions</th>
                </tr>
            </Table.Header >
            <Table.Body data={sortedDiets} render={diet => <TraineeDietPlansTableRow diet={diet} key={diet._id} />} />
            <Table.Footer>
                <Pagination count={count} pages={PAGE_SIZE_MEALS} />
            </Table.Footer>
        </Table >
    )
}

export default TraineeDietPlansTable
