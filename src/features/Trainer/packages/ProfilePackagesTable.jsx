import Empty from "../../../ui/Empty"
import Pagination from "../../../ui/Pagination"
import Table from "../../../ui/Table"
import { PAGE_SIZE_DEFAULT } from "../../../utils/constants"
import ProfilePackagesTableRow from "./ProfilePackagesTableRow"
import SortTableColumnsHeader from "../../../ui/SortTableColumnsHeader"
import { useSorting } from "../../../hooks/useSorting"

const columns = [
    { key: "packageName", label: "package name" },
    { key: "packageType", label: "type" },
    { key: "price", label: "price" },
    { key: "duration", label: "duration" },
    { key: "subscribersLimit", label: "subscribers limit" },
];

function ProfilePackagesTable({ packages, count, isLoading }) {
    const { sortedData, sortConfig, setSortConfig } = useSorting(packages);
    if (!count || !packages.length) return <Empty resource={"packages"} />
    const activePackages = packages.reduce((acc, cur) => cur.active ? acc + 1 : acc, 0)
    return (
        <Table>
            <Table.Header>
                {columns.map(({ key, label }) => (
                    <th className="px-4 py-2" key={label}>
                        <SortTableColumnsHeader
                            sortingKey={key}
                            columnName={label}
                            sortConfig={sortConfig}
                            setSortConfig={setSortConfig}
                        />
                    </th>
                ))}
                <th className="px-4 py-2">active</th>
                <th className="px-4 py-2">actions</th>
            </Table.Header>
            <Table.Body data={sortedData} render={(packageData) => <ProfilePackagesTableRow packageData={packageData} activePackages={activePackages} isLoading={isLoading} key={packageData._id} />} />
            <Table.Footer>
                <Pagination count={count} pages={PAGE_SIZE_DEFAULT} />
            </Table.Footer>
        </Table>
    )
}

export default ProfilePackagesTable
