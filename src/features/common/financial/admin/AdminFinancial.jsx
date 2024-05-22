import Spinner from "../../../../ui/Spinner"
import SearchInput from "../../../../ui/SearchInput"
import AdminFinancialTable from "./AdminFinancialTable"
import { useGetAdminFinancials } from "./useGetAdminFinancials"

function AdminFinancial() {
    const { getAdminFinancials, count, isLoading } = useGetAdminFinancials()
    if (isLoading) return <div className="h-[50dvh]"><Spinner /></div>
    return (
        <>
            <div className="space-y-4">
                <SearchInput placeholder="search transcation..." />
                <AdminFinancialTable transcations={getAdminFinancials} count={count} />
            </div>
        </>
    )
}

export default AdminFinancial
