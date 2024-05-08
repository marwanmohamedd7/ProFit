import Spinner from "../../../../ui/Spinner"
import SearchInput from "../../../../ui/SearchInput"
import TrainerTranscationsTable from "./TrainerTranscationsTable"
import { useGetTrainerTranscations } from "./useGetTrainerTranscations";
function TrainerTranscations() {
    const { getTrainerTranscations = [], count, isLoading } = useGetTrainerTranscations()
    if (isLoading) return <div className="h-[40dvh]"><Spinner /></div>
    return (
        <>
            <div className="space-y-4">
                <SearchInput placeholder="search subscription..." />
                <TrainerTranscationsTable transcations={getTrainerTranscations} count={count} />
            </div>
        </>
    )
}

export default TrainerTranscations
