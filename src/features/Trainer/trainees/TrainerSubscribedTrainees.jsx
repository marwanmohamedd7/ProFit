import SearchInput from "../../../ui/SearchInput"
import FilterButtons from "../../../ui/FilterButtons"
import TrainerSubscribedTraineesTable from "./TrainerSubscribedTraineesTable"

function TrainerSubscribedTrainees() {
    return (
        <>
            <div className="flex flex-wrap gap-2 lg:gap-0 justify-between py-4">
                <SearchInput placeholder="Search Trainee Name..." />
                <FilterButtons
                    fiterFeilds={[
                        { label: "Active", value: "active" },
                        { label: "Blocked", value: "blocked" },
                        { label: "Pending", value: "pending" },
                    ]}
                />
            </div>
            <TrainerSubscribedTraineesTable />
        </>
    )
}

export default TrainerSubscribedTrainees
