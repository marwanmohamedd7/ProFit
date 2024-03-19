import Empty from "../../../../../ui/Empty"
import Table from "../../../../../ui/Table"
import ProfilePackagesTableRow from "./ProfilePackagesTableRow"

function ProfilePackagesTable({ packages }) {
    if (!packages.length) return <Empty resource={"packages"} />
    return (
        <Table>
            <Table.Header>
                <tr className="capitalize text-left">
                    <th className="px-6 py-2">package name</th>
                    <th className="px-6 py-2">type</th>
                    <th className="px-6 py-2">price</th>
                    <th className="px-6 py-2">duration</th>
                    <th className="px-6 py-2">subscribers limit</th>
                    <th className="px-6 py-2">active</th>
                    <th className="px-6 py-2">actions</th>
                </tr>
            </Table.Header>
            <Table.Body data={packages} render={(packagee) => <ProfilePackagesTableRow packagee={packagee} key={packagee.id} />} />
            <Table.Footer total={packages.length} />
        </Table>
    )
}

export default ProfilePackagesTable
