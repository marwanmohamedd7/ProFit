import FilterButtons from "../../../../ui/FilterButtons"
import SearchInput from "../../../../ui/SearchInput"
import Spinner from "../../../../ui/Spinner"
import TrainerSubscribedTraineesTable from "../subscribedTraineesTable/SubscribedTraineesTable"
import { useGetSubscribedTraineesAssessment } from "./useGetSubscribedTraineesAssessment"

function SubscribedTraineesAssessments() {
    const { getSubscribedTraineesAssessment, isLoading, count } = useGetSubscribedTraineesAssessment()
    if (isLoading) return <div className="flex items-center justify-center h-[60dvh]"><Spinner /></div>
    return (
        <>
            <div className="flex flex-wrap gap-2 lg:gap-0 justify-between py-4">
                <SearchInput placeholder="Search Trainee Name..." />
                <FilterButtons
                    fiterBtns={{
                        fiterFeild: "trainees",
                        options: [
                            { label: "All", value: "all" },
                            { label: "Active", value: "active" },
                            { label: "Blocked", value: "blocked" },
                            { label: "Pending", value: "pending" },
                        ]
                    }}
                />
            </div>
            <TrainerSubscribedTraineesTable trainees={getSubscribedTraineesAssessment} count={count} section="assessments" />
        </>
    )
}

export default SubscribedTraineesAssessments
