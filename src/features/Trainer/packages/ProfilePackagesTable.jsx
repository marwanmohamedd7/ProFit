import Empty from "../../../ui/Empty"
import Pagination from "../../../ui/Pagination"
import Table from "../../../ui/Table"
import { PAGE_SIZE_DEFAULT } from "../../../utils/constants"
import ProfilePackagesTableRow from "./ProfilePackagesTableRow"

function ProfilePackagesTable({ packages, count }) {
    if (!count) return <Empty resource={"packages"} />
    const activePackages = packages.reduce((acc, cur) => cur.active ? acc + 1 : acc, 0)
    return (
        <Table>
            <Table.Header>
                <tr className="capitalize text-left">
                    <th className="px-4 py-2">package name</th>
                    <th className="px-4 py-2">type</th>
                    <th className="px-4 py-2">price</th>
                    <th className="px-4 py-2">duration</th>
                    <th className="px-4 py-2">subscribers limit</th>
                    <th className="px-4 py-2">active</th>
                    <th className="px-4 py-2">actions</th>
                </tr>
            </Table.Header>
            <Table.Body data={packages} render={(packagee) => <ProfilePackagesTableRow packagee={packagee} activePackages={activePackages} key={packagee._id} />} />
            <Table.Footer>
                <Pagination count={count} pages={PAGE_SIZE_DEFAULT} />
            </Table.Footer>
        </Table>
    )
}

export default ProfilePackagesTable
