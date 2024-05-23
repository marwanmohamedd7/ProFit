import SearchInput from "../../../../ui/SearchInput"
import FilterButtons from "../../../../ui/FilterButtons"
import SubscribedTraineesTable from "./SubscribedTraineesTable"
import { useGetSubscribedTrainees } from "./useGetSubscribedTrainees"
import Spinner from "../../../../ui/Spinner"

function SubscribedTrainees({ section = "dashboard" }) {
    const { getSubscribedTrainees, isLoading, count } = useGetSubscribedTrainees()
    if (isLoading) return <div className="flex items-center justify-center h-[60dvh]"><Spinner /></div>
    return (
        <>
            {
                section !== "dashboard" &&
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
            }
            <SubscribedTraineesTable trainees={getSubscribedTrainees} count={count} section={section} />
        </>
    )
}

export default SubscribedTrainees
