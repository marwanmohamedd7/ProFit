import SearchInput from "../../../../ui/SearchInput"
import FilterButtons from "../../../../ui/FilterButtons"
import SubscribedTraineesTable from "./SubscribedTraineesTable"
import { useGetSubscribedTrainees } from "./useGetSubscribedTrainees"
import Spinner from "../../../../ui/Spinner"
import { useSearch } from "../../../../hooks/useSearch"
import TableOperationsContainer from "../../../../ui/TableOperationsContainer"

function SubscribedTrainees() {
    const { getSubscribedTrainees, allSubscribedTrainees, isLoading, count } = useGetSubscribedTrainees();
    const { searchedItems, searchKeyword, setSearchKeyword } = useSearch(allSubscribedTrainees, [["traineeId", "firstName"], ["traineeId", "lastName"], ["package", "packageName"], ["package", "packageType"], "subscriptionType", "status", "duration"]);
    if (isLoading) return <div className="flex items-center justify-center h-[60dvh]"><Spinner /></div>
    const dataCount = searchKeyword ? 1 : count
    const dataReady = searchKeyword ? searchedItems : getSubscribedTrainees;
    return (
        <TableOperationsContainer>
            <div className="flex flex-wrap gap-2 lg:gap-0 justify-between px-4 pb-4">
                <SearchInput
                    placeholder="Search Trainee Name..."
                    setSearchKeyword={setSearchKeyword}
                />
                <FilterButtons
                    fiterBtns={{
                        fiterFeild: "trainees",
                        options: [
                            { label: "All", value: "All" },
                            { label: "Active", value: "Active" },
                            { label: "Expired", value: "Expired" },
                            { label: "Cancelled", value: "Cancelled" },
                        ]
                    }}
                />
            </div>
            <SubscribedTraineesTable trainees={dataReady} count={dataCount} />
        </TableOperationsContainer>
    )
}

export default SubscribedTrainees
