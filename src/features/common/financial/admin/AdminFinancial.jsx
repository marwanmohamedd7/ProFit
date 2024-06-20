import Spinner from "../../../../ui/Spinner"
import SearchInput from "../../../../ui/SearchInput"
import AdminFinancialTable from "./AdminFinancialTable"
import { useGetAdminFinancials } from "./useGetAdminFinancials"
import TableOperationsContainer from "../../../../ui/TableOperationsContainer"
import FilterButtons from "../../../../ui/FilterButtons"
import { useSearch } from "../../../../hooks/useSearch"

function AdminFinancial() {
    const { getAdminFinancials, allAdminFinancials, count, isLoading } = useGetAdminFinancials();
    const { searchedItems, searchKeyword, setSearchKeyword } = useSearch(allAdminFinancials, ["trainerName", "traineeName", "subscriptionType", "status", "duration", "Amount", "packageName"]);
    if (isLoading) return <div className="h-[50dvh]"><Spinner /></div>
    const dataCount = searchKeyword ? 1 : count
    const dataReady = searchKeyword ? searchedItems : getAdminFinancials;
    return (
        <TableOperationsContainer>
            <div className="space-y-4">
                <div className="flex flex-wrap gap-2 lg:gap-0 justify-between px-4">
                    <SearchInput
                        placeholder="search transcation..."
                        setSearchKeyword={setSearchKeyword}
                    />
                    <FilterButtons
                        fiterBtns={{
                            fiterFeild: "transcations",
                            options: [
                                { label: "All", value: "All" },
                                { label: "Active", value: "Active" },
                                { label: "Expired", value: "Expired" },
                                { label: "Pending", value: "Pending" },
                                { label: "Cancelled", value: "Cancelled" },
                            ]
                        }}
                    />
                </div>
                <AdminFinancialTable transcations={dataReady} count={dataCount} />
            </div>
        </TableOperationsContainer>
    )
}

export default AdminFinancial
