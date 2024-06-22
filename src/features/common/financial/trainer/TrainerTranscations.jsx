import Spinner from "../../../../ui/Spinner"
import SearchInput from "../../../../ui/SearchInput"
import TrainerTranscationsTable from "./TrainerTranscationsTable"
import { useGetTrainerTranscations } from "./useGetTrainerTranscations";
import { useSearch } from "../../../../hooks/useSearch";
import FilterButtons from "../../../../ui/FilterButtons";
import TableOperationsContainer from "../../../../ui/TableOperationsContainer";

function TrainerTranscations() {
    const { getTrainerTranscations, allTrainerTranscations, count, isLoading } = useGetTrainerTranscations()
    const { searchedItems, searchKeyword, setSearchKeyword } = useSearch(allTrainerTranscations, ["firstName", "lastName", "packageName", "subscriptionType", "duration", "Amount", "status"]);
    if (isLoading) return <div className="h-[50dvh]"><Spinner /></div>
    const dataCount = searchKeyword ? 1 : count
    const dataReady = searchKeyword ? searchedItems : getTrainerTranscations;
    return (
        <TableOperationsContainer>
            <div className="space-y-4">
                <div className="flex flex-wrap gap-2 lg:gap-0 justify-between px-4">
                    <SearchInput placeholder="search subscription..." setSearchKeyword={setSearchKeyword} />
                    <FilterButtons
                        fiterBtns={{
                            fiterFeild: "subscriptions",
                            options: [
                                { label: "All", value: "All" },
                                { label: "Active", value: "Active" },
                                { label: "Expired", value: "Expired" },
                                { label: "Cancelled", value: "Cancelled" },
                            ]
                        }}
                    />
                </div>
                <TrainerTranscationsTable transcations={dataReady} count={dataCount} />
            </div>
        </TableOperationsContainer>
    )
}

export default TrainerTranscations
