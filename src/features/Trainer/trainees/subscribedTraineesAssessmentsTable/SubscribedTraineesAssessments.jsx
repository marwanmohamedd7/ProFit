import { useSearch } from "../../../../hooks/useSearch"
import FilterButtons from "../../../../ui/FilterButtons"
import SearchInput from "../../../../ui/SearchInput"
import Spinner from "../../../../ui/Spinner"
import TableOperationsContainer from "../../../../ui/TableOperationsContainer"
import TrainerSubscribedTraineesTable from "../subscribedTraineesTable/SubscribedTraineesTable"
import { useGetSubscribedTraineesAssessment } from "./useGetSubscribedTraineesAssessment"

function SubscribedTraineesAssessments() {
    const { getSubscribedTraineesAssessment, allSubscribedTraineesAssessment, isLoading, count } = useGetSubscribedTraineesAssessment()
    const { searchedItems, searchKeyword, setSearchKeyword } = useSearch(allSubscribedTraineesAssessment, [["traineeId", "firstName"], ["traineeId", "lastName"], ["package", "packageName"], ["package", "packageType"], "subscriptionType", "status", "duration"]);
    if (isLoading) return <div className="flex items-center justify-center h-[60dvh]"><Spinner /></div>
    const dataCount = searchKeyword ? 1 : count
    const dataReady = searchKeyword ? searchedItems : getSubscribedTraineesAssessment;
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
                            { label: "Pending", value: "Pending" },
                            { label: "Cancelled", value: "Cancelled" },
                        ]
                    }}
                />
            </div>
            <TrainerSubscribedTraineesTable trainees={dataReady} count={dataCount} empty="assessments" />
        </TableOperationsContainer>
    )
}

export default SubscribedTraineesAssessments
