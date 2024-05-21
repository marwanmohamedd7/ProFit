import TrainersTable from "./SystemTrainersTable";
import SearchInput from "../../../../ui/SearchInput";
import FilterButtons from "../../../../ui/FilterButtons";

function SystemTrainers({ users, count }) {
    return (
        <>
            <div className="flex flex-wrap gap-2 lg:gap-0 justify-between mb-2">
                <SearchInput placeholder="Search Trainer Name..." />
                <FilterButtons
                    fiterBtns={{
                        fiterFeild: "users",
                        options: [
                            { label: "All", value: "all" },
                            { label: "Accepted", value: "accepted" },
                            { label: "Blocked", value: "blocked" },
                            { label: "Pending", value: "pending" },
                        ]
                    }}
                />
            </div>
            <TrainersTable users={users} count={count} />
        </>
    )
}

export default SystemTrainers
